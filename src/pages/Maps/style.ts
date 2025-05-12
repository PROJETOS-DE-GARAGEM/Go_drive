import { StyleSheet, Platform } from "react-native";

const styles = StyleSheet.create({
  container: {
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
  callout: {
    flexDirection: "column",
    gap: 20,
    backgroundColor: "#FFF",
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: "700",
  },
  buttonCallout: {
    width: "100%",
    height: 40,
    backgroundColor:"#1f51d8",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 12,
  },
  buttonText: {
    color: "#FFF",
    fontWeight: "700",
  },
  buttonRoute: {
    flexDirection: "row",
    gap: 10,
    position: "absolute",
    backgroundColor: "#1f51d8",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
    left: 40,
    right: 40,
    height: 50,
    bottom: Platform.OS === "ios" ? 160 : 125,
  },
  buttonTextAdress: {
    color: "#FFF",
    fontSize: 18,
    fontWeight: "700",
  },
});

export default styles;