import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 10, 
    marginBottom: 20,
  },

  button: {
    width: "48%",
    padding: 10,
  },
});

export default styles;
