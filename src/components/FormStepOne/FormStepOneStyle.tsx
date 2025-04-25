import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
    marginTop: 10
  },
  button: {
    width: "48%", 
    alignItems: "center", 
    justifyContent: "space-between",
    textAlign: "center",
    marginTop: 5  },
});

export default styles;
