import React, { useState } from "react";
import { View, FlatList, Text, Modal } from "react-native";
import { ComponentImage } from "../../components/Image/component.Image";
import {
  CardDetailsCar,
  CardDetailsCarousel,
} from "../../components/CardDetailsCar/screen";
import { useRoute, RouteProp } from "@react-navigation/native";
import { CarsProps } from "../../contexts/homeContext";
import { Header } from "../../components/Header";
import { TermsRent } from "../../components/Terms";
import ButtonIcon from "../../components/ButtonIcon/ButtonIcon";
import Button from "../../components/Button/Button";
import styles from "./styles";

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

export const DetailsCars = () => {
  const route = useRoute<DetailRouteProp>();
  const item = route.params.cars;

  const [modalVisible, setModalVisible] = useState(false);

  const carAttribuites = Object.entries(item)
    .filter(([key]) => nameCharactersIcon[key])
    .map(([key, value]) => ({
      key,
      label: key.charAt(0).toUpperCase() + key.slice(1),
      icon: nameCharactersIcon[key],
      value: key === 'capacidade' ? `${value} Lugares` : String(value),
    }));

  return (
    <View style={styles.containerDetailsCars}>
      <Header title="Detalhes" />
      <View>
        <ComponentImage
          uri={Array.isArray(item.imageUrl) ? item.imageUrl : [item.imageUrl]}
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
              <ButtonIcon iconName={item.icon} iconSize={20} iconColor='gray' style={styles.buttonCardCarousel}/>
            }
            nameCharacters={item.label}
            descriptionCharacters={`${item.value}`}
          />
        )}
      />
      <View style={styles.containerRentNowButton}>
        <Button onPress={() => setModalVisible(true)} name="Avançar" />
      </View>

      <Modal
        transparent={true}
        visible={modalVisible}
        animationType="fade"
        onRequestClose={() => setModalVisible(false)}
        statusBarTranslucent={true}
      >
        <TermsRent closeModal={() => setModalVisible(false)}/>
      </Modal>
    </View>
  );
};