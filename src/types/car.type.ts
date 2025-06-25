
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
    parkingName: string;
    latitude: string;
    longitude: string;
  };
  parkingName: string;
  description: string;
};

export type BrandProps = {
  id: string;
  marca: string;
  imageMarca: string;
};