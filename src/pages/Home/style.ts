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
    backgroundColor: "#FFF",
    marginTop: 20,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
  headerCarsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingStart: 5,
    paddingEnd: 5,
  },
  buttonSpectAll: {
    top: 10,
    paddingRight: 15,
  },
  buttonSpectAllText: {
    color: "#999",
    fontSize: 16,
  },
});

export default styles;
