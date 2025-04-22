import { Platform, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  formContainer: {
    backgroundColor: "#fff",
    borderTopEndRadius: 24,
    borderTopStartRadius: 24,
    paddingLeft: 20,
    paddingRight: 20
  },

  formTitle: {
    color: "#545e69",
    fontSize: 24,
    fontFamily: "Catamaran",
    fontWeight: "700",
    
  },

  input: {
    width: "100%",
    height: 48,
    borderRadius: 16,
    fontSize: 16,
    fontFamily: "Catamaran",
    fontWeight: "500",
    lineHeight: 20,
    paddingHorizontal: 9,
    marginBottom: 20,
    borderWidth: 1.5,
    borderColor: "#f3f5f7",
    backgroundColor: "rgba(255,255,255,0.5)",
    color: "#333",
  },
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: 'space-between',
    marginBottom: 20
  },

  buttonWrapper: {
    position: "absolute", // Posiciona o botão de forma absoluta
    bottom: Platform.OS === "android" ? 40 : 10, // Ajusta o espaçamento inferior para Android e iOS
    left: 20, // Margem à esquerda
    right: 20, // Margem à direita
    alignItems: "center", // Centraliza o botão horizontalmente
    zIndex: 1,
  },
});

export default styles;
