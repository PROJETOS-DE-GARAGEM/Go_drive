import { View, Text, FlatList, TouchableOpacity } from "react-native";
import { ListClause } from "../Clause";
import { terms } from "../../utils/document";
import { AntDesign } from "@expo/vector-icons";
import styles from "./style";

type TermsProps = {
  closeModal: () => void;
  onAcceptTerms: () => void;
};

const TermsRent = ({ closeModal }: TermsProps) => {

  return (
    <View style={styles.container}>
      <View style={styles.containerTerms}>
        <TouchableOpacity onPress={closeModal}>
          <AntDesign name="closecircle" size={24} />
        </TouchableOpacity>

        <View style={styles.contentTitleTerms}>
          <Text style={styles.titleText}>
            TERMO DE CIÊNCIA E RESPONSABILIDADE
          </Text>
        </View>

        <FlatList
          data={terms}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => <ListClause data={item} />}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            gap: 35,
            borderWidth: 0.5,
            borderRadius: 12,
            padding: 4,
          }}
        />
      </View>
    </View>
  );
};

export { TermsRent };
