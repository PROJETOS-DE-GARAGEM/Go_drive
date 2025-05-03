import { useEffect, useState } from "react";
import { View } from "react-native";

import styles from "./style";

import { Header } from "../../components/Header";
import { AccessDeniedLocation } from "./components/AccessDenied";
import MapView, { Marker } from "react-native-maps";

import { useHome } from "../../hooks/useHome";

type ParkingProps = {
  latitude: number;
  longitude: number;
};

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

  useEffect(() => {
    const filteredAdress = cars
      .map((car) => car.parking)
      .filter((parking) => parking !== undefined)
      .map((parking) => ({
        latitude: Number(parking.latitude),
        longitude: Number(parking.longitude),
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
      <Header title="Maps" />
      <MapView
        style={styles.map}
        loadingEnabled={true}
        zoomEnabled={true}
        initialRegion={region}
      >
        {parkings.map((marker, index) => (
          <Marker
            key={index}
            coordinate={{
              latitude: marker.latitude,
              longitude: marker.longitude,
            }}
          />
        ))}
      </MapView>
    </View>
  );
}
