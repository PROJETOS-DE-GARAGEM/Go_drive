import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  brandContainer: {
    marginTop: 6,
    flexDirection: "column",
    paddingLeft: 20,
  },
  iconBrand: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: "#1f51d8",
    justifyContent: "center",
    alignItems: "center",
    elevation: 17,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
  },
  titleContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  titleBrand: {
    fontWeight: "700",
    color: "#999",
    marginTop: 10,
  },
});

export default styles;
