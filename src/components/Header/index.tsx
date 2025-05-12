import { View, Text, TouchableOpacity } from "react-native";
import styles from "./style";

import { useNavigation } from "@react-navigation/native";
import { Feather } from "@expo/vector-icons";

interface HeaderProps {
  title: string;
}

const Header = ({ title }: HeaderProps) => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <TouchableOpacity 
        style={styles.containerIcon}
        onPress={() => navigation.goBack()}
      >
        <Feather name="chevron-left" color={"#545e69"} size={30} />
      </TouchableOpacity>
      <View style={styles.containerTitle}>
        <Text style={styles.title}>{title}</Text>
      </View>
    </View>
  );
};

export { Header };
