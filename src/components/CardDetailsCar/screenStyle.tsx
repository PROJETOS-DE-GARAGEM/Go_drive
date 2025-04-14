import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  containerCardDetails: {
     marginHorizontal: 15,
     paddingVertical: 5,
     boxShadow: '0px 1px px 0px rgba(196,197,202,0.75)'
  },
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingLeft: 5
  },
  titleBrand: {
    fontSize: 18,
    fontWeight: 600,
    paddingVertical: 5
  },
  description: {
    color: "#C4C5CA",
    maxWidth: 180
  },
  conteinerAvailableButtonIcon: {
    flexDirection: "row",
    alignItems: "center"
  },
  available: {
    color: "#C4C5CA"
  },
});

export default styles;