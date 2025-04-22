import { useEffect, useState } from "react";

import { db } from "../../../services/firabaseConnection";
import { collection, getDocs, query, orderBy, where } from "firebase/firestore";

export interface VelhicesProps {
  id: string;
  uuid: string;
  modelo: string;
  marca: string;
  cambio: string;
  capacidade: number;
  cidade: string;
  combustivel: string;
  cor: string;
  fabricacao: number;
  funcionalidades: string[];
  imageMarca: string;
  imageUrl: string;
  km: string;
  placa: string;
  aluguel: string[];
  versao: string;
}

export const useHome = () => {
  const [cars, setCars] = useState<VelhicesProps[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchAllCars() {
      try {
        const carsRef = collection(db, "veiculos");
        const queryRef = query(carsRef, orderBy("created", "desc"));
        const snapshot = await getDocs(queryRef);
        const listCars = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        })) as VelhicesProps[];

        setCars(listCars);
        setLoading(false);
      } catch (error) {
        console.log("Erro ao buscar os dados", error);
        setLoading(false);
      }
    }

    fetchAllCars();
  }, []);

  return {
    cars,
    loading,
  };
};
