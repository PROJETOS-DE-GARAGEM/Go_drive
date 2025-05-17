import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  iconCalendar: {
    marginBottom: 4,
    paddingEnd: 12,
  },
  inputText: {
    width: "100%",
    color: "#333",
    alignItems: "center",
    paddingHorizontal: 9,
    fontSize: 16,
    height: 55,
    borderWidth: 1.5,
    borderColor: "#f3f5f7",
    backgroundColor: "rgba(255,255,255,0.5)",
    borderRadius: 16,
    fontFamily: "Catamaran",
    fontWeight: "500",
    lineHeight: 20,
  },
  containerInput: {
    justifyContent: "flex-end",

    flexDirection: "row",
    alignItems: "center",
  },
  TextTittle: {
    fontSize: 15,
  },
  buttonIconPicker: {
    position: "absolute",
  },
});

export default styles;
