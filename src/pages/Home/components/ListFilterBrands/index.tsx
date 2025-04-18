import { useState } from "react";
import { View, Text, Switch } from "react-native";

import styles from "./style";

interface BrandProps {
  id: string;
  marca: string;
}

interface BrandsFilterProps {
  data: BrandProps;
  onToggleBrand: (brand: BrandProps | undefined) => void;
}

const ListFilterBrands = ({ data, onToggleBrand }: BrandsFilterProps) => {
  const [isEnabled, setIsEnabled] = useState(false);

  const toggleSwitch = () => {
    setIsEnabled((previousState) => {
      const newState = !previousState;
      const brandData = newState ? data : undefined;

      onToggleBrand(brandData)
      console.log(onToggleBrand)
      console.log(newState)
      return newState;
    });
  };


  return (
    <View style={styles.container}>
      <Text style={styles.titleBrand}>{data.marca}</Text>
      <Switch
        trackColor={{ false: "#767577", true: "#1f51d8" }}
        thumbColor={isEnabled ? "#f4f3f4" : "#f4f3f4"}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
    </View>
  );
};

export { ListFilterBrands };
