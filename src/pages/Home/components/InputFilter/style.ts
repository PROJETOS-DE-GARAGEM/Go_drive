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
    width: "100%",
    marginBottom: 10,
    justifyContent: "center",
    height: 50,
    borderRadius: 16,
    borderWidth: 1.5,
    borderColor: "#b0b8c1",
    paddingHorizontal: 9,
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
    opacity: 0.4,
    elevation: 17,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
  },
});

export default styles;
