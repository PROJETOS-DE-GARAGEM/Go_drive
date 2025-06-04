import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  paymentContainer: {
    padding: 5
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    paddingVertical: 10,
    marginVertical: 10,
    marginLeft: 12,
  },
  datePickerContainer: {
    gap: 25,
    alignItems: "center",
  },
  cardPayment: {
    height: 110,
    width: "100%",
    marginBottom: 20,
    padding: 10,
    backgroundColor: "#ffffff",
    borderRadius: 45,
    elevation: 7,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  flatListContainer: {
    alignItems: "center",
    
  },
  iconContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  textIconContainer: {
    marginLeft: 15,
    fontSize: 14,
    fontWeight: "bold",
    color: "#939ba4",
  },
  priceHora: {
    color: "#939ba4",
    fontWeight: "bold",
    fontSize: 14,
  },
  price: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#1f51d8",
    marginRight: 10,
  },
  button: {
    marginTop: 5,
  },
});

export default styles;
