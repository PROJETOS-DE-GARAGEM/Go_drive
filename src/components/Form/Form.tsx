import { ReactNode, useState } from "react";
import { Text, TextInput, View } from "react-native";
import ButtonIcon from "../ButtonIcon/ButtonIcon";
import styles from "./FormStyle";

interface FormProps {
  title: string;
  TitleIcon?: ReactNode;
  fields: (
    | "name"
    | "surname"
    | "email"
    | "password"
    | "confirmPassword"
    | "drivingLicence"
  )[];

  // onSubmit: (data: {
  //   name?: string;
  //   surname?: string;
  //   email: string;
  //   password: string;
  //   confirmPassword: string;
  //   drivingLicence?: number;
  // }) => void;
}

export default function Form({ title, fields }: FormProps) {
  const [formData, setFormaData] = useState({
    name: "",
    surname: "",
    email: "",
    password: "",
    confirmPassword: "",
    drivingLicence: "",
  });

  const handleInputChange = (fields: string, value: string) => {
    setFormaData((prevData) => ({
      ...prevData,
      [fields]: value,
    }));
  };

  return (
    <View style={styles.formContainer}>
      <View style={styles.titleContainer}>
        <Text style={styles.formTitle}>{title}</Text>
        <ButtonIcon iconName="close" iconSize={20} iconColor="#939ba4"/>
      </View>
      {fields.includes("name") && (
        <TextInput style={styles.input} placeholder="Nome" />
      )}
      {fields.includes("surname") && (
        <TextInput style={styles.input} placeholder="Sobrenome" />
      )}
      {fields.includes("email") && (
        <TextInput style={styles.input} placeholder="Email" />
      )}
      {fields.includes("password") && (
        <TextInput style={styles.input} placeholder="Senha" />
      )}
      {fields.includes("confirmPassword") && (
        <TextInput style={styles.input} placeholder="Confirmar Senha" />
      )}
      {fields.includes("drivingLicence") && (
        <TextInput style={styles.input} placeholder="Número da CNH" />
      )}
    </View>
  );
}
