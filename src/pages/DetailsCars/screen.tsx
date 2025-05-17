import { View } from "react-native";
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

type DetailsCarsProps = {
  DetailCars: {
    cars: CarsProps;
  };
};

type DetailRouteProp = RouteProp<DetailsCarsProps, "DetailCars">;

export const DetailsCars = () => {
  const route = useRoute<DetailRouteProp>();

  return (
    <View style={styles.containerDetailsCars}>
      <Header title="Detalhes" />
      <View>
        <ComponentImage
          uri={`${route.params.cars.imageUrl}`}
          resizeMode={"cover"}
          style={styles.imageCar}
        />
        <CardDetailsCar
          brand={`${route.params.cars.marca} ${route.params.cars.modelo}`}
          available={Number(route.params.cars.rating)}
          description={`${route.params.cars.description}`}
          buttonIcon={
            <ButtonIcon
              iconName="star"
              iconSize={16}
              iconColor="orange"
              style={styles.buttonIcon}
            />
          }
        />
      </View>

      <View style={styles.containerCaracters}>
        <CardDetailsCarousel
          title="Caracteristicas"
          buttonIcon={
            <ButtonIcon
              iconName="event-seat"
              iconSize={20}
              iconColor="gray"
              style={styles.buttonCardCarousel}
            />
          }
          nameCharacters="Capacidade"
          descriptionCharacters={`${route.params.cars.capacidade} Lugares`}
        />
        <CardDetailsCarousel
          buttonIcon={
            <ButtonIcon
              iconName="car-crash"
              iconSize={20}
              iconColor="gray"
              style={styles.buttonCardCarousel}
            />
          }
          nameCharacters="Câmbio"
          descriptionCharacters={`${route.params.cars.cambio}`}
        />
        <CardDetailsCarousel
          buttonIcon={
            <ButtonIcon
              iconName="directions-car"
              iconSize={20}
              iconColor="gray"
              style={styles.buttonCardCarousel}
            />
          }
          nameCharacters="Km"
          descriptionCharacters={`${route.params.cars.km}`}
        />
      </View>

      <View style={styles.containerRentNowButton}>
        <Button onPress={() => alert("Carro alugado")} name="Alugar Agora" />
      </View>
    </View>
  );
};
