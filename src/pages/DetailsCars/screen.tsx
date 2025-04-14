import { StyleSheet, Text, View } from 'react-native';
import { ComponentImage } from '../../components/Image/component.Image';
import { CardDetailsCar, CardDetailsCarousel } from '../../components/CardDetailsCar/screen';
import ButtonIcon from '../../components/ButtonIcon/ButtonIcon';
import styles from './styles'

export const DetailsCars = () => {
  return (
    <View style={{}}>
      {/* componentHeader ou Nav*/}
      <View>
        <ComponentImage 
          uri='https://t.ctcdn.com.br/z65Pikc6Z7My2T04IuMJ7ajKPl0=/1200x675/smart/i900301.png'        // query API uri
          resizeMode={'cover'} 
          style={{width: 300, height: 180, borderRadius: 12}}
        />
        <CardDetailsCar
          brand='Audi'                         // query API brand, available e desc
          available={4.2} 
          description='sofisticação, desempenho e inovação.'
          buttonIcon={
            <ButtonIcon iconName='star' iconSize={16} iconColor='orange' style={styles.buttonIcon}/>
          }
        />
      </View>

      <CardDetailsCarousel 
        title='Caracteristicas'
        buttonIcon={
          <ButtonIcon iconName='event-seat' iconSize={20} iconColor='gray' />
        }
        nameCharacters='Capacidade'
        descriptionCharacters='4 cadeiras'
      />
    </View>
  );
};
