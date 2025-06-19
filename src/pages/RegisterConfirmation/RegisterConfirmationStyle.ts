import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  cardContainer: {
    backgroundColor: "#fff",
    width: "85%",
    height: "45%",
    borderRadius: 30,
    padding: 25,
  },
  iconContainer: {
    width: 70,
    height: 70,
    borderRadius: 999,
    backgroundColor: "#28b573",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 25,
    marginTop: 30,
  },
  titleContainer: {
    alignItems: "center",
  },

  title: {
    fontSize: 35,
    fontWeight: "bold",
    marginBottom: 40
  },
  button: {
    width: "100%",
  },
});
