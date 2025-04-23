import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    width: 200,
    height: 270,
    borderTopLeftRadius: 7,
    borderTopRightRadius: 7,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    marginBottom: 10,
    backgroundColor: "#fff",
    elevation: 7,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
  },
  imageCar: {
    width: 200,
    height: 160,
    borderTopLeftRadius: 7,
    borderTopRightRadius: 7,
  },
  partialInfoCar: {
    padding: 10,
  },
  endInfoCar: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingLeft: 10,
    paddingRight: 10,
    marginBottom: 12,
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
