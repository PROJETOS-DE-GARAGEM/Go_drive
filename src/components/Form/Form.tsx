import { useState } from "react";
import { Text, TextInput, View } from "react-native";
import styles from "./FormStyle"

interface FormProps {
  title: string;
  fields: ("name" | "surname" | "email" | "password" | "drivingLicence")[];
//   onSubmit: (data: {
//     name?: string;
//     surname?: string;
//     email: string;
//     password: string;
//     drivingLicence?: number;
//   }) => void;
}

export default function Form({ title, fields }: FormProps) {
  const [formData, setFormaData] = useState({
    name: "",
    surname: "",
    email: "",
    password: "",
    drivingLicence: "",
  });
  return (
    <View style={styles.formContainer}>
      <Text style={styles.formTitle}>{title}</Text>
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
      {fields.includes("drivingLicence") && (
        <TextInput style={styles.input} placeholder="Número da CNH" />
      )}
    </View>
  );
}
