import { View, Text } from "react-native";
import { ComponentImage } from "../../components/Image/component.Image";
import {
  CardDetailsCar,
  CardDetailsCarousel,
} from "../../components/CardDetailsCar/screen";
import { useRoute, RouteProp } from "@react-navigation/native";
import { CarsProps } from "../../contexts/homeContext";
import ButtonIcon from "../../components/ButtonIcon/ButtonIcon";
import Button from "../../components/Button/Button";
import styles from "./styles";
import { Header } from "../../components/Header";
import { useMemo } from "react";

type VehicleReleaseProps = {
  VehicleRelease: {
    cars: CarsProps;
  };
};

type VehicleReleaseRouteProps = RouteProp<
  VehicleReleaseProps,
  "VehicleRelease"
>;

export const VehicleRelease = () => {
  const route = useRoute<VehicleReleaseRouteProps>();
  const car = route.params.cars;

  const codigo = useMemo(() => {
    return Array.from({length: 4}, () => Math.floor(Math.random() * 9)).join("");
  }, [])

  return (
    <View style={{ flex: 1 }}>
      <Header title="Liberação de veículo" />
      <View>
        <ComponentImage
          uri={car.imageUrl}
          resizeMode="cover"
          style={styles.imageCar}
        />
        <CardDetailsCar
          brand={`${car.marca} ${car.modelo}`}
          description={
            "Código de acesso de uso exclusivo, informe em um de nossos estacionamentos credenciados pra retirar o veículo"
          }
        />
        {/* Criar component para gerar codigo */}
        <View style={styles.containerToken}>
          {codigo.split("").map((digito, index) => (
            <View key={index} style={styles.digitoContainer}>
              <Text style={styles.digito}>{digito}</Text>
            </View>
          ))}
        </View>
        <View style={styles.containerCodeRelease}>
          <Button onPress={() => alert("Carro liberado")} name="Liberar" />
        </View>
      </View>
    </View>
  );
};
