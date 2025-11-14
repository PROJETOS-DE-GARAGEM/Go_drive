import { View, Text, TouchableOpacity, Image } from "react-native";
import styles from "./style";

import { BrandProps } from "../../../../types/car.type";
import { useNavigation } from "@react-navigation/native";

type ListBrandsProps = {
  data: BrandProps;
};

const ListBrands = ({ data }: ListBrandsProps) => {
  const navigation = useNavigation();

  const handleFeedBrand = (marca: string) => {
    navigation.navigate("AppStack", { screen: "FeedCars", params: { brand: marca }});
  };

  return (
    <TouchableOpacity
      style={styles.brandContainer}
      onPress={() => handleFeedBrand(data.marca)}
    >
      <View style={styles.titleContainer}>
        <Image
          style={styles.iconBrand}
          source={{ uri: data.imageMarca }}
          resizeMode="contain"
        />
        <Text style={styles.titleBrand}>{data.marca}</Text>
      </View>
    </TouchableOpacity>
  );
};

export { ListBrands };
