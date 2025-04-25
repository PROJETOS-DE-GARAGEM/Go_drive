import { View } from "react-native";
import FormStepOne from "../../components/FormStepOne/FormStepOne";
import styles from "./MultiFormStyle";
import { useForm, FormProvider } from "react-hook-form";
import StepIndicator from "../../components/StepIndicator/StepIndicator";
import FormStepTwo from "../../components/FormStepTwo/FormStepTwo";

export default function MultiForm() {
   
  
  return (
   
      <View style={styles.container}>
        <StepIndicator currentStep={1} />
        <FormStepTwo />
      </View>
    
  );
}
