import * as Location from "expo-location";

export const mapsService = {
  getCurrentLocation: async (): Promise<Location.LocationObject> => {
    const location = await Location.getCurrentPositionAsync();
    return location;
  }
};