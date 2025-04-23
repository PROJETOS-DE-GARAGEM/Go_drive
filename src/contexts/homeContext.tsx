import { createContext, ReactNode, useEffect, useState } from "react";

import { db } from "../services/firabaseConnection";
import { collection, getDocs, query, orderBy, where } from "firebase/firestore";

export type CarsProps = {
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
};

type HomeContextData = {
  cars: CarsProps[];
  loading: boolean;
  fetchCarsFiltered: (brand: string | undefined) => Promise<void>;
};

type HomeProviderProps = {
  children: ReactNode;
};

export const HomeContext = createContext({} as HomeContextData);

export function HomeProvider({ children }: HomeProviderProps) {
  const [cars, setCars] = useState<CarsProps[]>([]);
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
        })) as CarsProps[];

        setCars(listCars);
        setLoading(false);
      } catch (error) {
        console.log("Erro ao buscar os dados", error);
        setLoading(false);
      }
    }

    fetchAllCars();
  }, []);

  async function fetchCarsFiltered(marca: string | undefined) {
    setLoading(true);
    try {
      const carsRef = collection(db, "veiculos");
      let queryRef = query(carsRef, orderBy("created", "desc"));

      if (marca) {
        queryRef = query(queryRef, where("marca", "==", marca));
      }

      const snapshot = await getDocs(queryRef);

      const listCars = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      })) as CarsProps[];

      setCars(listCars);
    } catch (error) {
      console.log("Erro ao buscar dados filtrados", error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <HomeContext.Provider
      value={{
        cars,
        loading,
        fetchCarsFiltered,
      }}
    >
      {children}
    </HomeContext.Provider>
  );
}
