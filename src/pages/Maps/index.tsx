import { useEffect, useState } from "react";
import {
  View,
  Text,
  Dimensions,
  TouchableOpacity,
  Platform,
  Linking,
} from "react-native";

import styles from "./style";

import FontAwesome from '@expo/vector-icons/FontAwesome';

import { Header } from "../../components/Header";
import { AccessDeniedLocation } from "./components/AccessDenied";

import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";

import { useHome } from "../../hooks/useHome";

type ParkingProps = {
  name: string;
  latitude: number;
  longitude: number;
};

const { width, height } = Dimensions.get("window");

export default function Maps() {
  const { cars, location, permissionDenied, openSettingsPermissionLocation } =
    useHome();

  const [region, setRegion] = useState({
    latitude: 0,
    longitude: 0,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });
  const [parkings, setParkings] = useState<ParkingProps[]>([]);
  const [adressParking, setAdressParking] = useState<ParkingProps>();

  useEffect(() => {
    const filteredAdress = cars.map((car) => ({
      name: car.parkingName,
      latitude: Number(car.parking.latitude),
      longitude: Number(car.parking.longitude),
    }));

    setParkings(filteredAdress);

    if (filteredAdress.length > 0) {
      const avgLatitude =
        filteredAdress.reduce((sum, loc) => sum + loc.latitude, 0) /
        filteredAdress.length;
      const avgLongitude =
        filteredAdress.reduce((sum, loc) => sum + loc.longitude, 0) /
        filteredAdress.length;
      setRegion({
        latitude: avgLatitude,
        longitude: avgLongitude,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      });
    }
  }, [cars, location]);

  async function handleOpenDeviceMap(addressParking: ParkingProps) {
  const { latitude, longitude } = addressParking;
  const latLng = `${latitude},${longitude}`;

  const url = Platform.select({
    ios: `http://maps.apple.com/?daddr=${latLng}&dirflg=d`,
    android: `google.navigation:q=${latLng}`,
  });

  if (!url) return;

  const canOpen = await Linking.canOpenURL(url);
  if (!canOpen) return;

  Linking.openURL(url);
}


  if (permissionDenied) {
    return (
      <View style={styles.container}>
        <AccessDeniedLocation
          openSettings={openSettingsPermissionLocation}
          errorPermission={permissionDenied}
        />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Header title="Estacionamentos" />
      <MapView
        style={{ width: width, height: height }}
        provider={PROVIDER_GOOGLE}
        loadingEnabled={true}
        zoomEnabled={true}
        initialRegion={region}
        camera={{
          center: {
            latitude: region.latitude,
            longitude: region.longitude,
          },
          pitch: 50,
          heading: 0,
          altitude: 1000,
          zoom: 14.6,
        }}
      >
        {parkings.map((marker, index) => (
          <Marker
            onPress={() => setAdressParking(marker)}
            title={marker.name}
            key={index}
            coordinate={{
              latitude: marker.latitude,
              longitude: marker.longitude,
            }}
          ></Marker>
        ))}
      </MapView>
      {adressParking && (
        <TouchableOpacity
          style={styles.buttonRoute}
          onPress={() => handleOpenDeviceMap(adressParking)}
        >
          <FontAwesome name="location-arrow" size={24} color="#FFF" />
          <Text style={styles.buttonTextAdress}>Como chegar?</Text>
        </TouchableOpacity>
      )}
    </View>
  );
}
