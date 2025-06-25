import {
  View,
  Text,
  Dimensions,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";
import { Header } from "../../components/Header";
import { AccessDeniedLocation } from "./components/AccessDenied";
import { useMap } from "../../hooks/useMap";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import styles from "./style";

const { width, height } = Dimensions.get("window");

export default function Maps() {
  const {
    loading,
    location,
    adressParking,
    handleOpenDeviceMap,
    openSettingsPermissionLocation,
    parkings,
    region,
    setAdressParking,
    permissionDenied,
  } = useMap();

  if (loading || !region) {
    return (
      <View
        style={[
          styles.container,
          { justifyContent: "center", alignItems: "center" },
        ]}
      >
        <ActivityIndicator size="large" color="#1E50D7" />
        <Text>Carregando mapa...</Text>
      </View>
    );
  }

  if (permissionDenied) {
    return (
      <View style={styles.container}>
        <AccessDeniedLocation openSettings={openSettingsPermissionLocation} />
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
