import { View, Text, TouchableOpacity } from "react-native";
import styles from "./style";

import { useNavigation } from "@react-navigation/native";
import { Feather, MaterialIcons } from "@expo/vector-icons";

interface HeaderProps {
  title: string;
  rightIconName?: string; // nome do ícone (ex: "logout")
  rightIconLib?: "Feather" | "MaterialIcons"; // biblioteca do ícone
  onRightIconPress?: () => void; // função ao clicar
  rightIconColor?: string;
  rightIconSize?: number;
  onBackPress?: () => void;
}

const Header = ({
  title,
  rightIconName,
  rightIconLib,
  onRightIconPress,
  rightIconColor,
  rightIconSize,
  onBackPress,
}: HeaderProps) => {
  const navigation = useNavigation();

  const RightIcon = rightIconLib === "Feather" ? Feather : MaterialIcons;

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.containerIcon}
        onPress={onBackPress ? onBackPress : () => navigation.goBack()} // <- aqui
      >
        <Feather name="chevron-left" color={"#545e69"} size={30} />
      </TouchableOpacity>
      <View style={styles.containerTitle}>
        <Text style={styles.title}>{title}</Text>
      </View>
      {rightIconName && (
        <TouchableOpacity style={styles.rightIcon} onPress={onRightIconPress}>
          <RightIcon
            name={rightIconName as any}
            size={rightIconSize}
            color={rightIconColor}
          />
        </TouchableOpacity>
      )}
    </View>
  );
};

export { Header };
