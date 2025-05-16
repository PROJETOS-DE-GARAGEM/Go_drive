import { View, FlatList, Text } from "react-native";
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

      <Text style={styles.titleCharacters}>Caracteristicas</Text>

      <FlatList
        data={DATA}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (     
          <CardDetailsCarousel 
            buttonIcon={
              <ButtonIcon iconName='event-seat' iconSize={20} iconColor='gray' style={styles.buttonCardCarousel}/>
            }
            nameCharacters={item.nameCharacters}
            descriptionCharacters={`${route.params.cars.capacidade} Lugares`}
          />
        )}
      />
      <View style={styles.containerRentNowButton}>
        <Button onPress={() => alert("Carro alugado")} name="Alugar Agora" />
      </View>
    </View>
  );
};