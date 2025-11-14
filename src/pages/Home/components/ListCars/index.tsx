import { useState } from "react";
import { View, Text, Image, Pressable } from "react-native";

import { AntDesign, FontAwesome6, MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

import { SkeletonLoading } from "../../../../components/Skeleton";
import styles from "./style";

import { CarsProps } from "../../../../types/car.type";

type ListCarProps = {
  data: CarsProps;
};

const ListCars = ({ data }: ListCarProps) => {
  const [loading, setLoading] = useState(true);
  const navigation = useNavigation();

const handleNavigateDetailCar = () => {
  navigation.navigate("AppStack", {screen: "DetailsCars", params: {cars: data}})
}

  return (
    <Pressable onPress={handleNavigateDetailCar} style={styles.container}>
      <SkeletonLoading isLoading={loading}>
          <Image 
            style={styles.imageCar} 
            source={{ uri: data.imageUrl }}
            onLoadEnd={() => setLoading(false)}
          /> 
      </SkeletonLoading>

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

export { ListCars };
