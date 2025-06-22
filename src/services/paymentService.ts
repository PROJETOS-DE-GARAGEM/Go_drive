import { Linking } from "react-native";

interface PaymentData {
  id: string;
  title: string;
  quantity: number;
  price: number;
  external_reference: string;
}

interface InitPointResponse {
  init_point: string;
}

export async function startPayment(data: PaymentData): Promise<boolean> {
  console.log("Chamando startPayment", data);

  try {
    const response = await fetch(
      "https://mercadpago-backend.vercel.app/api/pagar",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    );

    const result: InitPointResponse | { error: string } = await response.json();

    if (response.ok && "init_point" in result) {
      await Linking.openURL(result.init_point);
      return true;
    } else {
      throw new Error("error" in result ? result.error : "Erro inesperado.");
    }
  } catch (error: any) {
    console.error("Erro ao iniciar pagamento:", error);
    throw error;
  }
}
