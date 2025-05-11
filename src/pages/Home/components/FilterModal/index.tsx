import { View, Text, TouchableWithoutFeedback, FlatList } from "react-native";

import { ListFilterBrands } from "../ListFilterBrands";
import { useHome } from "../../../../hooks/useHome";

import styles from "./style";
import Button from "../../../../components/Button/Button";
import { useState } from "react";

type FilterModalProps = {
  closeModal: () => void;
};

const FilterModal = ({ closeModal }: FilterModalProps) => {
  const [selectedBrand, setSelectedBrand] = useState<string | undefined>(
    undefined
  );
  const { cars, fetchCarsFiltered } = useHome();

  const uniqueBrands = Array.from(new Set(cars.map((car) => car.marca)));

  function applyFilter() {
    fetchCarsFiltered(selectedBrand);
    closeModal();
  }

  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={closeModal}>
        <View style={{ flex: 1 }}></View>
      </TouchableWithoutFeedback>
      <View style={styles.contentFilter}>
        <View style={styles.containerTitleFilter}>
          <Text style={styles.textTitleFilter}>Selecione a Marca</Text>
        </View>
        <View style={styles.contentFilterBrands}>
          <FlatList
            data={uniqueBrands}
            renderItem={({ item }) => (
              <ListFilterBrands
                selectedBrand={selectedBrand}
                brand={item}
                brandSelected={setSelectedBrand}
              />
            )}
          />
        </View>
        <View style={styles.buttonFilter}>
          <Button name="Aplicar" onPress={applyFilter} />
        </View>
      </View>
    </View>
  );
};

export { FilterModal };
