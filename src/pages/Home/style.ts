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
    marginBottom: 5,
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
