import { View, Text } from "react-native-animatable";
import styles from "./PaymentScreenStyle";
import { Header } from "../../components/Header";
import DatePicker from "../../components/DatePicker/DatePicker";
import { FlatList, TouchableOpacity } from "react-native";
import ButtonIcon from "../../components/ButtonIcon/ButtonIcon";
import { useState } from "react";
import Button from "../../components/Button/Button";

export default function PaymentScreen() {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const carSelected = {
    nome: "Fiat Uno",
    planos: [
      { id: "1", nome: "Taxa diária", preco: "R$ 50" },
      { id: "2", nome: "Taxa semanal", preco: "R$ 300" },
      { id: "3", nome: " Taxa mensal", preco: "R$ 1000" },
    ],
  };

  return (
    <View style={styles.container}>
      <Header title="Pagamentos" />
      <View style={styles.paymentContainer}>
        <Text style={styles.title}>Escolha o Período de Aluguel</Text>
        <View style={styles.datePickerContainer}>
          <DatePicker
            placeholder="Data inicial"
            onChange={() => {}}
            style={{ width: 370 }}
          />
          <DatePicker
            placeholder="Data final"
            onChange={() => {}}
            style={{ width: 370 }}
          />
        </View>
        <Text style={styles.title}>Planos de Alugueís</Text>
        <View style={styles.flatListContainer}>
          <FlatList
            data={carSelected.planos}
            keyExtractor={(item) => item.id}
            contentContainerStyle={{
              paddingHorizontal: 16,
              paddingVertical: 8,
            }}
            scrollEnabled={false}
            renderItem={({ item }) => {
              const isSelected = selectedId === item.id;
              return (
                <TouchableOpacity
                  style={[
                    styles.cardPayment,
                    {
                      borderWidth: 2,
                      borderColor: isSelected ? "#1f51d8" : "transparent",
                    },
                  ]}
                  onPress={() => setSelectedId(item.id)}
                  activeOpacity={0.8}
                >
                  <View style={styles.iconContainer}>
                    <ButtonIcon
                      iconSize={24}
                      iconName="hourglass-empty"
                      iconColor={isSelected ? "#1f51d8" : "grey"}
                      disabled={true}
                    />
                    <Text style={styles.textIconContainer}>{item.nome}</Text>
                  </View>
                  <Text style={styles.price}>
                    {item.preco.split("/")[0]}
                    <Text style={styles.priceHora}>/hora</Text>
                  </Text>
                </TouchableOpacity>
              );
            }}
          />
          <View style={styles.button}>
            <Button name="Confirmar aluguel" onPress={() => {}} />
          </View>
        </View>
      </View>
    </View>
  );
}
