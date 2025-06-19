import axios from 'axios';

export const createPayment = async (id: string, title: string, price: number) => {

  const ngrokServer = "https://2290-2804-2d5c-a2-1c45-bd34-83c8-77dc-16ed.ngrok-free.app";

  try {
    const response = await axios.post(`${ngrokServer}/create_preference`, {
      id: id,
      title: title,
      quantity: 1,
      price: price,
    });
    
    return response.data.order;

  } catch (error) {
    console.error("Erro ao criar preferência:", error);
    throw error;
  }
};