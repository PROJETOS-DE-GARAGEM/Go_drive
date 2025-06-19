import { Text, TouchableOpacity, View, ViewStyle } from "react-native";
import styles from "./ButtonStyle";
interface ButtonProps {
  name: string;
  onPress?: () => void;
  style?: ViewStyle;
  children?: Element;
}

export default function Button({ name, onPress, style, children }: ButtonProps) {
  return (
    <TouchableOpacity style={[styles.buttonContainer, style]} onPress={onPress} >
      <Text style={styles.buttonText}>{name}</Text>
    </TouchableOpacity>
  );
}
