import { StyleSheet, Platform } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(34, 34, 34, 0.5)",
  },
  containerTerms: {
    height: 600,
    padding: 15,
    marginVertical: Platform.OS === "ios" ? "40%" : "30%",
    marginLeft: 10,
    marginRight: 10,
    backgroundColor: "#FFF",
    borderRadius: 12,
  },
  contentTerms: {
    padding: 20,
  },
  contentTitleTerms: {
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 15,
    marginTop: 15,
  },
  titleText: {
    fontWeight: "bold",
    fontSize: 16,
  },
  section: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 20,
  },
  checkbox: {
    margin: 8,
  },
  contentButton: {
    marginTop: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    paddingHorizontal: 40,
    backgroundColor: "#1f51d8",
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
    padding: 10,
  },
  buttonText: {
    color: "#FFF",
    fontWeight: "bold",
  },
});

export default styles;
