import { useState, useEffect } from "react";
import { Linking, Platform, AppState } from "react-native";
import * as Location from "expo-location";
import { mapsService } from "../services/mapsService";
import { homeService } from "../services/homeService";
import { Parking } from "../types/parking.type";

const useMap = () => {
  const [loading, setLoading] = useState(true);
  const [location, setLocation] = useState<Location.LocationObject | null>(
    null
  );
  const [permissionDenied, setPermissionDenied] = useState(false);
  const [parkings, setParkings] = useState<Parking[]>([]);
  const [adressParking, setAdressParking] = useState<Parking>();
  const [region, setRegion] = useState<{
    latitude: number;
    longitude: number;
    latitudeDelta: number;
    longitudeDelta: number;
  } | null>(null);

  useEffect(() => {
    getAddressParkings();
    currentLocation();

    const subscription = AppState.addEventListener("change", (state) => {
      if (state === "active") {
        currentLocation();
      }
    });

    return () => subscription.remove();
  }, []);

  useEffect(() => {
    console.log("📍 Parkings recebidos:", parkings);

    if (parkings.length > 0) {
      const avgLatitude =
        parkings.reduce((sum, loc) => sum + Number(loc.latitude), 0) /
        parkings.length;
      const avgLongitude =
        parkings.reduce((sum, loc) => sum + Number(loc.longitude), 0) /
        parkings.length;

      const calculatedRegion = {
        latitude: avgLatitude,
        longitude: avgLongitude,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      };

      console.log("🗺️ Região calculada:", calculatedRegion);

      setRegion(calculatedRegion);
    } else {
      console.log("⚠️ Nenhum estacionamento retornado!");
      // Valor padrão para Fortaleza, CE
      setRegion({
        latitude: -3.7319,
        longitude: -38.5267,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      });
    }
  }, [parkings]);

  const currentLocation = async () => {
    setLoading(true);
    try {
      const { status } = await Location.requestForegroundPermissionsAsync();

      if (status !== "granted") {
        setPermissionDenied(true);
        setLoading(false);
        return;
      }

      const loc = await mapsService.getCurrentLocation();
      if (loc) {
        setLocation(loc);
        setPermissionDenied(false);
      } else {
        setPermissionDenied(true);
      }
    } catch (error) {
      console.log("Erro ao obter localização:", error);
      setPermissionDenied(true);
    } finally {
      setLoading(false);
    }
  };

  const getAddressParkings = async () => {
    try {
      const cars = await homeService.fetchAllCars();
      const filtered = cars.map((car) => ({
        name: car.parkingName,
        latitude: Number(car.parking.latitude),
        longitude: Number(car.parking.longitude),
      }));
      setParkings(filtered);
    } catch (error) {
      console.log("Erro ao buscar estacionamentos:", error);
    }
  };

  const openSettingsPermissionLocation = () => {
    Linking.openSettings();
  };

  const handleOpenDeviceMap = async (address: Parking) => {
    const latLng = `${address.latitude},${address.longitude}`;
    const url = Platform.select({
      ios: `http://maps.apple.com/?daddr=${latLng}&dirflg=d`,
      android: `google.navigation:q=${latLng}`,
    });

    if (!url) return;

    const canOpen = await Linking.canOpenURL(url);
    if (canOpen) Linking.openURL(url);
  };

  return {
    loading,
    location,
    permissionDenied,
    openSettingsPermissionLocation,
    parkings,
    adressParking,
    setAdressParking,
    region,
    handleOpenDeviceMap,
  };
};

export { useMap };
