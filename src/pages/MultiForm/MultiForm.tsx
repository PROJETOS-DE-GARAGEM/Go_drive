import {
  ScrollView,
  View,
  Keyboard,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
  Platform,
  Alert,
} from "react-native";
import FormStepOne from "../../components/FormStepOne/FormStepOne";
import styles from "./MultiFormStyle";
import { useForm, FormProvider } from "react-hook-form";
import StepIndicator from "../../components/StepIndicator/StepIndicator";
import FormStepTwo from "../../components/FormStepTwo/FormStepTwo";
import FormStepThree from "../../components/FormStepThree/FormStepThree";
import { useState, useContext } from "react";
import Button from "../../components/Button/Button";
import { register } from "../../services/AuthService";
import { RegisterProps } from "../../services/AuthService";
import { useNavigation } from "@react-navigation/native";
import { ActivityIndicator } from "react-native";
import * as Animatable from "react-native-animatable";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { AuthContext } from "../../contexts/AuthContext";
type RegisterFormData = RegisterProps;

export default function MultiForm() {
  const [submitted, setSubmitted] = useState(false);

  const [currentStep, setCurrentStep] = useState(1);
  const methods = useForm<RegisterFormData>({
    mode: "onChange",
    shouldUnregister: false,
  });
  const navigation = useNavigation();
  const [loading, setLoading] = useState(false);
  const { signOut, setIsRegistering } = useContext(AuthContext);

  const handleNext = async () => {
    const valid = await methods.trigger();
    if (valid) setCurrentStep(currentStep + 1);
  };

  const handleBack = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
    else navigation.goBack();
  };

  const handleSubmit = methods.handleSubmit(async (data) => {
    setLoading(true);
    try {
      setIsRegistering(true);
      await register({
        ...data,
        password: data.password,
        confirmPassword: data.confirmPassword,
      });
      await signOut();
      setIsRegistering(false);
      setLoading(false); // <- Pare o loading ANTES de navegar
      setSubmitted(true); // <- Adicione esta linha antes de navegar
      navigation.navigate("AuthStack", { screen: "RegisterConfirmation" });
      return; // <- Impede renderização do restante
    } catch (error: any) {
      setIsRegistering(false);
      setLoading(false);
      Alert.alert("Erro", error.message || "Não foi possível criar a conta.");
    }
  });

  // Interrompe renderização do formulário se estiver carregando
  if (loading || submitted) {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#fff",
        }}
      >
        <ActivityIndicator size="large" color="#1f51d8" />
      </View>
    );
  }


  return (
    <FormProvider {...methods}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={{ flex: 1, backgroundColor: "white" }}>
          <KeyboardAwareScrollView
            contentContainerStyle={{ flexGrow: 1 }}
            enableOnAndroid
            extraScrollHeight={20}
            keyboardShouldPersistTaps="handled"
            showsVerticalScrollIndicator={false}
          >
            <StepIndicator currentStep={currentStep} />

            <Animatable.View
              animation="slideInUp"
              duration={300}
              key={currentStep}
            >
              {currentStep === 1 && <FormStepOne />}
              {currentStep === 2 && <FormStepTwo />}
              {currentStep === 3 && <FormStepThree />}
            </Animatable.View>

            <Animatable.View
              animation="slideInUp"
              duration={300}
              key={`btn-${currentStep}`}
              style={styles.buttonContainer}
            >
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
            </Animatable.View>
          </KeyboardAwareScrollView>
        </View>
      </TouchableWithoutFeedback>
    </FormProvider>
  );
}
