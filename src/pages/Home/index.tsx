import { useEffect, useState, useDeferredValue } from "react";
import {
  Text,
  View,
  FlatList,
  ActivityIndicator,
  Modal,
} from "react-native";

import { InputFilter } from "./components/InputFilter";
import { Header } from "./components/Header";
import { ListBrands } from "./components/ListBrands";
import { ListCars } from "./components/ListCars";
import { SeeMore } from "../../components/SeeMore";

import styles from "./style";

import { useHome } from "../../hooks/useHome";

export default function Home() {
  const {
    cars, 
    brands,
    loading, 
    searchBrands,
    searchedBrand,
    setSearchedBrand 
  } = useHome();

  useEffect(() => {
    const delay = setTimeout(() => {
      searchBrands(searchedBrand);
    }, 700);

    return () => clearTimeout(delay);
  }, [searchedBrand]);

  return (
    <View style={styles.container}>
      <Header />
      <InputFilter searchInput={setSearchedBrand} />
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
    </View>
  );
}
