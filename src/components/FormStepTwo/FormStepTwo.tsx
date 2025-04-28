import { FormProvider, useForm } from "react-hook-form";
import styles from "./FormStepTwoStyle";
import { View } from "react-native";
import Form from "../Form/Form";
import DropDown from "../DropDown/DropDown";
import { useState } from "react";
import DatePicker from "../DatePicker/DatePicker";
import Button from "../Button/Button";

export default function FormStepTwo() {
  const methods = useForm();
  const [selectedValue, setSelectedValue] = useState("");
  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleDateChange = (date: Date) => {
    console.log("Data selecionada:", date);
  };

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
              {
                name: "RegisterNumber",
                placeholder: "N° de registro",
                style: { width: 260, marginBottom: 0 },
              },
            ]}
          />
          <DropDown
            value={selectedValue}
            onChange={(newValue) => setSelectedValue(newValue)}
            options={[
              { label: "A", value: "1" },
              { label: "B", value: "2" },
              { label: "AB", value: "3" },
            ]}
          />
        </View>
        <View style={styles.datePicker}>
          <DatePicker
            onChange={handleDateChange}
            placeholder="Data de Emissão"
          />
        </View>
        <View style={styles.datePicker}>
          <DatePicker
            onChange={handleDateChange}
            placeholder="Data de validade"
          />
        </View>
        <View style={styles.buttonContainer}>
          <Button style={styles.button} name="Voltar" onPress={() => {}} />
          <Button style={styles.button} name="Proximo" onPress={() => {}} />
        </View>
      </View>
    </FormProvider>
  );
}
