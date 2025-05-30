import { View } from "react-native";
import Form from "../Form/Form";
import styles from "./FormStepOneStyle";
import { validateUniqueField } from "../../services/validators";

export default function FormStepOne() {
  const textRules = "Campo obrigatório";
  return (
    <View style={styles.container}>
      <View>
        <Form
          title="Informações Pessoais"
          fields={[
            {
              name: "fullName",
              placeholder: "Nome completo",
              rules: { required: textRules },
              editable: true,
            },
            {
              name: "CPF",
              style: { marginTop: 20 },
              placeholder: "CPF",
              rules: {
                required: textRules,
                validate: async (value: string) => {
                  // Validação local
                  if (value?.replace(/\D/g, "").length !== 11)
                    return "CPF inválido";
                  // Validação de unicidade no Firestore
                  return await validateUniqueField(
                    "usuarios",
                    "CPF",
                    value,
                    "CPF já cadastrado."
                  );
                },
              },
              editable: true,
            },
            {
              name: "phoneNumber",
              style: { marginTop: 20 },
              placeholder: "Telefone",
              rules: {
                required: textRules,
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
              name: "street",
              placeholder: "Rua",
              style: { marginBottom: 0 },
              rules: {
                required: textRules,
              },
            },
          ]}
        />
      </View>

      <View style={styles.row}>
        <Form
          fields={[
            {
              name: "neighborhood",
              placeholder: "Bairro",
              style: { width: 240, marginBottom: 0 },
              rules: { required: textRules },
            },
          ]}
        />
        <Form
          fields={[
            {
              name: "number",
              placeholder: "N°",
              style: { width: 120, marginBottom: 0 },
              maxLength: 6, // <-- Adicione aqui!

              rules: {
                required: textRules,
                pattern: {
                  value: /^[0-9]+$|^s\/n$/i,
                  message: "Número invalido",
                },
                maxLength: { value: 6, message: "No máximo 6 caracteres" },
              },
            },
          ]}
        />
        <Form
          fields={[
            {
              name: "city",
              placeholder: "Cidade",
              style: { width: 175, marginBottom: 0 },
              rules: {
                required: textRules,
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
              name: "cep",
              placeholder: "Cep",
              style: { width: 185, marginBottom: 0 },
              keyboardType: "numeric",
              onlyNumbers: true,
              rules: {
                required: "O CEP é obrigatório",
                pattern: {
                  value: /^\d{5}-\d{3}$/,
                  message: "CEP inválido",
                },
              },
            },
          ]}
        />
      </View>
    </View>
  );
}
