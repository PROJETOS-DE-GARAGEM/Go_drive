import { useState } from "react";
import { View, Text, FlatList, TouchableOpacity, Linking, Alert } from "react-native";

import { ListClause } from "../Clause";
import { terms } from "../../utils/document";

import { AntDesign } from "@expo/vector-icons";
import Checkbox from "expo-checkbox";
import styles from "./style";

// import axios from 'axios';
// import { openBrowserAsync } from 'expo-web-browser';

type TermsProps = {
  closeModal: () => void;
}

const TermsRent = ({ closeModal }: TermsProps) => {
  const [isChecked, setChecked] = useState(false);

//   const createPreference = async () => {

//     const ngrokUrl = "https://c67f-2804-2d5c-a0-b3ea-45c9-f31c-65cf-6209.ngrok-free.app";

//   try {
//     const response = await axios.post(`${ngrokUrl}/create_preference`, {
//       id: "1234",
//       title: "Produto Teste",
//       quantity: 1,
//       price: 10.0,
//     });

//     const initPoint = response.data.order;

//     if (initPoint) {
//       await openBrowserAsync(initPoint);
//     } else {
//       Alert.alert("Erro", "Falha ao criar preferência de pagamento.");
//     }

//   } catch (error) {
//     console.error("Erro ao criar preferência:", error);
//     Alert.alert("Erro", "Não foi possível criar a preferência.");
//   }
// };

  return (
    <View style={styles.container}>
      <View style={styles.containerTerms}>

        <TouchableOpacity
          onPress={closeModal}
        >
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

        <View style={styles.section}>
          <Checkbox
            style={styles.checkbox}
            value={isChecked}
            onValueChange={setChecked}
            color={isChecked ? "#1f51d8" : undefined}
          />
          <Text>Estou de acordo com os termos.</Text>
        </View>

        {isChecked && (
          <View style={styles.contentButton}>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Prosseguir</Text>
            </TouchableOpacity>
          </View>
        )}
      </View>
    </View>
  );
};

export { TermsRent };
