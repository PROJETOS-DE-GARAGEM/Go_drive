import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  formContainer: {
    flex: 1,
    backgroundColor: "#fff",
    borderTopEndRadius: 24,
    borderTopStartRadius: 24,
    padding: 30,
  },

  formTitle: {
    color: "#545e69",
    fontSize: 24,
    fontFamily: "Catamaran",
    fontWeight: "700",
    
  },

  input: {
    width: "100%",
    height: 48,
    borderRadius: 16,
    fontSize: 16,
    fontFamily: "Catamaran",
    fontWeight: "500",
    lineHeight: 20,
    paddingHorizontal: 9,
    marginBottom: 20,
    borderWidth: 1.5,
    borderColor: "#f3f5f7",
    backgroundColor: "rgba(255,255,255,0.5)",
    color: "#333",
  },
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: 'space-between',
    marginBottom: 20
  },
});

export default styles;
