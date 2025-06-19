import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  imageCar: {
    width: 'auto', 
    height: 280, 
    borderRadius: 12,
    paddingHorizontal: 8 
  },
  containerCodeRelease: {
    display: "flex",
    alignItems: "center",
    marginTop: 40,
  },
  containerToken: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 12, 
    marginVertical: 16,
  },
  digitoContainer: {
    borderBottomWidth: 2,
    borderColor: '#242F40',
    width: 40,
    alignItems: 'center',
    paddingVertical: 8,
  },
  digito: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#242F40',
  },
});

export default styles;