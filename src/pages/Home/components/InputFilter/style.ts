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
    //borderWidth: 0.3,
    opacity: 0.4,
    elevation: 17,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
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
    //borderWidth: 0.3,
    opacity: 0.4,
    elevation: 17,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
  },
});

export default styles;
