import {
  View,
  Image,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { useForm, FormProvider } from "react-hook-form";

import styles from "./style";

import BgGradient from "../../components/BgGradient/BgGradientStyle";
import Form from "../../components/Form/Form";
import Button from "../../components/Button/Button";

import { collection, addDoc, setDoc } from "firebase/firestore";
import { db } from "../../services/firabaseConnection";
import { useNavigation } from "@react-navigation/native";

type LoginProps = {
  email: string;
  password: string;
};

export default function Login() {
  const methods = useForm<LoginProps>();
  const navigation = useNavigation();
  async function loginUser() {}

  return (
    <FormProvider {...methods}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
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
              title="Login"
              fields={[
                { name: "email", placeholder: "Email" },
                { name: "password", placeholder: "Senha" },
              ]}
            />
            <View style={styles.buttonInput}>
              <Button name="Entrar" onPress={loginUser} />
              <TouchableOpacity
                style={styles.linkButton}
                activeOpacity={0.6}
                onPress={() =>
                  navigation.navigate("AuthStack", {
                    screen: "Register",
                    params: {
                      name: "Ruan",
                      surname: "Gomes",
                      email: "rugcosta@gmail.com",
                      password: "1234",
                      CNHnumber: 1637463737,
                    },
                  })
                }
              >
                <Text style={styles.linkText}>
                  Não possuí uma conta?{" "}
                  <Text style={{ color: "#1f51d8" }}>Cadastrar-se</Text>.
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </FormProvider>
  );
}
