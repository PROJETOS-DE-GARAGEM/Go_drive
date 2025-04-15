import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: "#1f51d8",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
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
    color: "#FFF",
    fontSize: 25,
    fontWeight: "700",
    fontStyle: "italic",
  },
});

export default styles;