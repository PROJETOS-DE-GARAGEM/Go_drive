import { useEffect } from "react";
import { Alert, Linking } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function PaymentDeepLinkHandler() {
  const navigation = useNavigation();

  useEffect(() => {
    // Função que trata o link
    const handleDeepLink = ({ url }: { url: string }) => {
      const statusMatch = url.match(/status=([^&]+)/);
      const status = statusMatch?.[1];

      if (status === "approved") {
        Alert.alert("Pagamento Aprovado");
        navigation.navigate("AppStack", {
          screen: "VehicleRelease",
        });
      } else if (status === "failure") {
        Alert.alert("Pagamento Falhou");
        navigation.goBack(); // ou uma tela de erro
      } else if (status === "pending") {
        Alert.alert("Pagamento Pendente");
      }
    };

    // Escuta quando o app está rodando
    const subscription = Linking.addEventListener("url", handleDeepLink);

    // Escuta quando o app é aberto diretamente por um link
    Linking.getInitialURL().then((url) => {
      if (url) handleDeepLink({ url });
    });

    return () => subscription.remove();
  }, []);

  return null;
}
