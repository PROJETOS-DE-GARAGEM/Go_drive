import { useState } from "react";
import { View, Text, Switch } from "react-native";

import { VelhicesProps } from "../../hooks/useHome";

import styles from "./style";

interface BrandProps {
  data: VelhicesProps;
}

const ListFilterBrands = ({ data }: BrandProps) => {
  const [isEnabled, setIsEnabled] = useState(false);

  const toggleSwitch = () => {
    setIsEnabled((previousState) => !previousState);
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
