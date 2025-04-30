import { View } from "react-native";
import Form from "../Form/Form";
import styles from "./FormStepOneStyle";
import Button from "../Button/Button";
import { useForm } from "react-hook-form";

export default function FrmStepOne() {
  const methods = useForm();
  return (
    <View style={styles.container}>
      <Form
        title="Informações Pessoais"
        fields={[
          {
            name: "FullName",
            placeholder: "Nome completo",
            rules: { required: "Nome é obrigatório" },
          },
          {
            name: "CPF",
            placeholder: "CPF",
            rules: {
              required: "CPF é obrigatório",
              validate: (value: string) =>
                value?.replace(/\D/g, "").length === 11 || "CPF inválido",
            },
          },
          {
            name: "PhoneNumber",
            placeholder: "Telefone",
            rules: {
              required: "Telefone é obrigatório",
              pattern: {
                value: /^\(\d{2}\) \d{4,5}-\d{4}$/,
                message: "Telefone inválido",
              },
            },
          },
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
            {
              name: "Cep",
              placeholder: "Cep",
              style: { width: 174, marginBottom: 0 },
            },
          ]}
        />
      </View>
    </View>
  );
}
