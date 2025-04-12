import { View, TextInput, TouchableOpacity } from "react-native";

import { Fontisto, Ionicons } from "@expo/vector-icons";

import styles from "./style";

type SearchProps = {
  data: string;
}

const InputFilter = () => {
  return (
    <View style={styles.containerSearch}>
      <View style={styles.inputContainer}>
        <View style={styles.inputSearch}>
          <Fontisto name="search" size={25} color={"#000"} />
          <TextInput placeholder="Pesquisar" placeholderTextColor={"#000"} />
        </View>
      </View>

      <TouchableOpacity style={styles.iconContainer}>
        <Ionicons name="filter" size={25} color={"#000"} />
      </TouchableOpacity>
    </View>
  );
};

export { InputFilter };