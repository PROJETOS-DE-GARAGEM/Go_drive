import { Text, TouchableOpacity, View } from "react-native";
import styles from "./ButtonStyle";
interface ButtonProps {
  name: string;
  onPress: () => void;
}

export default function Button({ name, onPress }: ButtonProps) {
  return (
    <TouchableOpacity style={styles.buttonContainer}>
      <Text style={styles.buttonText}>{name}</Text>
    </TouchableOpacity>
  );
}
