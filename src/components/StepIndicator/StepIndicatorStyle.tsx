import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 40,
    marginTop: 50,
  },
  circle: {
    width: 70,
    height: 70,
    borderRadius: 999,
    backgroundColor: "#1f51d8",
    alignItems: "center",
    justifyContent: "center",
  },
  activeCircle: {
    backgroundColor: "#28b573",
  },
  line: {
    width: 80,
    height: 8,
    backgroundColor: "#1f51d8",
  },
  circleText: {
    color: "#fff",
    fontSize: 25,
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default styles;
