import { View, TextInput, TouchableOpacity } from "react-native";

import { Fontisto, Ionicons } from "@expo/vector-icons";

import styles from "./style";

type SearchProps = {
  setModalVisible: (value: boolean) => void;
  searchInput: (text: string) => void;
};

const InputFilter = ({ setModalVisible, searchInput }: SearchProps) => {
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

      <TouchableOpacity
        style={styles.iconContainer}
        onPress={() => setModalVisible(true)}
      >
        <Ionicons name="filter" size={25} color={"#000"} />
      </TouchableOpacity>
    </View>
  );
};

export { InputFilter };
