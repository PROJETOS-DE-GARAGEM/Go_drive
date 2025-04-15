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
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,

    elevation: 8,
  },
  titleContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  titleBrand: {
    color: "#999",
  },
});

export default styles;
