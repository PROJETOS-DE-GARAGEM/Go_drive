import { useEffect, useState, useDeferredValue } from "react";
import {
  Text,
  View,
  FlatList,
  ActivityIndicator,
  Modal,
  TouchableOpacity,
} from "react-native";

import styles from "./style";

import { InputFilter } from "./components/InputFilter";
import { Header } from "./components/Header";
import { ListBrands } from "./components/ListBrands";
import { ListCars } from "./components/ListCars";
import { FilterModal } from "./components/FilterModal";
import { SeeMore } from "../../components/SeeMore";

import { useHome } from "../../hooks/useHome";

export default function Home() {
  const [modalVisible, setModalVisible] = useState(false);
  const [search, setSearch] = useState<string>("");

  const { cars, brands ,loading, fetchCarsFiltered, searchBrands } = useHome();

  useEffect(() => {
    const delay = setTimeout(() => {
      searchBrands(search);
    }, 700);

    return () => clearTimeout(delay);
  }, [search]);

  return (
    <View style={styles.container}>
      <Header />
      <InputFilter setModalVisible={setModalVisible} searchInput={setSearch} />
      {loading ? (
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <ActivityIndicator size={70} color="#1f51d8" />
        </View>
      ) : (
        <>
          <Text style={styles.title}>Marcas</Text>
          <FlatList
            data={brands}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            renderItem={({ item }) => <ListBrands data={item} />}
            keyExtractor={(item) => item.id}
            contentContainerStyle={{ paddingHorizontal: 5 }}
            style={{ maxHeight: 150 }}
          />
          <View style={styles.listCarsContainer}>
            <View style={styles.headerCarsContainer}>
              <Text style={styles.title}>Veículos</Text>
            </View>
            <FlatList
              data={cars.slice(0, 3)}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={{
                paddingBottom: 14,
                gap: 8,
                paddingHorizontal: 10,
              }}
              keyExtractor={(item) => item.id}
              renderItem={({ item }) => <ListCars data={item} />}
              ListFooterComponent={<SeeMore/>}
              ListFooterComponentStyle={{ top: 100 }}
            />
          </View>
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
