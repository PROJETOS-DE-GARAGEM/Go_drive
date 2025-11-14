import { useEffect, useState } from "react";
import { View, Text, Switch } from "react-native";

import styles from "./style";

type FilterProps = {
  brand: string;
  selectedBrand: string | undefined;
  brandSelected: (brand: string | undefined) => void;
};

const ListFilterBrands = ({ brand, selectedBrand ,brandSelected }: FilterProps) => {
  const [isEnabled, setIsEnabled] = useState(false);

  useEffect(() => {
    setIsEnabled(brand === selectedBrand);
  }, [brandSelected, brand]);

  const toggleSwitch = () => {
    const newState = !isEnabled;
    setIsEnabled(newState);

    const brandData = newState ? brand : undefined;
    brandSelected(brandData);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titleBrand}>{brand}</Text>
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
