import { View, Text } from "react-native-animatable";
import styles from "./PaymentScreenStyle";
import { Header } from "../../components/Header";
import DatePicker from "../../components/DatePicker/DatePicker";
import { FlatList, TouchableOpacity } from "react-native";
import ButtonIcon from "../../components/ButtonIcon/ButtonIcon";
import { useEffect, useState } from "react";
import Button from "../../components/Button/Button";
import { useRoute } from "@react-navigation/native";
import PaymentModal from "../../components/PaymentModal/PaymentModal";

export default function PaymentScreen() {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [startDate, setStartDate] = useState<Date>(new Date());
  const [endDate, setEndDate] = useState<Date>(new Date());
  const route = useRoute() as any;
  const { selectedCar } = route.params;

  const planos = [
    { id: "1", nome: "Taxa diária", preco: `R$ ${selectedCar.aluguel[0]}` },
    { id: "2", nome: "Taxa semanal", preco: `R$ ${selectedCar.aluguel[1]}` },
    { id: "3", nome: " Taxa mensal", preco: `R$ ${selectedCar.aluguel[2]}` },
  ];

  //Find the plan selected  by the user
  const SelectedPlan = planos.find((p) => p.id === selectedId);
  // Atualiza a data de fim automaticamente para semanal/mensal
  useEffect(() => {
    if (selectedId === "2") {
      // semanal: 7 dias
      const newEnd = new Date(startDate);
      newEnd.setDate(startDate.getDate() + 7);
      setEndDate(newEnd);
    } else if (selectedId === "3") {
      // mensal: 30 dias
      const newEnd = new Date(startDate);
      newEnd.setDate(startDate.getDate() + 30);
      setEndDate(newEnd);
    }
    // Para diária, não faz nada (usuário escolhe)
  }, [selectedId, startDate]);

  // Função para calcular a duração do aluguel em dias
  function calculateDuration(start: Date, end: Date): number {
    const diff = end.getTime() - start.getTime();
    return Math.max(Math.ceil(diff / (1000 * 60 * 60 * 24)), 1);
  }

  return (
    <View style={styles.container}>
      <Header title="Pagamentos" />
      <View style={styles.paymentContainer}>
        <Text style={styles.title}>Escolha o Período de Aluguel</Text>
        <View style={styles.datePickerContainer}>
          <DatePicker
            placeholder="Data inicial"
            value={startDate}
            onChange={() => {}} // nunca altera, sempre desabilitado
            style={{ width: 370 }}
            disabled={true}
          />
          <DatePicker
            placeholder="Data final"
            value={endDate}
            onChange={selectedId === "1" ? setEndDate : () => {}} // só altera se for diária
            style={{ width: 370 }}
            disabled={selectedId !== "1"}
          />
        </View>
        <Text style={styles.title}>Planos de Alugueís</Text>
        <View style={styles.flatListContainer}>
          <FlatList
            data={planos}
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
            <Button
              name="Confirmar aluguel"
              onPress={() => setModalVisible(true)}
              // disable={!selectedId}
            />
          </View>
        </View>
      </View>
      {SelectedPlan && (
        <PaymentModal
          visible={modalVisible}
          carName={selectedCar.modelo}
          startDate={startDate}
          endDate={endDate}
          plano={SelectedPlan}
          onClose={() => setModalVisible(false)}
          calculateDuration={calculateDuration}
        />
      )}
    </View>
  );
}
