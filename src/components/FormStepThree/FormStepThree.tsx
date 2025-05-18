import { View } from "react-native";
import Form from "../Form/Form";
import styles from "./FormStepThreeStyle";
import { useFormContext } from "react-hook-form";
import { validateUniqueField } from "../../services/validators";

export default function FormStepThree() {
  const { getValues } = useFormContext(); // Acessa o método getValues diretamente

  const validatePasswordMatch = (value: string) => {
    const password = getValues("password"); // Recupera o valor da senha
    if (password && value !== password) {
      return "As senhas não coincidem";
    }
    return true; // Se não houver erro
  };
  return (
    <View style={styles.container}>
      <Form
        title="Cadastro de Login"
        fields={[
          {
            name: "email",
            placeholder: "Email",
            style: { marginBottom: 2 },
            rules: {
              required: "O email é obrigatório",
              pattern: {
                value: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/,
                message: "Email inválido",
              },
              validate: async (value: string) => {
                return await validateUniqueField(
                  "usuarios", // coleção
                  "email", // campo
                  value.toLowerCase(), // Sempre minúsculo
                  "Este e-mail já está cadastrado."
                );
              },
            },
          },
          {
            name: "password",
            placeholder: "Senha",
            style: { marginBottom: 2, marginTop: 20 },
            rules: {
              required: "A senha é obrigatória",
              minLength: {
                value: 6,
                message: "A senha deve ter pelo menos 6 caracteres",
              },
              pattern: {
                value:
                  /^(?=.*[A-Z])(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]).+$/,
                message:
                  "A senha deve ter ao menos 1 letra maiúscula e 1 caractere especial",
              },
            },
          },
          {
            name: "confirmPassword",
            placeholder: "Confirmar",
            style: { marginTop: 20 },

            rules: {
              required: "A confirmação da senha é obrigatória",
              validate: validatePasswordMatch, // Validação para conferir se as senhas coincidem
            },
          },
        ]}
      />
    </View>
  );
}
