import { View } from "react-native";
import Form from "../Form/Form";
import styles from "./FormStepOneStyle";
import { validateUniqueField } from "../../services/validators";
import { useFormContext } from "react-hook-form";
import { getAddressByCep } from "../../services/getAddressByCep";

export default function FormStepOne() {
  const textRules = "* Campo obrigatório";
  const { setValue, getValues } = useFormContext();

  async function handleCepBlur() {
    const cep = getValues("cep")?.replace(/\D/g, "");
    if (cep && cep.length === 8) {
      try {
        const data = await getAddressByCep(cep);
        setValue("street", data.logradouro || "");
        setValue("neighborhood", data.bairro || "");
        setValue("city", data.localidade || "");
        setValue("uf", data.uf || "");
      } catch (error) {
        console.log("Erro ao buscar o cep", error);
      }
    }
  }

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
              name: "cep",
              placeholder: "Cep",
              style: { marginBottom: 0 },
              keyboardType: "numeric",
              onlyNumbers: true,
              rules: {
                required: textRules,
                pattern: {
                  value: /^\d{5}-\d{3}$/,
                  message: "CEP inválido",
                },
              },
              onBlur: handleCepBlur, 
            },
          ]}
        />
        <Form
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
              style: { width: 230, marginBottom: 0 },
              rules: { required: textRules },
            },
          ]}
        />
        <Form
          fields={[
            {
              name: "number",
              placeholder: "N°",
              style: { width: 130, marginBottom: 0 },
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
              style: { width: 230, marginBottom: 0 },
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
              name: "uf",
              placeholder: "UF",
              style: { width: 130, marginBottom: 0 },
              maxLength: 2,
              rules: {
                required: textRules,
                pattern: {
                  value: /^[A-Za-z]{2}$/,
                  message: "* UF deve ter 2 letras",
                },
                maxLength: { value: 2, message: "No máximo 2 caracteres" },
              },
            },
          ]}
        />
      </View>
    </View>
  );
}
