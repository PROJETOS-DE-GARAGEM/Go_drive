import { useState } from "react";
import { View, Image, Text, ScrollView } from "react-native";
import { useForm, FormProvider } from "react-hook-form";

import styles from "./RegisterStyle";

import BgGradient from "../../components/BgGradient/BgGradientStyle";
import Form from "../../components/Form/Form";
import Button from "../../components/Button/Button";

import { collection, addDoc, setDoc } from "firebase/firestore";
import { db } from "../../services/firabaseConnection";

type UserProps = {
  name: string;
  surname: string;
  email: string;
  password: string;
  passwordCheck?: string;
  driverLicense: string;
};

export default function Register() {
  const methods = useForm<UserProps>();

  async function registerUser() {
    try {
      await addDoc(collection(db, "users"), {
        name: methods.handleSubmit,
        surname: methods.handleSubmit,
        email: methods.handleSubmit,
        password: methods.handleSubmit,
        driverLicense: methods.handleSubmit,
      });
    } catch (error) {
      alert("Erro ao cadastrar o usuário.");
    }
  }

  return (
    <FormProvider {...methods}>
      <View style={styles.registerContainer}>
        <BgGradient />
        <View style={styles.registerImageContainer}>
          <Image
            style={styles.registerImage}
            source={require("../../../assets/image (5).png")}
          />
          <Text style={styles.registerTitle}>Go Drive</Text>
          <Text style={styles.registerText}>
            Alugue agora, movimente-se rápido
          </Text>
        </View>

        <View style={styles.formContainer}>
          <View style={styles.headerScrollContainer}></View>
          <ScrollView showsVerticalScrollIndicator={false}>
            <Form
              title="Cadastro"
              fields={[
                { name: "name", placeholder: "Nome" },
                { name: "surname", placeholder: "Sobrenome" },
                { name: "email", placeholder: "Email" },
                { name: "password", placeholder: "Senha" },
                { name: "confirmPassword", placeholder: "Confirmar senha" },
                { name: "drivingLicence", placeholder: "Número da CNH" },
              ]}
            />
          </ScrollView>
          <View style={styles.buttonInput}>
            <Button name="Cadastrar-se" onPress={registerUser} />
          </View>
        </View>
      </View>
    </FormProvider>
  );
}
