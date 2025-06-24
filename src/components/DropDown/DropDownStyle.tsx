import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    marginTop: 22,
  },
  label: { marginBottom: 4, color: "red" },
  dropdown: {
    padding: 12,
    borderWidth: 1.5,
    borderRadius: 16,
    borderColor: "#b0b8c1",
    width: 132,
    height: 55,
  },
  overlay: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#00000088",
  },
  modalContent: {
    backgroundColor: "white",
    marginHorizontal: 32,
    borderRadius: 8,
    padding: 16,
    maxHeight: "50%",
  },
  option: {
    paddingVertical: 12,
  },

  unselectedText: {
    // Cor do texto "Selecione..."
    color: "#C7C7CD",
    fontSize: 16,
    fontWeight: "500",
  },
  selectedOptionText: {
    // Cor do texto quando selecionado
    color: "#333",
    fontWeight: "500",
  },
});

export default styles;
