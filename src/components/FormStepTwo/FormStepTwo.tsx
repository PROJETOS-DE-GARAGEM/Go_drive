import { FormProvider, useForm } from "react-hook-form";
import styles from "./FormStepTwoStyle";
import { View } from "react-native";
import Form from "../Form/Form";

export default function FormStepTwo() {
  const methods = useForm();

  return (
    <FormProvider {...methods}>
      <View style={styles.container}>
        <Form
          title="Informações da CNH"
          fields={[
            { name: "FullName", placeholder: "Nome completo" },
            { name: "CPF", placeholder: "CPF", style: { marginBottom: 0 } },
          ]}
        />
        <View style={styles.row}>
          <Form
            fields={[
              { name: "RegisterNumber", placeholder: "N° de registro", style: {  width: 260, marginBottom: 0 } },
            ]}
          />
           <Form
            fields={[
              { name: "HabCategory", placeholder: "Cat. Hab",  style: {  width: 105, marginBottom: 0  } },
            ]}
          />
          
        </View>
        <Form
          fields={[
            { name: "EmissionDate", placeholder: "Nome completo" },
            { name: "CPF", placeholder: "CPF", style: { marginBottom: 0 } },
          ]}
        />
      </View>
    </FormProvider>
  );
}
