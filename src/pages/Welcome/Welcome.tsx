import { View, Image, Text } from "react-native";
import styles from "./WelcomeStyle";
import BgGradient from "../../components/BgGradient/BgGradientStyle";
import ButtonIcon from "../../components/ButtonIcon/ButtonIcon";

export default function Welcome() {
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
        <ButtonIcon iconName="arrow-forward" iconSize={30} iconColor="white" />
      </View>
    </View>
  );
}
