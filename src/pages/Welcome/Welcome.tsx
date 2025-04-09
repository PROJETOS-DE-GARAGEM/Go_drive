import { View, Image, Text } from "react-native";
import styles from "./WelcomeStyle";
import BgGradient from "../../components/BgGradient/BgGradientStyle";
import ButtonIcon from "../../components/ButtonIcon/ButtonIcon";
import { useNavigation } from "@react-navigation/native";

export default function Welcome() {
  const navigation = useNavigation();

  const handleNavigateToLogin = () => {
    navigation.navigate("AuthStack", { screen: "Login" });
  };

  return (
    <View style={styles.container}>
      <BgGradient />
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={require("../../../assets/image (3).png")}
        />
      </View>

      <View style={styles.content}>
        <Text style={styles.title}>Go Drive</Text>
        <Text style={styles.text}>Alugue agora, movimente-se rápido</Text>
        <ButtonIcon
          iconName="arrow-forward"
          iconSize={30}
          iconColor="white"
          style={{ backgroundColor: "rgba(255,255,255,0.3)" }}
          onPress={handleNavigateToLogin}
        />
      </View>
    </View>
  );
}
