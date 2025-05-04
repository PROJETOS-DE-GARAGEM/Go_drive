import { Controller, useFormContext } from "react-hook-form";
import styles from "./FormStepTwoStyle";
import { View, Text } from "react-native";
import Form from "../Form/Form";
import DropDown from "../DropDown/DropDown";
import DatePicker from "../DatePicker/DatePicker";

export default function FormStepTwo() {
  const { control, setValue } = useFormContext(); // Acessa o contexto do formulário
  // Observa o valor de "validityDate"

  return (
    <View style={styles.container}>
      <Form
        title="Informações da CNH"
        fields={[
          {
            name: "FullName",
            placeholder: "Nome completo",
            style: { marginBottom: 20 },
            editable: false,
          },
          {
            name: "CPF",
            placeholder: "CPF",
            style: { marginBottom: 0 },
            editable: false,
          },
        ]}
      />
      <View style={styles.row}>
        <Form
          fields={[
            {
              name: "RegisterNumber",
              placeholder: "N° de registro",
              style: { width: 230, marginBottom: 0, marginRight: 10 },
              rules: {
                required: "N de registro é obrigatório",
                pattern: {
                  value: /^[0-9]{9}$/,
                  message: "Número inválido",
                },
              },
            },
          ]}
        />
        <Controller
          control={control}
          name="cnhType"
          rules={{
            required: "Selecione a cat de CNH", // Mensagem de erro se não for selecionado
          }}
          render={({ field: { onChange, value }, fieldState: { error } }) => (
            <View>
              <DropDown
                value={value} // Observa o valor de "cnhType"
                onChange={onChange} // Atualiza o valor de "cnhType"
                options={[
                  { label: "A", value: "1" },
                  { label: "B", value: "2" },
                  { label: "AB", value: "3" },
                ]}
              />
              {error && (
                <Text style={{ color: "red", marginTop: 5 }}>
                  {error.message}
                </Text>
              )}
            </View>
          )}
        />
      </View>
      <View style={styles.datePicker}>
        <Controller
          control={control}
          name="emissionDate"
          rules={{
            required: "A data de emissão é obrigatória",
            validate: (value: Date) =>
              new Date(value) <= new Date() ||
              "A data de emissão não pode ser no futuro",
          }}
          render={({ field: { onChange, value }, fieldState: { error } }) => (
            <>
              <DatePicker
                onChange={onChange}
                value={value} // Usa o valor do formulário ou o valor observado
                placeholder="Data de Emissão"
              />
              {error && (
                <Text style={{ color: "red", marginTop: 5 }}>
                  {error.message}
                </Text>
              )}
            </>
          )}
        />
      </View>
      <View style={styles.datePicker}>
        <Controller
          control={control}
          name="validityDate"
          rules={{
            required: "A data de validade é obrigatória",
            validate: (value: Date) =>
              new Date(value) > new Date() ||
              "A data de validade deve ser posterior à data de emissão",
          }}
          render={({ field: { onChange, value }, fieldState: { error } }) => (
            <>
              <DatePicker
                onChange={onChange}
                value={value}
                placeholder="Data de Validade"
              />
              {error && (
                <Text style={{ color: "red", marginTop: 5 }}>
                  {error.message}
                </Text>
              )}
            </>
          )}
        />
      </View>
    </View>
  );
}
