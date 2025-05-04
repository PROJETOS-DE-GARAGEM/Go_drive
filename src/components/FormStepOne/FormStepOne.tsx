import { View } from "react-native";
import Form from "../Form/Form";
import styles from "./FormStepOneStyle";
import Button from "../Button/Button";
import { useForm } from "react-hook-form";

export default function FrmStepOne() {
  return (
    <View style={styles.container}>
      <View>
        <Form
          title="Informações Pessoais"
          fields={[
            {
              name: "FullName",
              placeholder: "Nome completo",
              rules: { required: "Nome é obrigatório" },
              editable: true,
            },
            {
              name: "CPF",
              style: { marginTop: 20 },
              placeholder: "CPF",
              rules: {
                required: "CPF é obrigatório",
                validate: (value: string) =>
                  value?.replace(/\D/g, "").length === 11 || "CPF inválido",
              },
              editable: true,
            },
            {
              name: "PhoneNumber",
              style: { marginTop: 20 },
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
      </View>
      <View style={{ marginTop: 10 }}>
        <Form
          title="Endereço"
          fields={[
            {
              name: "Street",
              placeholder: "Rua",
              style: { marginBottom: 0 },
              rules: {
                required: "Endereço é obrigatório",
              },
            },
          ]}
        />
      </View>

      <View style={styles.row}>
        <Form
          fields={[
            {
              name: "Neiborhood",
              placeholder: "Bairro",
              style: { width: 250, marginBottom: 0 },
              rules: { required: "Bairro é obrigatório" },
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
              style: { width: 170, marginBottom: 0 },
              rules: {
                required: "A cidade é obrigatória",
                pattern: {
                  value: /^[A-Za-zÀ-ÿ\s]+$/, // aceita letras e espaços (com acentos)
                  message: "Digite apenas letras",
                },
              },
            },
          ]}
        />
        <Form
          fields={[
            {
              name: "Cep",
              placeholder: "Cep",
              style: { width: 174, marginBottom: 0 },
              keyboardType: "numeric",
              onlyNumbers: true,
              rules: {
                required: "O CEP é obrigatório",
                pattern: {
                  value: /^\d{5}-\d{3}$/,
                  message: "O CEP deve conter 8 números",
                },
              },
            },
          ]}
        />
      </View>
    </View>
  );
}
