import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 2,
    justifyContent: "center",
    alignItems: "center",
  },
  imageContainer: {
    flex: 2,
    justifyContent: 'center',
    alignItems: "center",
  },

  image: {
    width: 420,
    height: 420,
    resizeMode: "cover",
  },
  title: {
    color: "#ffffff",
    fontSize: 32,
    fontFamily: "Catamaran",
    fontWeight: "700",
    lineHeight: 38,
    textAlign: "center",
    
  },
  text: {
    color: '#d9dde1',
    fontSize: 16,
    fontFamily: 'Catamaran',
    fontWeight: '500',
    lineHeight: 20,
    textAlign: 'center',
  } 
});

export default styles;
