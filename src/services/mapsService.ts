import * as Location from "expo-location";

export const mapsService = {
  getCurrentLocation: async(): Promise<Location.LocationObject | null> => {
    let { granted } = await Location.requestForegroundPermissionsAsync();

    if (granted) {
      const location = await Location.getCurrentPositionAsync();
      return location;
    } else {
      return null;
    }
  }
}