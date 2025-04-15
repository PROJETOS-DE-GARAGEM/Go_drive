import { Text, View } from 'react-native';
import { IDataDetailsCar } from '../../interfaces/DetailsCars.interface'
import  styles  from './screenStyle'



export const CardDetailsCar: React.FC<IDataDetailsCar> = ({
  description,
  brand,
  available,
  buttonIcon
}) => {

  return (
    <View style={styles.containerCardDetails}>
      <View style={styles.container}>
        <View>
          <Text style={styles.titleBrand}>{brand}</Text>
        </View>
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


export const CardDetailsCarousel: React.FC<IDataDetailsCar> = ({
  title,
  descriptionCharacters,
  nameCharacters,
  buttonIcon
}) => {
  return (
    <>
      <View style={styles.containerCardDetails}> 
        <Text style={styles.titleCharacters}>{title}</Text>
        <View style={styles.detailsCarousel}>
          { buttonIcon }
          <Text style={styles.nameCharacters}>{ nameCharacters }</Text>
          <Text style={styles.descriptionCharacters}>{ descriptionCharacters }</Text>
        </View>
      {/* button alugarCarro */}
      </View>
    </>
  )
}