import { View, Text, Image, Pressable, DimensionValue } from "react-native";

import { AntDesign, MaterialIcons } from "@expo/vector-icons";

import styles from "./style";

import { VelhicesProps } from "../../hooks/useHome";

type ListCarProps = {
  data: VelhicesProps;
  widthScreen: DimensionValue;
};

const ListCars = ({ data, widthScreen }: ListCarProps) => {
  return (
    <Pressable style={[styles.container, { width: widthScreen }]}>
      <Image style={styles.imageCar} source={{ uri: data.imageUrl }} />

      <View style={styles.partialInfoCar}>
        <Text style={styles.titleDetails}>
          {data.marca} {data.modelo}
        </Text>
        <Text style={styles.textDetails}>
          5.0 <AntDesign name="star" color={"#e6ac00"} />
        </Text>
        <Text style={styles.textDetails}>{data.cidade}</Text>
      </View>

      <View style={styles.endInfoCar}>
          <Text style={styles.textDetails}>
            <MaterialIcons name="event-seat" /> {data.capacidade} Lugares
          </Text>
        <Text style={styles.textDetails}>R${data.aluguel[0]}/dia</Text>
      </View>
    </Pressable>
  );
};

export { ListCars };
