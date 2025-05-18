import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  containerCardDetails: {
     marginHorizontal: 4,
     paddingVertical: 5,
     boxShadow: '0px -1px px 0px rgba(196,197,202,0.75)'
  },
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  titleBrand: {
    fontSize: 18,
    fontWeight: 600,
    paddingVertical: 15,
  },
  description: {
    color: "#000",
    textAlign: "left",
    maxWidth: 340,
  },
  conteinerAvailableButtonIcon: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    marginVertical: 6
  },
  containerDescription: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  available: {
    color: "#C4C5CA"
  },
  titleCharacters: {
    fontSize: 18,
    fontWeight: 600,
    paddingVertical: 10,
    marginVertical: 10
  },
  detailsCarousel: {
    display: "flex",
    justifyContent: "flex-start",
    width: 125,
    height: 150,
    backgroundColor: "#EBEBEB",
    borderRadius: 30,
    padding: 10,
  },
  nameCharacters: {
    color: '#C4C5CA',
    marginVertical: 8,
  },
  descriptionCharacters: {

  }
});

export default styles;