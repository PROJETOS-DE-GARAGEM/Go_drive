import { View } from "react-native";
import Form from "../Form/Form";
import styles from "./FormStepOneStyle";
import Button from "../Button/Button";
import { FormProvider, useForm } from "react-hook-form";

export default function FrmStepOne() {
  const methods = useForm();
  return (
    <FormProvider {...methods}>
      <View style={styles.container}>
        <Form
          title="Informações Pessoais"
          fields={[
            { name: "FullName", placeholder: "Nome completo" },
            { name: "CPF", placeholder: "CPF" },
            { name: "PhoneNumber", placeholder: "Telefone" },
          ]}
        />
        <Form
          title="Endereço"
          fields={[
            { name: "Street", placeholder: "Rua", style: { marginBottom: 0 } },
          ]}
        />
        <View style={styles.row}>
          <Form
            fields={[
              {
                name: "Neiborhood",
                placeholder: "Bairro",
                style: { width: 250, marginBottom: 0 },
              },
            ]}
          />
          <Form
            fields={[
              {
                name: "Number",
                placeholder: "N°",
                style: { width: 114, marginBottom: 0 },
              },
            ]}
          />
          <Form
            fields={[
              {
                name: "City",
                placeholder: "Cidade",
                style: { width: 190, marginBottom: 0 },
              },
            ]}
          />
          <Form
            fields={[
              { name: "Cep", placeholder: "Cep", style: { width: 174, marginBottom: 0 } },
            ]}
          />
        </View>
      </View>
    </FormProvider>
  );
}
