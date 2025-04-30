import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  constainer: {
    flex: 1,
  },
  inputContainer: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "#545e69",
    alignItems: "center",
    left: 10,
    right: 10,
    paddingLeft: 16,
    paddingRight: 16,
    gap: 10,
    height: 50,
    position: "absolute",
    borderRadius: 25,
    top: 90,
    zIndex: 99,
  },
  input: {
    flex: 1,
    fontSize: 17,
    color: "#FFF"
  },
  map: {
    width: "100%",
    height: "100%",
  },
});

export default styles;