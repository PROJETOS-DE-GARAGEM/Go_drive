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
          <Text style={styles.description}>{description}</Text>
        </View>
        <View style={styles.conteinerAvailableButtonIcon}>
          <Text style={styles.available}>{available}</Text>
          {buttonIcon}
        </View>
      </View>
    </View>
  );
};


export const CardDetailsCarousel: React.FC<IDataDetailsCar> = ({
  title,
  descriptionCharacters,
  nameCharacters,   //nameCharacters
  buttonIcon
}) => {
  return (
    <>
      <Text style={{}}>{title}</Text>
      <View style={{}}>
          { buttonIcon }
          { nameCharacters }
          { descriptionCharacters }
      </View>
      {/* button alugarCarro */}
    </>
  )
}