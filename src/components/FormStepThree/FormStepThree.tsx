import { View } from "react-native";
import Form from "../Form/Form";
import Button from "../Button/Button";
import { FormProvider, useForm } from "react-hook-form";
import styles from "./FormStepThreeStyle";

export default function FormStepThree() {
  const methods = useForm();
  return (
    <FormProvider {...methods}>
      <View style={styles.container}>
        <Form
          title="Cadastro de Login"
          fields={[
            { name: "Email", placeholder: "Email" },
            { name: "Password", placeholder: "Senha" },
            {
              name: "PasswordConfirm",
              placeholder: "Confirmar",
              style: { marginBottom: 0 },
            },
          ]}
        />
      </View>
    </FormProvider>
  );
}
