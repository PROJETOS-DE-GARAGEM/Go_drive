import { Modal, Text, View } from "react-native";
import { openBrowserAsync } from 'expo-web-browser';
import { createPayment } from "../../services/CreatePayment";
import ButtonIcon from "../ButtonIcon/ButtonIcon";
import Button from "../Button/Button";
import styles from "./PaymentModalStyle";

type PaymentModalProps = {
  visible: boolean;
  carName: string;
  startDate: Date;
  endDate: Date;
  plano: {
    id: string;
    nome: string;
    preco: string;
  };
  onClose: () => void;
  calculateDuration: (start: Date, end: Date) => number;
};

export default function PaymentModal({
  visible,
  carName,
  startDate,
  endDate,
  plano,
  onClose,
  calculateDuration,
}: PaymentModalProps) {
  // Calcule os valores aqui:
  const duration = calculateDuration(startDate, endDate);
  const precoUnitario = parseFloat(
    plano.preco
      .replace("R$", "")
      .replace(/\./g, "")
      .replace(/\s/g, "")
      .replace(",", ".")
  );
  const valorBase =
    plano.id === "1"
      ? precoUnitario * duration // diária: multiplica pelas diárias
      : precoUnitario; // semanal/mensal: valor fixo
  const taxaServico = 5;
  const seguro = 10;
  const total = valorBase + taxaServico + seguro;

  async function paymentCar() {
    try{
      const data = await createPayment(plano.id, carName, total);

      if(data){
        await openBrowserAsync(data);
      }

    } catch(error){
      alert("Ocorreu um erro ao realizar o pagamento")
      console.log(error);
    }
  }

  return (
    <Modal
      visible={visible}
      transparent
      animationType="slide"
      onRequestClose={onClose}
    >
      <View style={styles.container}>
        <View style={styles.PaymentContainer}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "flex-end",
              marginTop: 20,
            }}
          >
            <ButtonIcon iconName="close" iconSize={25} onPress={onClose} />
          </View>

          <Text style={styles.title}>Revisar e Confirmar Pagamento</Text>
          <View style={styles.resumeContainer}>
            <Text style={styles.resumeTitle}>Resumo da Reserva</Text>
            <Text style={styles.resumeCar}>Carro: {carName}</Text>
            <Text style={styles.resumeText}>
              Início:{" "}
              <Text style={styles.resumeText2}>
                {startDate.toLocaleDateString()}
              </Text>
            </Text>
            <Text style={styles.resumeText}>
              Fim:{" "}
              <Text style={styles.resumeText2}>
                {endDate.toLocaleDateString()}
              </Text>
            </Text>
            <Text style={styles.resumeText}>
              Duração Total:{" "}
              <Text style={styles.resumeText2}>
                {calculateDuration(startDate, endDate)} dias
              </Text>
            </Text>
            <Text style={styles.resumeText}>
              Plano Selecionado:{" "}
              <Text style={styles.resumeText2}>
                {plano.nome} - {plano.preco}
              </Text>
            </Text>
          </View>

          <View style={styles.chargeContainer}>
            <Text style={styles.chargeTitle}>Detalhes da Cobrança</Text>
            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <Text style={styles.chargeText}>Valor Base do aluguel:</Text>
              <Text style={styles.chargeText}>R$ {valorBase.toFixed(2)}</Text>
            </View>
            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <Text style={styles.chargeText}>Taxa de serviço:</Text>
              <Text style={styles.chargeText}>R$ {taxaServico.toFixed(2)}</Text>
            </View>
            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <Text style={styles.chargeText}>Seguro Opcional:</Text>
              <Text style={styles.chargeText}>R$ {seguro.toFixed(2)}</Text>
            </View>
            <View
              style={{
                borderBottomColor: "#ccc",
                borderBottomWidth: 1,
                marginVertical: 12,
              }}
            />
            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <Text style={styles.totalText}>Total a Pagar: </Text>
              <Text style={styles.totalText}>{total.toFixed(2)} </Text>
            </View>
          </View>
          <Button onPress={paymentCar} style={{borderRadius: 12, marginTop: 200}} name={`Confirmar e Pagar R$ ${total.toFixed(2)}`} />
        </View>
      </View>
    </Modal>
  );
}
