import { View, Text, TouchableWithoutFeedback, FlatList } from "react-native";

import { ListFilterBrands } from "../ListFilterBrands";
import { useHome } from "../../hooks/useHome";

import styles from "./style";
import Button from "../../../../components/Button/Button";

type FilterModalProps = {
  closeModal: () => void;
};

const FilterModal = ({ closeModal }: FilterModalProps) => {
  const { brands } = useHome();
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
            data={brands}
            renderItem={({ item }) => <ListFilterBrands data={item} />}
          />
        </View>
        <View style={styles.buttonFilter}>
        <Button name="Aplicar" onPress={closeModal} />
        </View>
      </View>
    </View>
  );
};

export { FilterModal };
