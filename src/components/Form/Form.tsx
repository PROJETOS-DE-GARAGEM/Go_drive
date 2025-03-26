import { ReactNode, useState } from "react";
import { Text, TextInput, View } from "react-native";
import ButtonIcon from "../ButtonIcon/ButtonIcon";
import styles from "./FormStyle";
import Button from "../Button/Button";

interface FormProps {
  title: string;
  fields: (
    | "name"
    | "surname"
    | "email"
    | "password"
    | "confirmPassword"
    | "drivingLicence"
  )[];
  children?: ReactNode;
}

export default function Form({ title, fields, children }: FormProps) {
  const [formData, setFormData] = useState({
    name: "",
    surname: "",
    email: "",
    password: "",
    confirmPassword: "",
    drivingLicence: "",
  });

  const handleInputChange = (fields: string, value: string): void => {
    setFormData((prevData) => ({
      ...prevData,
      [fields]: value,
    }));
  };

  const fieldLabels: Record<string, string> = {
    name: "Nome",
    surname: "Sobrenome",
    email: "Email",
    password: "Senha",
    confirmPassword: "Confirmar Senha",
    drivingLicence: "Número da CNH",
  };

  const handleSubmit = () => {};

  return (
    <View style={styles.formContainer}>
      <View style={styles.titleContainer}>
        <Text style={styles.formTitle}>{title}</Text>
        <ButtonIcon iconName="close" iconSize={20} iconColor="#939ba4" />
      </View>

      {fields.map((field) => (
        <TextInput
          key={field}
          style={styles.input}
          placeholder={fieldLabels[field]}
          value={formData[field as keyof typeof formData]} // Acessa dinamicamente
          onChangeText={(text) => handleInputChange(field, text)}
        />
      ))}

      <View style={styles.buttonWrapper}>{children}</View>
    </View>
  );
}
