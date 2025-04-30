import { createContext, ReactNode, useEffect, useState } from "react";

import * as Location from 'expo-location';

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
  marca_normalized: string;
  created: string;
  rating: string;
  parking: {
    latitude: string;
    longitude: string;
  }
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
  location: Location.LocationObject | null;
  fetchCarsFiltered: (brand: string | undefined) => Promise<void>;
  searchBrands: (text: string | "") => Promise<void>;
  fetchAllCars: () => Promise<void>;
  getCurrentLocation: () => Promise<void>;
};

type HomeProviderProps = {
  children: ReactNode;
};

export const HomeContext = createContext({} as HomeContextData);

export function HomeProvider({ children }: HomeProviderProps) {
  const [cars, setCars] = useState<CarsProps[]>([]);
  const [brands, setBrands] = useState<BrandProps[]>([]);
  const [location, setLocation] = useState<Location.LocationObject | null>(null);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getAllCars() {
      await fetchAllCars();
      await getCurrentLocation();
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

      const brandsList = listCars.map((doc) => ({
        id: doc.id,
        uuid: doc.uuid,
        marca: doc.marca,
        imageMarca: doc.imageMarca,
      }))

      const uniqueBrandsList = Array.from(
        new Map(brandsList.map((item) => [item.marca, item])).values()
      );

      setBrands(uniqueBrandsList);
      setCars(listCars);
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

    //Ignora "espaços" na consultas no banco
    const normalizedText = text.toLowerCase().replace(/\s/g, "");

    setLoading(true);
    try {
      const carsRef = collection(db, "veiculos");
      let queryRef = query(carsRef);

      queryRef = query(queryRef, where("marca_normalized", ">=", normalizedText));
      queryRef = query(queryRef, where("marca_normalized", "<=", normalizedText + "\uf8ff"));

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

  async function getCurrentLocation(){
    let { status } = await Location.requestForegroundPermissionsAsync();

    if(status !== "granted"){
      setErrorMsg('Permission to access location was denied')
      return;
    }

    let location = await Location.getCurrentPositionAsync({});
    setLocation(location);
  }

  return (
    <HomeContext.Provider
      value={{
        cars,
        loading,
        fetchCarsFiltered,
        searchBrands,
        fetchAllCars,
        brands,
        getCurrentLocation,
        location,
      }}
    >
      {children}
    </HomeContext.Provider>
  );
}
