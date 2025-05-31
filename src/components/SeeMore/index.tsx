import { TouchableOpacity, Text } from "react-native";

import { useNavigation } from "@react-navigation/native";

import { Entypo } from "@expo/vector-icons";
import styles from "./style";

const SeeMore = () => {
  const navigation = useNavigation();

  const handleNavigateDetailCar = () => {
  navigation.navigate("AppStack", {screen: "FeedCars", params:{}})
}

  return(
    <TouchableOpacity 
      onPress={handleNavigateDetailCar}
      style={styles.container}>
      <Text style={styles.buttonText}>Ver todos</Text>
      <Entypo name="chevron-right" size={30} color="black" />
    </TouchableOpacity>
  )
}

export { SeeMore };