import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: "#0008",
  },
  PaymentContainer: {
    backgroundColor: "#fff",
    padding: 24,
    borderRadius: 12,
    width: "100%",
    height: "100%",
  },

  title: {
    fontWeight: "600",
    fontSize: 25,
    marginTop: 30,
    marginBottom: 20,
    textAlign: "center",
  },

  resumeContainer: {
    backgroundColor: "#eff6ff",
    height: "25%",
    borderRadius: 5,
    padding: 18,
  },

  resumeTitle: {
    fontWeight: "500",
    fontSize: 20,
    marginBottom: 10,
    color: "#1f2baf",
  },
  resumeCar: {
    fontWeight: "500",
    fontSize: 20,
    marginBottom: 10,
    marginLeft: 15,
  },
  resumeText: {
    fontWeight: "bold",
    fontSize: 15,
    marginBottom: 5,
  },
  resumeText2: {
    fontWeight: "400",
  },
  chargeContainer: {
    backgroundColor: "#f9fafb",
    height: "25%",
    borderRadius: 5,
    padding: 18,
    marginTop: 20,
  },
  chargeTitle: {
    fontWeight: "500",
    fontSize: 20,
    marginBottom: 15,
  },
  chargeText: {
    fontSize: 17,
    marginBottom: 10,
  },
  totalText: {
    fontWeight: "600",
    fontSize: 19,
    marginBottom: 20,
  },
});

export default styles;
