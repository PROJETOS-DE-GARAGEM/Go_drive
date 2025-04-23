import {View, Text} from "react-native";
import styles from "./StepIndicatorStyle";
import React from "react";



interface StepIndicatorProps {
    currentStep: number;
}

export default function StepIndicator({currentStep}: StepIndicatorProps){
    return (
        <View style={styles.container}>
        {[1, 2, 3].map((step) => (
          <React.Fragment key={step}>
            <View
            style={[
              styles.circle,
              currentStep >= step && styles.activeCircle, // Estilo ativo para o passo atual ou anterior
            ]}
          >
            <Text style={styles.circleText}>{step }</Text> 
          </View>
            
            {step < 3 && <View style={styles.line} />} {/* Linha entre as bolas */}
          </React.Fragment>
        ))}
      </View>
    )
}