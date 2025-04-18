import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    width: "100%",
    borderWidth: 0.5,
    borderTopLeftRadius: 7,
    borderTopRightRadius: 7,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    marginBottom: 14,
  },
  imageCar: {
    width: "100%",
    height: 140,
    borderTopLeftRadius: 7,
    borderTopRightRadius: 7
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
})

export default styles;
