import { Text, View } from "react-native";
import BgGradient from "../../components/BgGradient/BgGradientStyle";
import { styles } from "./RegisterConfirmationStyle";
import FontAwesome from "@expo/vector-icons/FontAwesome"; // Biblioteca de ícones
import Button from "../../components/Button/Button";
import { useNavigation } from "@react-navigation/native";

export default function RegisterConfirmation() {
  const navigation = useNavigation();

  const backScreenLogin = () => {
    navigation.navigate("AuthStack", {
      screen: "Login",
    });
  };

  return (
    <View style={styles.container}>
      <BgGradient />
      <View style={styles.cardContainer}>
        <View
          style={{ flex: 1,  alignItems: "center" }}
        >
          <View style={styles.iconContainer}>
            <FontAwesome name="check" size={40} color="white" />
          </View>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>Cadastro realizado com sucesso!</Text>
          </View>
        </View>

        <Button
          onPress={backScreenLogin}
          style={styles.button}
          name="Ir para tela de login"
        />
      </View>
    </View>
  );
}
