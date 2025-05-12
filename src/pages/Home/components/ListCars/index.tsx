import { View, Text, Image, Pressable } from "react-native";

import { AntDesign, FontAwesome6, MaterialIcons } from "@expo/vector-icons";

import styles from "./style";

import { CarsProps } from "../../../../contexts/homeContext";

type ListCarProps = {
  data: CarsProps;
};

const ListCars = ({ data }: ListCarProps) => {
  return (
    <Pressable style={styles.container}>
      <Image style={styles.imageCar} source={{ uri: data.imageUrl }} />

      <View style={styles.partialInfoCar}>
        <Text style={styles.titleDetails}>
          {data.marca} {data.modelo}
        </Text>
        <Text style={styles.textDetails}>
          {data.rating} <AntDesign name="star" color={"#e6ac00"} />
        </Text>
        <Text style={styles.textDetails}>{data.cidade}</Text>
      </View>

      <View style={styles.endInfoCar}>
        <View>
          <Text style={styles.textDetails}>
            <MaterialIcons name="event-seat" /> {data.capacidade} Lugares
          </Text>
          <Text style={styles.textDetails}>
            <MaterialIcons name="car-crash" /> {data.cambio}
          </Text>
        </View>
        <Text style={styles.textDetails}>
        <FontAwesome6 name="sack-dollar" color={"#e6ac00"} />{data.aluguel[0]}/dia
        </Text>
      </View>
    </Pressable>
  );
};

export { ListCars };
