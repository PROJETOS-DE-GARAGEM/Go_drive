import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(34, 34, 34, 0.4)",
  },
  contentFilter: {
    flex: 1.6,
    backgroundColor: "#FFF",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    flexDirection: "column",
  },
  containerTitleFilter: {
    margin: 15,
    height: 45,
    borderBottomStartRadius: "10%",
    borderBottomEndRadius: "10%",
    paddingHorizontal: 5,
  },
  textTitleFilter: {
    fontSize: 17,
    fontWeight: "700",
  },
  contentFilterBrands: {
    flex: 1,
    justifyContent: "space-between",
  },
  buttonFilter: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    marginBottom: 30,
  },
});

export default styles;
