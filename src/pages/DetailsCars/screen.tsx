import { StyleSheet, Text, View } from 'react-native';
import { ComponentImage } from '../../components/Image/component.Image';
import { CardDetailsCar, CardDetailsCarousel } from '../../components/CardDetailsCar/screen';
import ButtonIcon from '../../components/ButtonIcon/ButtonIcon';
import Button from '../../components/Button/Button'
import styles from './styles'


export const DetailsCars = () => {
  return (
    <View style={styles.containerDetailsCars}>
      {/* componentHeader ou Nav*/}
      <Text style={{fontSize: 18, fontWeight: 600, color: "#CED2D6", textAlign: "center", marginVertical: 15, marginTop: 40}}>componentHeader ou Nav</Text>
      <View>
        <ComponentImage 
          uri='https://t.ctcdn.com.br/z65Pikc6Z7My2T04IuMJ7ajKPl0=/1200x675/smart/i900301.png'        // query API uri
          resizeMode={'cover'} 
          style={styles.imageCar}
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
          <ButtonIcon iconName='event-seat' iconSize={20} iconColor='gray' style={styles.buttonCardCarousel}/>
        }
        nameCharacters='Capacidade'
        descriptionCharacters='4 cadeiras'
      />
      <View style={styles.containerRentNowButton}>
        <Button 
          onPress={() => alert("Carro alugado")}
          name='Alugar Agora'
        />
      </View>
    </View>
  );
};
