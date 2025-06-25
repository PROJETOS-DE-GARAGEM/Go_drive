import { useEffect, useState } from "react";
import { CarsProps, BrandProps } from "../types/car.type";
import { homeService } from "../services/homeService";

const useHome = () => {
  const [cars, setCars] = useState<CarsProps[]>([]);
  const [brands, setBrands] = useState<BrandProps[]>([]);
  const [searchedBrand, setSearchedBrand] = useState<string>("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getAllCars() {
      const data = await getCars();
      getAllBrands(data);
  }
  
      getAllCars();
    }, []);

  const getCars = async(): Promise<CarsProps[]> => {
    setLoading(true);
    try {
      const data = await homeService.fetchAllCars();
      setLoading(false)
      setCars(data);
      return data;

    } catch (error) {
      console.log(error)
      setLoading(false)
      return [];
    }
  }

  const getAllBrands = async(data: CarsProps[]) => {
    if(cars){
      const brandsList = data.map((doc) => ({
        id: doc.id,
        uuid: doc.uuid,
        marca: doc.marca,
        imageMarca: doc.imageMarca,
      }));

      const uniqueBrandsList = Array.from(
        new Map(brandsList.map((item) => [item.marca, item])).values()
      );
      setBrands(uniqueBrandsList);
    }
  }

  const searchBrands = async(value: string) => {
    if (!value) {
      setLoading(true);
      await getCars();
      setLoading(false);
      return;
    }
    try {
      const filter = await homeService.searchBrands(value);
      setLoading(false);
      setCars(filter)

    } catch (error) {
      console.error(error)
      setLoading(false);
    }
  }

  return {
    cars,
    brands,
    searchBrands,
    searchedBrand,
    loading,
    setSearchedBrand,
  }
}

export { useHome };