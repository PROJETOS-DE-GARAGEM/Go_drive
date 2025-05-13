import {
  View,
  Image,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
} from "react-native";
import { useForm, FormProvider } from "react-hook-form";

import styles from "./style";

import BgGradient from "../../components/BgGradient/BgGradientStyle";
import Form from "../../components/Form/Form";
import Button from "../../components/Button/Button";
import { useAuth } from "../../hooks/useAuth";
import { useNavigation } from "@react-navigation/native";

type LoginProps = {
  email: string;
  password: string;
};

export default function Login() {
  const methods = useForm<LoginProps>();
  const { signIn } = useAuth();
  const navigation = useNavigation();

  async function loginUser(data: LoginProps) {
    const { email, password } = data;
    console.log(data);

    if (!email || !password) {
      Alert.alert("Preencha todos os campos");
      return;
    }

    try {
      await signIn(email, password);
      console.log("Usuário logado com sucesso!");
    } catch (error) {
      console.error("Erro ao logar:", error);
    }
  }

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
            <View style={{ marginTop: -200 }}>
              <Form
                title="Login"
                fields={[
                  {
                    name: "email",
                    placeholder: "Email",

                    rules: {
                      required: "Email é obrigatório",
                      pattern: {
                        value: /\S+@\S+\.\S+/,
                        message: "Email inválido",
                      },
                    },
                  },
                  {
                    name: "password",
                    placeholder: "Senha",
                    style: { marginTop: 20 },

                    rules: {
                      required: "Senha é obrigatória",
                      minLength: {
                        value: 6,
                        message: "A senha deve ter pelo menos 6 caracteres",
                      },
                      pattern: {
                        value: /^(?=.*[A-Z])(?=.*[!@#$%^&*])/,
                        message:
                          "A senha deve conter pelo menos uma letra maiúscula e um caractere especial",
                      },
                    },
                  },
                ]}
              />
            </View>

            <View style={styles.buttonInput}>
              <Button name="Entrar" onPress={methods.handleSubmit(loginUser)} />
              <TouchableOpacity
                style={styles.linkButton}
                activeOpacity={0.6}
                // onPress={() =>
                //   navigation.navigate("AuthStack", {
                //     screen: "Register",
                //     params: {
                //       name: "Ruan",
                //       surname: "Gomes",
                //       email: "rugcosta@gmail.com",
                //       password: "1234",
                //       CNHnumber: 1637463737,
                //     },
                //   })
                // }
                onPress={() =>
                  navigation.navigate("AuthStack", {
                    screen: "MultiForm",
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
