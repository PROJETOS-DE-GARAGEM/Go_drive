import { View, Image, Text } from "react-native";
import BgGradient from "../../components/BgGradient/BgGradientStyle";
import styles from "./RegisterStyle";
import Form from "../../components/Form/Form";
import Button from "../../components/Button/Button";

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
          fields={[
            "name",
            "surname",
            "email",
            "password",
            "confirmPassword",
            "drivingLicence",
          ]}
        />
        <View style={styles.buttonWrapper}>
          <Button name="Enviar" />
        </View>
      </View>
    </View>
  );
}
