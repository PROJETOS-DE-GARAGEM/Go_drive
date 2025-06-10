import axios from 'axios';

export const createPayment = async () => {

  const ngrokServer = "https://3c5e-2804-2d5c-a0-b3ea-4c39-2b0d-8d93-f351.ngrok-free.app";

  try {
    const response = await axios.post(`${ngrokServer}/create_preference`, {
      id: "1234",
      title: "Produto Teste",
      quantity: 1,
      price: 10.0,
    });
    
    return response.data.order;

  } catch (error) {
    console.error("Erro ao criar preferência:", error);
    throw error;
  }
};