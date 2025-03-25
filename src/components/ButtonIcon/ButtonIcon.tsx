import { TouchableOpacity, View, ViewStyle } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import styles from "./ButtonIconStyle";
interface IconProps {
  iconName: string;
  iconSize?: number;
  iconColor?: string;
  style?: ViewStyle;
  // onPress:()=> void;
}
export default function ButtonIcon({
  iconName,
  iconSize,
  iconColor,
  style
}: IconProps) {
  return (
    <View>
      <TouchableOpacity style={[styles.button, style]}>
        <Icon name={iconName} size={iconSize} color={iconColor} />
      </TouchableOpacity>
    </View>
  );
}


