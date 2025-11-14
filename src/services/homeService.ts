
import { db } from "../services/firabaseConnection";
import { collection, getDocs, query, orderBy, where } from "firebase/firestore";
import { CarsProps } from "../types/car.type";

export const homeService = {

  fetchAllCars: async(): Promise<CarsProps[] | []> => {
    try {
      const carsRef = collection(db, "veiculos");
      const queryRef = query(carsRef, orderBy("created", "desc"));
      const snapshot = await getDocs(queryRef);
      const listCars = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      })) as CarsProps[];

      return listCars;

    } catch (error) {
      console.log("Erro ao buscar os dados", error);
    }
      return [];
  },

  fetchCarsFiltered: async(marca: string | undefined): Promise<CarsProps[] | []> => {
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

      return filterCars;

    } catch (error) {
      console.log("Erro ao buscar dados filtrados", error);
    }
      return [];
  },

  searchBrands: async(text: string): Promise<CarsProps[] | []> => {
    if (!text) {
      return [];
    }

    //Ignora "espaços" na consultas no banco
    const normalizedText = text.toLowerCase().replace(/\s/g, "");

    try {
      const carsRef = collection(db, "veiculos");
      let queryRef = query(carsRef);

      queryRef = query(
        queryRef,
        where("marca_normalized", ">=", normalizedText)
      );
      queryRef = query(
        queryRef,
        where("marca_normalized", "<=", normalizedText + "\uf8ff")
      );

      const snapshot = await getDocs(queryRef);
      const searchCars = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      })) as CarsProps[];

      return searchCars;

    } catch (error) {
      console.log("Erro ao buscar dados filtrados", error);
    }
      return [];
  }
}