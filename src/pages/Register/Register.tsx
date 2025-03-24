import { View, Image, Text } from "react-native";
import BgGradient from "../../components/BgGradient/BgGradientStyle";
import styles from "./RegisterStyle";
import Form from "../../components/Form/Form";

export default function Register() {
  return (
    <View style={styles.registerContainer}>
      <BgGradient />
      <View style={styles.registerImageContainer}>
        <Image
          style={styles.registerImage}
          source={require("../../../assets/image (5).png")}
        />
        <Text style={styles.registerTitle}>Go Drive</Text>
        <Text style={styles.registerText}>
          Alugue agora, movimente-se rápido
        </Text>
      </View>

      <View style={styles.formContainer}>
        <Form
          title="Cadastro"
          fields={["name", "surname", "email", "password", "drivingLicence"]}
        />
      </View>
    </View>
  );
}
