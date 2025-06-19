<<<<<<< HEAD
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
=======
import React, { useState } from "react";
import { View, Text, Modal } from "react-native";

import { ComponentImage } from "../../components/Image/component.Image";
import { CardDetailsCar } from "./components/CardDetailsCar/screen";
import { CardDetailsCarousel } from "./components/CardDetailsCarousel/screen";
import { useRoute, RouteProp, useNavigation } from "@react-navigation/native";
import { CarsProps } from "../../contexts/homeContext";
import { Header } from "../../components/Header";
import { TermsRent } from "../../components/Terms";
import ButtonIcon from "../../components/ButtonIcon/ButtonIcon";
import Button from "../../components/Button/Button";
>>>>>>> 71d32aea8d8c014dff7884ec760c5dc8e5fccd55

import styles from "./styles";

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
  const item = route.params.cars;

  const [modalVisible, setModalVisible] = useState(false);

  const carAttributes = item.funcionalidades.map((func) => ({
    attribute: func,
  }));
  const navigation = useNavigation();
  const handleAcceptTermsAndNavigateToPayment = () => {
    setModalVisible(false); // Primeiro, fecha o modal dos termos
    // Agora, navega para a 'PaymentScreen' e passa o objeto 'item' (o carro selecionado)
    navigation.navigate("AppStack", {
      screen: "PaymentScreen",
      params: { selectedCar: item },
    });
  };

  return (
    <View style={styles.containerDetailsCars}>
      <Header title="Detalhes do Veículo" />
      <View style={{ marginHorizontal: 10 }}>
        <ComponentImage
          uri={`${item.imageUrl}`}
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

<<<<<<< HEAD
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
=======
      <View style={styles.containerCaracters}>
        <CardDetailsCarousel
          title="Capacidade"
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
          title="Câmbio"
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
          title="KM"
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
>>>>>>> 71d32aea8d8c014dff7884ec760c5dc8e5fccd55
      </View>

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
        <TermsRent
          closeModal={() => setModalVisible(false)}
          onAcceptTerms={handleAcceptTermsAndNavigateToPayment}
        />
      </Modal>
    </View>
  );
};
