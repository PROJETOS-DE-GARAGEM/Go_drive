import { Linking, Modal, Text, View, TouchableOpacity } from "react-native";
import styles from "./PaymentModalStyle";
import ButtonIcon from "../ButtonIcon/ButtonIcon";
import Button from "../Button/Button";
import { openBrowserAsync } from "expo-web-browser";
import { createPayment } from "../../services/CreatePayment";
import { AuthContext } from "../../contexts/AuthContext";
import { useContext, useState } from "react";
import { startPayment } from "../../services/paymentService";
import { TermsRent } from "../Terms";

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
  getHourlyPrice: (planId: string) => string;
};

export default function PaymentModal({
  visible,
  carName,
  startDate,
  endDate,
  plano,
  onClose,
  calculateDuration,
  getHourlyPrice, // <-- adicione aqui
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

  const [acceptedTerms, setAcceptedTerms] = useState(false);
  const [showTermsModal, setShowTermsModal] = useState(false);
  const [showError, setShowError] = useState(false);

  const { user } = useContext(AuthContext);
  async function paymentCar() {
    if (!acceptedTerms) {
      setShowError(true);
      return;
    }
    setShowError(false);
    const userId = user?.uid || "anon";

    try {
      console.log("Chamando startPayment...");

      await startPayment({
        id: plano.id,
        title: carName,
        quantity: 1,
        price: total,
        external_reference: userId,
      });
      console.log("Pagamento iniciado com sucesso");
    } catch (error) {
      alert("Ocorreu um erro ao realizar o pagamento");
      console.log("Erro no pagamento:", error);
    }
  }

  function formatDateBR(date: Date) {
    return date.toLocaleDateString("pt-BR");
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
              marginTop: 10,
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
              <Text style={styles.resumeText2}>{formatDateBR(startDate)}</Text>
            </Text>
            <Text style={styles.resumeText}>
              Fim:{" "}
              <Text style={styles.resumeText2}>{formatDateBR(endDate)}</Text>
            </Text>
            <Text style={styles.resumeText}>
              Duração Total:{" "}
              <Text style={styles.resumeText2}>
                {calculateDuration(startDate, endDate)} dias
              </Text>
            </Text>
            <Text style={styles.resumeText}>
              Plano Selecionado:
              <Text style={styles.resumeText2}>
                {plano.nome} - R$ {getHourlyPrice(plano.id)}/hora
              </Text>
            </Text>
          </View>

          <View style={styles.chargeContainer}>
            <Text style={styles.chargeTitle}>Detalhes da Cobrança</Text>
            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <Text style={styles.chargeText}>Valor Base do aluguel:</Text>
              <Text style={styles.chargeText}>
                {valorBase.toLocaleString("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                })}
              </Text>
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
              <Text style={styles.totalText}>
                {" "}
                {total.toLocaleString("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                })}
              </Text>
            </View>
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              marginTop: 40,
              marginBottom: 10,
            }}
          >
            <TouchableOpacity
              onPress={() => {
                setAcceptedTerms(!acceptedTerms);
                if (showError) setShowError(false);
              }}
              style={{
                width: 22,
                height: 22,
                borderWidth: 2,
                borderColor: "#1f51d8",
                borderRadius: 4,
                alignItems: "center",
                justifyContent: "center",
                marginRight: 10,
                backgroundColor: acceptedTerms ? "#1f51d8" : "#fff",
              }}
            >
              {acceptedTerms && (
                <Text style={{ color: "#fff", fontWeight: "bold" }}>✓</Text>
              )}
            </TouchableOpacity>
            <Text style={{ fontSize: 17 }}>
              Li e aceito o{" "}
              <Text
                style={{ color: "#1f51d8", textDecorationLine: "underline" }}
                onPress={() => setShowTermsModal(true)}
              >
                termo de responsabilidade
              </Text>
              .
            </Text>
          </View>
          {showError && (
            <Text
              style={{
                color: "red",
                marginTop: -7,
                marginLeft: 32,
                fontSize: 14,
              }}
            >
              É obrigatório aceitar o termo de responsabilidade.
            </Text>
          )}
          <Modal
            transparent={true}
            visible={showTermsModal}
            animationType="fade"
            onRequestClose={() => setShowTermsModal(false)}
            statusBarTranslucent={true}
          >
            <TermsRent
              closeModal={() => setShowTermsModal(false)}
              onAcceptTerms={() => {
                setAcceptedTerms(true);
                setShowTermsModal(false);
              }}
            />
          </Modal>
          <Button
            onPress={paymentCar}
            style={{ borderRadius: 12, marginTop: 45 }}
            name={`Confirmar e Pagar R$ ${total.toFixed(2)}`}
          />
        </View>
      </View>
    </Modal>
  );
}
