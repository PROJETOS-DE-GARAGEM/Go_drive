import { StyleSheet, Text, View } from 'react-native';
import { ComponentImage } from '../../components/Image/component.Image';
import { CardDetailsCar, CardDetailsCarousel } from '../../components/CardDetailsCar/screen';
import ButtonIcon from '../../components/ButtonIcon/ButtonIcon';

export const DetailsCars = () => {
  return (
    <View style={{}}>
      {/* componentHeader ou Nav*/}
      <View>
        <ComponentImage 
          uri='https://cdn2.futurepedia.io/2025-02-14T22-19-34.796Z-NwbKlPrvF6zSleKYQOU7EkfdPQ8hXIMog.png?w=256'        // query API uri
          resizeMode={'center'} 
          style={{width: 100, height: 180, borderRadius: 12}}
        />
        <CardDetailsCar 
          brand='Audi'                         // query API brand, available e desc
          available={4.2} 
          descrition='test'
          buttonIcon={
            <ButtonIcon iconName='star' iconSize={20} iconColor='blue' />
          }
        />
      </View>

      <CardDetailsCarousel 
        title='Caracteristicas'
        buttonIcon={
          <ButtonIcon iconName='event-seat' iconSize={20} iconColor='gray' />
        }
        nameCharacters='Capacidade'
        descritionCharacters='4 cadeiras'
      />
    </View>
  );
};
