import { View } from "react-native";
import FormStepOne from "../../components/FormStepOne/FormStepOne";
import styles from "./MultiFormStyle";
import { useForm, FormProvider } from "react-hook-form";
import StepIndicator from "../../components/StepIndicator/StepIndicator";

export default function MultiForm() {
    const methods = useForm();
  
  return (
    <FormProvider {...methods}>
      <View style={styles.container}>
        <StepIndicator currentStep={1} />
        <FormStepOne />
      </View>
    </FormProvider>
  );
}
