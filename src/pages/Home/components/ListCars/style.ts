import { StyleSheet, Platform } from "react-native";

const styles = StyleSheet.create({
  container: {
    width: 190,
    height: Platform.OS === "ios" ? 250 : 270,
    borderTopLeftRadius: 7,
    borderTopRightRadius: 7,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    backgroundColor: "#fff",
    elevation: 7,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
  },
  imageCar: {
    width: 190,
    height: 160,
    borderTopLeftRadius: 7,
    borderTopRightRadius: 7,
  },
  partialInfoCar: {
    padding: 7,
  },
  endInfoCar: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingLeft: 10,
    paddingRight: 10,
  },
  titleDetails: {
    fontSize: 16,
    fontWeight: "700",
  },
  textDetails: {
    fontSize: 12,
    color: "#999",
  },
});

export default styles;
