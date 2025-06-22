import axios from 'axios';

export const createPayment = async (id: string, title: string, price: number) => {

  try {
    const response = await axios.post("https://mercadpago-backend.vercel.app/api/pagar", {
      id: id,
      title: title,
      quantity: 1,
      price: price,
    });
    
    return response.data.order;

  } catch (error) {
    console.error("Erro ao criar preferência de pagamento:", error);
    throw error;
  }
};