import { Text, View } from 'react-native';
import { IDataDetailsCar } from '../../interfaces/DetailsCars.interface'
import ButtonIcon from '../../components/ButtonIcon/ButtonIcon'
// import  styles  from './styles'



export const CardDetailsCar: React.FC<IDataDetailsCar> = ({
  descrition,
  brand,
  available,
  buttonIcon
}) => {

  return (
    <View style={{}}>
      <View>
        <Text>{brand}</Text>
        <Text>{descrition}</Text>
        <View>
          <Text>{available}</Text>
          {buttonIcon}
        </View>
      </View>
    </View>
  );
};


export const CardDetailsCarousel: React.FC<IDataDetailsCar> = ({
  title,
  descritionCharacters,
  nameCharacters,   //nameCharacters
  buttonIcon
}) => {
  return (
    <>
      <Text>{title}</Text>
      <View style={{}}>
          { buttonIcon }
          { nameCharacters }
          { descritionCharacters }
      </View>
      {/* button alugarCarro */}
    </>
  )
}