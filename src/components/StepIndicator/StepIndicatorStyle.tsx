import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 25,
    marginTop: 40,
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
  activeLine: {
    backgroundColor: "#28b573", // Cor da linha ativa
  },
});

export default styles;
