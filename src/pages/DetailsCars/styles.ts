import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  containerDetailsCars: {
    flex: 1,
  },
  containerRentNowButton: {
    display: "flex",
    alignItems: "center",
    marginTop: 40
  },
  buttonIcon: {
    backgroundColor: "none"
  },
  imageCar: {
    width: 'auto', 
    height: 280, 
    borderRadius: 12,
    paddingHorizontal: 8 
  },
  containerCaracters: {
    flexDirection: "row",
    justifyContent: "center",
  },
  buttonCardCarousel: {
    borderRadius: 50,
    backgroundColor: "#fdfdfd",
    maxWidth: 40,
    maxHeight: 50,
  }
});

export default styles;