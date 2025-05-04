import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },

  row: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    
  },
  button: {
    width: "48%",
    alignItems: "center",
    justifyContent: "space-between",
    textAlign: "center",
    marginTop: 5,
  },
});

export default styles;
