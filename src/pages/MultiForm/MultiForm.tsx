import { View } from "react-native";
import FormStepOne from "../../components/FormStepOne/FormStepOne";
import styles from "./MultiFormStyle";
import { useForm, FormProvider } from "react-hook-form";
import StepIndicator from "../../components/StepIndicator/StepIndicator";
import FormStepTwo from "../../components/FormStepTwo/FormStepTwo";
import FormStepThree from "../../components/FormStepThree/FormStepThree";
import { useState } from "react";
import Button from "../../components/Button/Button";


export default function MultiForm() {
  const [currentStep, setCurrentStep] = useState(1); // Estado para o passo atual
  const methods = useForm();

  const handleNext = async () => {
    const valid = await methods.trigger(); // Valida os campos visíveis
    if (valid) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1); // Volta para o passo anterior
  };

  const handleSubmit = () => {
    console.log("Formulário enviado!");
  };

  return (
    <FormProvider {...methods}>
      <View style={styles.container}>
        <StepIndicator currentStep={currentStep} />
        {currentStep === 1 && <FormStepOne />}
        {currentStep === 2 && <FormStepTwo />}
        {currentStep === 3 && <FormStepThree />}
        <View style={styles.buttonContainer}>
          {currentStep > 0 && (
            <Button name="Voltar" onPress={handleBack} style={styles.button}  />
          )}
          {currentStep < 3 ? (
            <Button name="Próximo" onPress={handleNext} style={styles.button}  />
          ) : (
            <Button name="Enviar" onPress={handleSubmit} style={styles.button} />
          )}
        </View>
      </View>
    </FormProvider>
  );
}
