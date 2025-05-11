import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#1f51d8",
    height: 70,
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: 14,
    paddingRight: 14,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  containerIcon: {
    backgroundColor: "#FFF",
    width: 40,
    height: 40,
    borderRadius: 25,
    marginTop: 15,
    marginBottom: 15,
    justifyContent: "center",
    alignItems: "center",
    position: 'absolute',
    left: 15,
  },
  containerTitle: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 21,
    color: "#FFF",
    fontWeight: "700",
    textAlign: "center",
  },
});

export default styles;
