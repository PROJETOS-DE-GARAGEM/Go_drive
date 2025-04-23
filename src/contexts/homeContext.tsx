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

export type BrandProps = {
  id: string;
  marca: string;
  imageMarca: string;
}

type HomeContextData = {
  cars: CarsProps[];
  brands: BrandProps[];
  loading: boolean;
  fetchCarsFiltered: (brand: string | undefined) => Promise<void>;
  searchBrands: (text: string | "") => Promise<void>;
  fetchAllCars: () => Promise<void>;
  fetchAllBrands: () => Promise<void>;
};

type HomeProviderProps = {
  children: ReactNode;
};

export const HomeContext = createContext({} as HomeContextData);

export function HomeProvider({ children }: HomeProviderProps) {
  const [cars, setCars] = useState<CarsProps[]>([]);
  const [brands, setBrands] = useState<BrandProps[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getAllCars() {
      await fetchAllCars();
      await fetchAllBrands();
    }

    getAllCars();
  }, []);

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

  async function fetchAllBrands() {
    try {
      const carsRef = collection(db, "veiculos");
      const queryRef = query(carsRef, orderBy("created", "desc"));
      const snapshot = await getDocs(queryRef);
      const listBrands = snapshot.docs.map((doc) => ({
        id: doc.id,
        marca: doc.data().marca,
        imageMarca: doc.data().imageMarca,
      })) as BrandProps[];

      setBrands(listBrands);
      setLoading(false);
    } catch (error) {
      console.log("Erro ao buscar os dados", error);
      setLoading(false);
    }
  }

  async function fetchCarsFiltered(marca: string | undefined) {
    setLoading(true);
    try {
      const carsRef = collection(db, "veiculos");
      let queryRef = query(carsRef, orderBy("created", "desc"));

      if (marca) {
        queryRef = query(queryRef, where("marca", "==", marca));
      }

      const snapshot = await getDocs(queryRef);

      const filterCars = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      })) as CarsProps[];

      setCars(filterCars);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log("Erro ao buscar dados filtrados", error);
    }
  }

  async function searchBrands(text: string) {
    if (!text) {
      setLoading(true);
      await fetchAllCars();
      setLoading(false);
      return;
    }

    setLoading(true);
    try {
      const carsRef = collection(db, "veiculos");
      let queryRef = query(carsRef);

      queryRef = query(queryRef, where("marca", ">=", text));
      queryRef = query(queryRef, where("marca", "<=", text + "\uf8ff"));

      const snapshot = await getDocs(queryRef);

      const searchCars = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      })) as CarsProps[];

      setCars(searchCars);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log("Erro ao buscar dados filtrados", error);
    }
  }

  return (
    <HomeContext.Provider
      value={{
        cars,
        loading,
        fetchCarsFiltered,
        searchBrands,
        fetchAllCars,
        fetchAllBrands,
        brands,
      }}
    >
      {children}
    </HomeContext.Provider>
  );
}
