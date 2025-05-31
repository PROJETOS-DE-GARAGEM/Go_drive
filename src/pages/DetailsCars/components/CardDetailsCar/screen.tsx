import { Text, View } from "react-native";
import { IDataDetailsCar } from "../../../../interfaces/DetailsCars.interface";
import styles from "./screenStyle";

export const CardDetailsCar: React.FC<IDataDetailsCar> = ({
  description,
  brand,
  available,
  buttonIcon,
}) => {
  return (
    <View style={styles.containerCardDetails}>
      <View style={styles.container}>
        <Text style={styles.titleBrand}>{brand}</Text>
        <View style={styles.containerDescription}>
          <Text style={styles.description}>{description}</Text>
          <View style={styles.conteinerAvailableButtonIcon}>
            <Text style={styles.available}>{available}</Text>
            {buttonIcon}
          </View>
        </View>
      </View>
    </View>
  );
};