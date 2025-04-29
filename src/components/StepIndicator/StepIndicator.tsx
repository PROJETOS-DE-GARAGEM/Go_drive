import { View, Text } from "react-native";
import styles from "./StepIndicatorStyle";
import React from "react";
import FontAwesome from "@expo/vector-icons/FontAwesome"; // Biblioteca de ícones

interface StepIndicatorProps {
  currentStep: number;
}

export default function StepIndicator({ currentStep }: StepIndicatorProps) {
  return (
    <View style={styles.container}>
      {[1, 2, 3].map((step) => (
        <React.Fragment key={step}>
          <View
            style={[styles.circle, currentStep >= step && styles.activeCircle]}
          >
            {currentStep > step ? ( 
              <FontAwesome name="check" size={30} color="white" />
            ) : (
              <Text style={styles.circleText}>{step}</Text>
            )}{" "}
          </View>
          {step < 3 && (
            <View
              style={[
                styles.line,
                currentStep > step && styles.activeLine, // Estilo da linha ativa
              ]}
            />
          )}
        </React.Fragment>
      ))}
    </View>
  );
}
