import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  containerCardDetails: {
    width: "100%",
    marginHorizontal: 4,
    paddingVertical: 5,
  },
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  titleBrand: {
    fontSize: 18,
    fontWeight: 600,
    paddingVertical: 15,
  },
  containerDescription: {
    width: "76%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 20,
  },
  description: {
    textAlign: "justify",
  },
  conteinerAvailableButtonIcon: {
    backgroundColor: "#EBEBEB",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 25,
    padding: 3,
  },
  available: {
    color: "gray",
    left: 7,
  },
});

export default styles;
