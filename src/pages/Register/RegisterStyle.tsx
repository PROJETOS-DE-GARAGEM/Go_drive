import { StyleSheet } from "react-native";

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
    justifyContent: "center",
    alignItems: "center",
    marginTop: 30,
  },
  registerImage: {
    width: 50,
    height: 50,
    marginBottom: 20,
  },
  formContainer: {
    flex: 1,
    marginTop: 50
  }
});

export default styles;
