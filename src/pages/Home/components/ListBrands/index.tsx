import { View, Text, TouchableOpacity } from "react-native";

import styles from "./style";

type ListBrandsProps = {
  title: string;
};

const ListBrands = ({ title }: ListBrandsProps) => {
  return (
    <View style={styles.brandContainer}>
      <TouchableOpacity style={styles.iconBrand}></TouchableOpacity>
      <View style={styles.titleContainer}>
        <Text style={styles.titleBrand}>{title}</Text>
      </View>
    </View>
  );
};

export { ListBrands };
