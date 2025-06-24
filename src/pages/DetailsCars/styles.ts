import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  containerDetailsCars: {
    flex: 1,
    backgroundColor: "#fff"
  },
  containerRentNowButton: {
    marginTop: 50,
    alignItems: "center",
  },
  buttonIcon: {
    backgroundColor: "none",
  },
  imageCar: {
    width: "auto",
    height: 240,
    borderRadius: 12,
    marginTop: 20
  },
  containerCaracters: {
    flexDirection: "row",
    justifyContent: "center",
    marginHorizontal: 10,
  },
  buttonCardCarousel: {
    borderRadius: 50,
    backgroundColor: "#fdfdfd",
    maxWidth: 40,
    maxHeight: 50,
  },
  titleCharacters: {
    fontSize: 18,
    fontWeight: 600,
    paddingVertical: 10,
    marginVertical: 15,
    marginLeft: 12,
    marginTop:-3
  },
  cardsCharacters: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 10,
  },
});

export default styles;
