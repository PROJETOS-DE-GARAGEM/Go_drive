import { LinearGradient } from "expo-linear-gradient";
import { StyleSheet } from "react-native";

export default function BgGradient() {
  return (
      <LinearGradient
        colors={["#1F51D8", "#1E50D7", "#0E2D81"]}
        style={StyleSheet.absoluteFillObject}
      />
  
  );
}
