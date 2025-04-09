import { StyleSheet, Text, View } from 'react-native';
import ButtonIcon from '../../components/ButtonIcon/ButtonIcon'
import  styles  from './detailsCarsStyles'

interface DataDetailsCar {
    title: string;
    descrition: string;
    quality: string;
    kmRound: number;
}

export default function DetailsCar() {
  return (
    <View style={null}>
      {/* componentHeader ou Nav*/}
      <View>
        {/* Image car */}
        {/* Marca */}
        {/* Pré descriptions */}
        {/* <ButtonIcon iconName='star' iconSize={10} iconColor='yellow'/> */}
      </View>

      <View>
        {/* CharactersTitle */}
        <View>
            {/* <ButtonIcon iconName='event-seat' iconSize={10}iconColor='gray'/> */}
            {/* nameCharacters */}
            {/* text */}
        </View>
      </View>

      {/* button add component alugarCarro */}
    </View>
  );
}
