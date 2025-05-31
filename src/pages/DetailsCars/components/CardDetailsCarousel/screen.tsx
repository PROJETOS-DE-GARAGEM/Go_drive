import { Text, View } from "react-native";
import { IDataDetailsCar } from "../../../../interfaces/DetailsCars.interface";
import styles from "./screenStyle";

export const CardDetailsCarousel: React.FC<IDataDetailsCar> = ({
  title,
  descriptionCharacters,
  nameCharacters,
  buttonIcon,
}) => {
  return (
    <View style={styles.containerCardDetails}>
      <View style={styles.detailsCarousel}>
        {buttonIcon}
        <Text style={styles.nameCharacters}>{title}</Text>
        <Text style={styles.descriptionCharacters}>
          {descriptionCharacters}
        </Text>
      </View>
    </View>
  );
};