import { useMemo } from "react";
import { View, FlatList } from "react-native";
import { RouteProp, useRoute } from "@react-navigation/native";

import styles from "./style";

import { Header } from "../../components/Header";
import { ListCarsFeed } from "./components/ListCarsFeed";
import { useHome } from "../../hooks/useHome";

type FeedListProps = {
  FeedCars: {
    brand: string;
  };
};

type FeedRouteProps = RouteProp<FeedListProps, "FeedCars">;

export default function FeedCars() {
  const route = useRoute<FeedRouteProps>();
  const { cars } = useHome();
  const brand = route.params?.brand;

  const filteredCars = useMemo(() => {
    return cars.filter((car) => car.marca === brand);
  }, [cars, brand]);

  return (
    <View style={styles.container}>
      <Header title={brand} />
      <FlatList
        data={filteredCars}
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
    </View>
  );
}
