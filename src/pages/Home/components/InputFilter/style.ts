import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  containerSearch: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
    marginLeft: 10,
    marginRight: 10,
  },
  inputContainer: {
    backgroundColor: "#FFF",
    width: "83%",
    justifyContent: "center",
    height: 50,
    borderRadius: 7,
    borderWidth: 0.3,
    opacity: 0.4,
  },
  inputSearch: {
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: 10,
    gap: 10,
  },
  iconContainer: {
    backgroundColor: "#FFF",
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 0.3,
    opacity: 0.4,
  },
});

export default styles;
