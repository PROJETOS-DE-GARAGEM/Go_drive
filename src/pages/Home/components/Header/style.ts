import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: "#FFF",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  logoContainer: {
    flexDirection: "row",
    marginTop: 10,
    marginBottom: 10,
    paddingLeft: 7,
    paddingRight: 7,
    alignItems: "center",
    gap: 10,
  },
  iconContainer: {
    backgroundColor: "#1f51d8",
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
  },
  imageIcon: {
    width: 40,
    height: 40,
    borderRadius: 25,
  },
  titleHeader: {
    fontSize: 20,
    fontWeight: "700",
    fontStyle: "italic",
  },
});

export default styles;