import {
  View,
  Image,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
  ActivityIndicator,
} from "react-native";
import { useForm, FormProvider } from "react-hook-form";
import styles from "./style";
import BgGradient from "../../components/BgGradient/BgGradientStyle";
import Form from "../../components/Form/Form";
import Button from "../../components/Button/Button";
import { useAuth } from "../../hooks/useAuth";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";

type LoginProps = {
  email: string;
  password: string;
};

export default function Login() {
  const methods = useForm<LoginProps>();
  const { signIn } = useAuth();
  const navigation = useNavigation();
  const [loading, setLoading] = useState(false);

  async function loginUser(data: LoginProps) {
    const { email, password } = data;

    try {
      setLoading(true);
      await signIn(email, password);
      // Login bem-sucedido
    } catch (error: any) {
      Alert.alert("Erro ao fazer login", "Dados inválidos.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <FormProvider {...methods}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.registerContainer}>
          {loading ? (
            <View
              style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <ActivityIndicator size="large" color="#1f51d8" />
            </View>
          ) : (
            <>
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
                <View>
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
                        },
                      },
                    ]}
                  />
                </View>

                <View style={styles.buttonInput}>
                  <Button
                    name="Entrar"
                    onPress={methods.handleSubmit(loginUser)}
                  />
                  <TouchableOpacity
                    style={styles.linkButton}
                    activeOpacity={0.6}
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
            </>
          )}
        </View>
      </TouchableWithoutFeedback>
    </FormProvider>
  );
}
