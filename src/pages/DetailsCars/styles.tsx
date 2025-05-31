import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  containerDetailsCars: {
    flex: 1,
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
    marginVertical: 10,
    marginLeft: 12,
  },
  cardsCharacters: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 10,
  },
});

export default styles;
