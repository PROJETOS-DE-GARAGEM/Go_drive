import { TouchableOpacity, View, ViewStyle } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import styles from "./ButtonIconStyle";
interface IconProps {
  iconName: string;
  iconSize?: number;
  iconColor?: string;
  style?: ViewStyle;
  onPress?: () => void;
  disabled?: boolean;
}
export default function ButtonIcon({
  iconName,
  iconSize,
  iconColor,
  style,
  disabled,
  onPress,
}: IconProps) {
  return (
    <View>
      <TouchableOpacity
        style={[styles.button, style]}
        onPress={onPress}
        disabled={disabled}
      >
        <Icon name={iconName} size={iconSize} color={iconColor} />
      </TouchableOpacity>
    </View>
  );
}
