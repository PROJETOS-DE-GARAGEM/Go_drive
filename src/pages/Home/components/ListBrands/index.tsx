import { View, Text, TouchableOpacity, Image } from "react-native";

import styles from "./style";

import { CarsProps } from "../../../../contexts/homeContext";

type ListBrandsProps = {
  data: CarsProps;
};

const ListBrands = ({ data }: ListBrandsProps) => {
  return (
    <TouchableOpacity style={styles.brandContainer}>
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
