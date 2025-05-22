import React from "react";
import { View, FlatList, Text } from "react-native";
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

type iconName = {
  [key: string]: string;
};

const nameCharactersIcon: iconName = {
  capacidade: "event-seat",
  câmbio: "car-crash",
  km: "directions-car",
  cor: 'palette',
  motor: 'speed',
} 

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
  const item = route.params.cars;

  const carAttribuites = Object.entries(item).filter(([key], value) => nameCharactersIcon[key]).map(([key], value) => ({
    key,
    label: key.charAt(0).toUpperCase().slice(1),
    icon: nameCharactersIcon[key],
    value: key === 'capacidade' ? `${value} Lugares` : String(value),
  }))
  return (
    <View style={styles.containerDetailsCars}>
      <Header title="Detalhes" />
      <View>
        <ComponentImage
          uri={[`${item.imageUrl}`]}
          resizeMode={"cover"}
          style={styles.imageCar}
        />
        <CardDetailsCar
          brand={`${item.marca} ${item.modelo}`}
          available={Number(item.rating)}
          description={`${item.description}`}
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

      <Text style={styles.titleCharacters}>Caracteristicas</Text>

      <FlatList
        data={carAttribuites}
        keyExtractor={(item) => item.key}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (     
          <CardDetailsCarousel 
            buttonIcon={
              <ButtonIcon iconName='event-seat' iconSize={20} iconColor='gray' style={styles.buttonCardCarousel}/>
            }
            nameCharacters={item.label}
            descriptionCharacters={`${item.value} Lugares`}
          />
        )}
      />
      <View style={styles.containerRentNowButton}>
        <Button onPress={handleNavigateVehicleRelease} name="Alugar Agora" />
      </View>
    </View>
  );
};