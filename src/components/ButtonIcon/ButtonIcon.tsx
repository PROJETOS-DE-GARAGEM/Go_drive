import { TouchableOpacity, View } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import styles from "./ButtonIconStyle";
interface IconProps {
  iconName: string;
  iconSize?: number;
  iconColor?: string;
  // onPress:()=> void;
}
export default function ButtonIcon({
  iconName,
  iconSize,
  iconColor,
}: IconProps) {
  return (
    <View>
      <TouchableOpacity style={styles.button}>
        <Icon name={iconName} size={iconSize} color={iconColor} />
      </TouchableOpacity>
    </View>
  );
}


