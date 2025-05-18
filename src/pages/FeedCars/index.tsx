import { useEffect, useMemo, useState } from "react";
import {
  View,
  FlatList,
  Modal,
  TouchableOpacity,
  Text,
  ActivityIndicator,
} from "react-native";
import { RouteProp, useRoute } from "@react-navigation/native";

import styles from "./style";

import { FontAwesome6 } from "@expo/vector-icons";
import { Header } from "../../components/Header";
import { ListCarsFeed } from "./components/ListCarsFeed";
import { InputFilter } from "../Home/components/InputFilter";
import { FilterModal } from "../Home/components/FilterModal";

import { useHome } from "../../hooks/useHome";

type FeedListProps = {
  FeedCars: {
    brand: string;
  };
};

type FeedRouteProps = RouteProp<FeedListProps, "FeedCars">;

export default function FeedCars() {
  const [modalVisible, setModalVisible] = useState(false);
  const [search, setSearch] = useState<string>("");

  const route = useRoute<FeedRouteProps>();
  const { cars, searchBrands, fetchCarsFiltered, loading } = useHome();
  const brand = route.params?.brand;

  useEffect(() => {
    const delay = setTimeout(() => {
      searchBrands(search);
    }, 700);

    return () => clearTimeout(delay);
  }, [search]);

  const filteredCars = useMemo(() => {
    if (brand) {
      return cars.filter((car) => car.marca === brand);
    }
    return cars;
  }, [cars, brand]);

  return (
    <View style={styles.container}>
      <Header title={brand} />
      <TouchableOpacity
        style={styles.buttonClearFilter}
        onPress={() => fetchCarsFiltered(undefined)}
      >
        <View style={{ flexDirection: "row" }}>
          <FontAwesome6 name="filter-circle-xmark" size={30} color="#FFF" />
        </View>
      </TouchableOpacity>
      <InputFilter setModalVisible={setModalVisible} searchInput={setSearch} />
      {loading ? (
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <ActivityIndicator size={70} color="#1f51d8" />
        </View>
      ) : (
        <>
          <FlatList
            data={filteredCars || ""}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <ListCarsFeed
                data={item}
                widthScreen={filteredCars.length <= 1 ? "100%" : "49%"}
              />
            )}
            numColumns={2}
            columnWrapperStyle={{ justifyContent: "space-between" }}
            contentContainerStyle={{ padding: 14 }}
          />
        </>
      )}
      <Modal
        transparent={true}
        visible={modalVisible}
        animationType="slide"
        onRequestClose={() => setModalVisible(false)}
        statusBarTranslucent={true}
      >
        <FilterModal closeModal={() => setModalVisible(false)} />
      </Modal>
    </View>
  );
}
