import React from "react";
import { View } from "react-native";
import { useRoute, RouteProp, useNavigation } from "@react-navigation/native";
import { ComponentImage } from "../../components/Image/component.Image";
import {
  CardDetailsCar,
  CardDetailsCarousel,
} from "../../components/CardDetailsCar/screen";
import ButtonIcon from "../../components/ButtonIcon/ButtonIcon";
import Button from "../../components/Button/Button";
import { Header } from "../../components/Header";
import styles from "./styles";
import { CarsProps } from "../../contexts/homeContext";

type DetailsCarsProps = {
  DetailCars: {
    cars: CarsProps;
  };
};

type DetailRouteProp = RouteProp<DetailsCarsProps, "DetailCars">;

export const DetailsCars: React.FC = () => {
  const route = useRoute<DetailRouteProp>();
  const navigation = useNavigation();

  const { cars } = route.params;

  const handleNavigateVehicleRelease = () => {
    navigation.navigate("AppStack", {
      screen: "VehicleRelease",
      params: { cars },
    });
  };

  return (
    <View style={styles.containerDetailsCars}>
      <Header title="Detalhes" />
      <View>
        <ComponentImage
          uri={cars.imageUrl}
          resizeMode="cover"
          style={styles.imageCar}
        />
        <CardDetailsCar
          brand={`${cars.marca} ${cars.modelo}`}
          available={Number(cars.rating)}
          description={cars.description}
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
          descriptionCharacters={`${cars.capacidade} Lugares`}
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
          descriptionCharacters={cars.cambio}
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
          descriptionCharacters={cars.km}
        />
      </View>

      <View style={styles.containerRentNowButton}>
        <Button onPress={handleNavigateVehicleRelease} name="Alugar Agora" />
      </View>
    </View>
  );
};
