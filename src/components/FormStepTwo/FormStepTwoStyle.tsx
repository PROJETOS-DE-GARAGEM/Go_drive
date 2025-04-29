import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
  
    padding: 20,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  datePicker: {
    marginTop: 20,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20
  },
  button: {
    width: "48%", 
    alignItems: "center", 
    justifyContent: "space-between",
    textAlign: "center",
    marginTop: 5
  }
});

export default styles;
