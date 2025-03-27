import { View, Image, Text, ScrollView } from "react-native";
import BgGradient from "../../components/BgGradient/BgGradientStyle";
import styles from "./RegisterStyle";
import Form from "../../components/Form/Form";
import { useForm, FormProvider } from "react-hook-form";
import Button from "../../components/Button/Button";

export default function Register() {
  const methods = useForm();
  return (
    <FormProvider {...methods}>
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
            <ScrollView
              showsVerticalScrollIndicator={false}
            >
            <Form
              title="Cadastro"
              fields={[
                { name: "name", placeholder: "Nome" },
                { name: "surname", placeholder: "Sobrenome" },
                { name: "email", placeholder: "Email" },
                { name: "password", placeholder: "Senha" },
                { name: "confirmPassword", placeholder: "Confirmar senha" },
                { name: "drivingLicence", placeholder: "Número da CNH" },
              ]}
            />
            </ScrollView>
            <View style={styles.buttonInput}>
              <Button name="Enviar" />
            </View>
          </View>
      </View>
    </FormProvider>
  );
}
