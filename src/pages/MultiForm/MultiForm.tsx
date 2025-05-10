import {
  ScrollView,
  View,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";
import FormStepOne from "../../components/FormStepOne/FormStepOne";
import styles from "./MultiFormStyle";
import { useForm, FormProvider } from "react-hook-form";
import StepIndicator from "../../components/StepIndicator/StepIndicator";
import FormStepTwo from "../../components/FormStepTwo/FormStepTwo";
import FormStepThree from "../../components/FormStepThree/FormStepThree";
import { useState } from "react";
import Button from "../../components/Button/Button";
import { useNavigation } from "@react-navigation/native";

type RegisterFormData = {
  FullName: string;
  CPF: string;
  PhoneNumber: string;
  Street: string;
  Neighborhood: string;
  Number: String;
  City: string;
  cep: string;
  RegisterNumber: string;
  EmissionDate: Date;
  ValidDate: Date;
  Email: string;
  password: string;
  ConfirmPassword: string;
};

export default function MultiForm() {
  const [currentStep, setCurrentStep] = useState(1); // Estado para o passo atual
  const methods = useForm<RegisterFormData>({
    mode: "onChange",
    shouldUnregister: false,
  });
  const navigation = useNavigation();

  const handleNext = async () => {
    const valid = await methods.trigger(); // Valida todos os campos registrados
    if (valid) {
      setCurrentStep(currentStep + 1); // Avanca se estiver tudo certo
    }
  };

  const handleBack = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1); // Volta para o passo anterior
  };

  const handleSubmit = methods.handleSubmit((data: RegisterFormData) => {
    console.log("Dados do formulario:", data);
    navigation.navigate("AuthStack", {
      screen: "RegisterConfirmation",
    });
  });

  return (
    <FormProvider {...methods}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ScrollView style={styles.container}>
          <StepIndicator currentStep={currentStep} />
          {currentStep === 1 && <FormStepOne />}
          {currentStep === 2 && <FormStepTwo />}
          {currentStep === 3 && <FormStepThree />}
          <View style={styles.buttonContainer}>
            {currentStep > 0 && (
              <Button
                name="Voltar"
                onPress={handleBack}
                style={styles.button}
              />
            )}
            {currentStep < 3 ? (
              <Button
                name="Próximo"
                onPress={handleNext}
                style={styles.button}
              />
            ) : (
              <Button
                name="Enviar"
                onPress={handleSubmit}
                style={styles.button}
              />
            )}
          </View>
        </ScrollView>
      </TouchableWithoutFeedback>
    </FormProvider>
  );
}
