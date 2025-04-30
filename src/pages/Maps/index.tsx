import { useEffect, useState } from "react";
import { View, TextInput } from "react-native";

import styles from "./style";

import { FontAwesome6 } from "@expo/vector-icons";
import { Header } from "../../components/Header";
import MapView, { Marker } from "react-native-maps";

import { useHome } from "../../hooks/useHome";

type ParkingProps = {
  latitude: string;
  longitude: string;
};

export default function Maps() {
  const { cars, location } = useHome();

  const [region, setRegion] = useState({
    latitude: location?.coords.latitude,
    longitude: location?.coords.longitude,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });
  const [parkings, setParkings] = useState<ParkingProps[]>([]);

  useEffect(() => {
    const filteredAdress = cars
      .map((car) => car.parking)
      .filter((parking) => parking !== undefined);

    setParkings(filteredAdress);
  }, [cars]);

  if (!location) {
    alert("Não foi possível obter a sua localização!");
    return;
  }

  return (
    <View style={styles.constainer}>
      <Header title="Maps" />
      {/* <View style={styles.inputContainer}>
        <FontAwesome6 name="location-dot" color={"#FFF"} size={35} />
        <TextInput 
          style={styles.input} 
          placeholder="Pesquise aqui"
          placeholderTextColor={"#FFF"}
          numberOfLines={1}
        />
      </View> */}
      <MapView
        style={styles.map}
        showsUserLocation
        showsMyLocationButton
        initialRegion={{
          latitude: location?.coords.latitude,
          longitude: location?.coords.longitude,
          latitudeDelta: 0.005,
          longitudeDelta: 0.005,
        }}
      >
        <Marker
          coordinate={{
            latitude: location?.coords.latitude,
            longitude: location?.coords.longitude,
          }}
        ></Marker>
      </MapView>
    </View>
  );
}
