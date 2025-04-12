import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  brandContainer: {
    marginTop: 10,
    flexDirection: "column",
    gap: 5,
  },
  iconBrand: {
    backgroundColor: "#1f51d8",
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  titleContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  titleBrand: {
    color: "#999"
  },
});

export default styles;