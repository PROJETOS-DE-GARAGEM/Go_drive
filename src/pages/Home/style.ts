import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(244,245,247,255)",
  },
  title: {
    marginTop: 20,
    fontSize: 23,
    fontWeight: "700",
    paddingLeft: 10,
  },
  listCarsContainer: {
    flex: 1,
    backgroundColor: "#FAFCFD",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
  headerCarsContainer: {
    marginTop: 7,
    paddingStart: 5,
    marginBottom: 20,
  },
  buttonSpectAll: {
    top: 10,
    marginRight: 20,
    height: 30,
    paddingHorizontal: 12,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
  buttonSpectAllText: {
    color: "#888",
    fontSize: 17,
  },
});

export default styles;
