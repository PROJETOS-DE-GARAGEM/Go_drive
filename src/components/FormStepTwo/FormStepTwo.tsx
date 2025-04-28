import { FormProvider, useForm } from "react-hook-form";
import styles from "./FormStepTwoStyle";
import { View } from "react-native";
import Form from "../Form/Form";
import DropDown from "../DropDown/DropDown";
import { useState } from "react";
import DatePicker from "../DatePicker/DatePicker";

export default function FormStepTwo() {
  const methods = useForm();
  const [selectedValue, setSelectedValue] = useState("");
  const [selectedDate, setSelectedDate] = useState(new Date());


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
        <DatePicker
        label="Data de emisssao"
        date={selectedDate}
        onChange={setSelectedDate}
        
        />
        
      </View>
    </FormProvider>
  );
}
