import { View, Text, Image, Pressable, DimensionValue } from "react-native";

import { AntDesign, MaterialIcons, FontAwesome6 } from "@expo/vector-icons";

import styles from "./style";

import { CarsProps } from "../../../../contexts/homeContext";
import { useNavigation } from "@react-navigation/native";

type ListCarFeedProps = {
  data: CarsProps;
  widthScreen: DimensionValue;
};

const ListCarsFeed = ({ data, widthScreen }: ListCarFeedProps) => {
  const navigation = useNavigation();

  const handleNavigateDetailCar = () => {
    navigation.navigate("AppStack", {
      screen: "DetailsCars",
      params: { cars: data },
    });
  };

  return (
    <Pressable
      style={[styles.container, { width: widthScreen }]}
      onPress={handleNavigateDetailCar}
    >
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
          <FontAwesome6 name="sack-dollar" color={"#e6ac00"} />
          {data.aluguel[0]}/dia
        </Text>
      </View>
    </Pressable>
  );
};

export { ListCarsFeed };
