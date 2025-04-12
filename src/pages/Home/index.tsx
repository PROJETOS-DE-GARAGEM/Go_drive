import { Text, View, FlatList } from "react-native";

import { InputFilter } from "./components/InputFilter";
import { Header } from "./components/Header";
import { ListBrands } from "./components/ListBrands";

import styles from "./style";

//Fake data
const DATA = [
  {
    id: "1",
    title: "First",
  },
  {
    id: "2",
    title: "Second",
  },
  {
    id: "3",
    title: "Third",
  },
  {
    id: "4",
    title: "Second",
  },
  {
    id: "5",
    title: "Third",
  },
  {
    id: "6",
    title: "Second",
  },
  {
    id: "7",
    title: "Third",
  },
];

export default function Home() {
  return (
    <View style={styles.container}>
      <Header />
      <InputFilter />
      <Text style={styles.title}>Marcas</Text>
      <FlatList
        data={DATA}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => <ListBrands title={item.title} />}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ paddingHorizontal: 10, gap: 54}}
        style={{ maxHeight: 90 }}
      />
      <View style={styles.listCarsContainer}>
        <View style={styles.headerCarsContainer}>
          <Text>Carros</Text>
          <Text>Todos</Text>
        </View>
      </View>
    </View>
  );
}
