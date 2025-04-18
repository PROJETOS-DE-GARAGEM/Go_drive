import { View, Text, TouchableOpacity, Image } from "react-native";

import styles from "./style";

import { VelhicesProps } from "../../hooks/useHome";

type ListBrandsProps = {
  data: VelhicesProps;
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
