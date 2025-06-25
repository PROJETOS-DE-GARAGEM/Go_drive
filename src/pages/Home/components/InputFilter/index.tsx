import { View, TextInput, TouchableOpacity } from "react-native";

import { Fontisto } from "@expo/vector-icons";

import styles from "./style";

type SearchProps = {
  searchInput: (text: string) => void;
};

const InputFilter = ({ searchInput }: SearchProps) => {
  return (
    <View style={styles.containerSearch}>
      <View style={styles.inputContainer}>
        <View style={styles.inputSearch}>
          <Fontisto name="search" size={25} color={"#000"} />
          <TextInput
            style={{ flex: 1 }}
            placeholder="Pesquisar"
            autoCorrect={false}
            autoCapitalize="none"
            placeholderTextColor={"#000"}
            onChangeText={(text) => searchInput(text)}
          />
        </View>
      </View>
    </View>
  );
};

export { InputFilter };
