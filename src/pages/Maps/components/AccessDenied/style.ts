import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent:  "center",
    paddingHorizontal: 14,
  },
  image: {
    left: 14,
    width: 400,
    height: 350,
  },
  titleContainer: {
    marginBottom: 10,
  },
  title: {
    fontSize: 16,
    textAlign: "justify",
  },
  buttonOpenSettings: {
    backgroundColor:"#1f51d8",
    height: 50,
    borderRadius: 25,
  },
});

export default styles;