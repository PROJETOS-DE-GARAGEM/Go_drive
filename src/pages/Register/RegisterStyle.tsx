import { Platform, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  registerContainer: {
    flex: 1,
  },
  registerTitle: {
    color: "#ffffff",
    fontSize: 32,
    fontFamily: "Catamaran",
    fontWeight: "700",
    lineHeight: 38,
    textAlign: "center",
  },
  registerText: {
    color: "#d9dde1",
    fontSize: 16,
    fontFamily: "Catamaran",
    fontWeight: "500",
    lineHeight: 20,
    textAlign: "center",
  },
  registerImageContainer: {
    flex: 3,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
  },
  registerImage: {
    width: 50,
    height: 50,
    marginBottom: 20,
  },
  formContainer: {
    flex: 7,
    backgroundColor: "#fff",
    borderTopEndRadius: 24,
    borderTopStartRadius: 24,
    justifyContent: "center",
  },
  headerScrollContainer: {
    height: 20,
  },
  buttonInput:{
    justifyContent: 'center',
    alignItems: "center",
    marginBottom: Platform.OS === "android" ? 20 : 40,
  },
  linkButton: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 6,
  },
  linkText: {
    color: "#333",
    fontSize: 15,
  }
});

export default styles;
