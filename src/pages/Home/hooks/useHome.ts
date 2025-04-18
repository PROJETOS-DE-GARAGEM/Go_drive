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

export interface BrandsProps {
  id: string;
  marca: string;
}

export const useHome = () => {
  const [cars, setCars] = useState<VelhicesProps[]>([]);
  const [brands, setBrands] = useState<BrandsProps[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchVelhices() {
      await getVelhices();
    }

    fetchVelhices();
  }, []);

  async function getVelhices() {
    const carsRef = collection(db, "veiculos");
    const queryRef = query(carsRef, orderBy("created", "desc"));

    getDocs(queryRef).then((snapshot) => {
      let listCars = [] as VelhicesProps[];

      snapshot.forEach((doc) => {
        listCars.push({
          id: doc.id,
          modelo: doc.data().modelo,
          uuid: doc.data().uuid,
          marca: doc.data().marca,
          cambio: doc.data().cambio,
          aluguel: doc.data().aluguel,
          capacidade: doc.data().capacidade,
          combustivel: doc.data().combustivel,
          km: doc.data().km,
          versao: doc.data().versao,
          cor: doc.data().cor,
          cidade: doc.data().cidade,
          fabricacao: doc.data().fabricacao,
          funcionalidades: doc.data().funcionalidades,
          imageMarca: doc.data().imageMarca,
          imageUrl: doc.data().imageUrl,
          placa: doc.data().placa,
        });
      });

      setCars(listCars);
      setLoading(false);
    });
  }

  useEffect(() => {
    async function fetchBrands() {
      await getBrands();
    }

    fetchBrands();
  }, []);

  async function getBrands() {
    const brandsRef = collection(db, "veiculos");
    const snapshot = await getDocs(brandsRef);

    let listBrands = [] as BrandsProps[];

    snapshot.forEach((doc) => {
        listBrands.push({
          id: doc.id,
          marca: doc.data().marca,
        });
    });
    
    setBrands(listBrands);
  }

  return {
    cars,
    getVelhices,
    loading,
    getBrands,
    brands,
  };
};
