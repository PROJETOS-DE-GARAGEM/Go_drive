import { useState } from "react";
import {
  Text,
  View,
  FlatList,
  Pressable,
  ActivityIndicator,
  Modal,
} from "react-native";

import styles from "./style";

import { InputFilter } from "./components/InputFilter";
import { Header } from "./components/Header";
import { ListBrands } from "./components/ListBrands";
import { ListCars } from "./components/ListCars";
import { FilterModal } from "./components/FilterModal";

import { useHome } from "./hooks/useHome";

export default function Home() {
  const [modalVisible, setModalVisible] = useState(false);
  const { cars, loading } = useHome();

  return (
    <View style={styles.container}>
      <Header />
      <InputFilter setModalVisible={setModalVisible} />
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
            data={cars}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            renderItem={({ item }) => <ListBrands data={item} />}
            keyExtractor={(item) => item.id}
            contentContainerStyle={{ paddingHorizontal: 5 }}
            style={{ maxHeight: 90 }}
          />
          <View style={styles.listCarsContainer}>
            <View style={styles.headerCarsContainer}>
              <Text style={styles.title}>Carros</Text>
              <Pressable style={styles.buttonSpectAll}>
                <Text style={styles.buttonSpectAllText}>Todos</Text>
              </Pressable>
            </View>
            <FlatList
              data={cars}
              numColumns={2}
              showsVerticalScrollIndicator={false}
              columnWrapperStyle={{ justifyContent: "space-between" }}
              contentContainerStyle={{ paddingBottom: 14, padding: 10 }}
              renderItem={({ item }) => (
                <ListCars data={item} widthScreen={"49%"} />
              )}
              keyExtractor={(item) => item.id}
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
