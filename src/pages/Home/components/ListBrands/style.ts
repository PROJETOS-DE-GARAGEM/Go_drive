import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  brandContainer: {
    marginTop: 6,
    flexDirection: "column",
    paddingLeft: 20,
  },
  iconBrand: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: "#1f51d8",
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 10,
      height: 10,
    },
    shadowOpacity: 1,
    shadowRadius: 5,
    elevation: 10,
  },
  titleContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  titleBrand: {
    fontWeight: "700",
    color: "#999",
    marginTop: 6,
  },
});

export default styles;
