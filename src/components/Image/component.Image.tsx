import { View, Image, TouchableWithoutFeedback  } from 'react-native';
import { IImageCarProps } from '../../interfaces/DetailsCars.interface'
import styles from './styles'
import Carousel from 'react-native-reanimated-carousel';

export const ComponentImage: React.FC<IImageCarProps> = ({
  uri,
  resizeMode="cover",
  style
}) => {
  return (
    <>
      <View style={styles.containerImage}>
        <Image 
          source={{ uri }}
          resizeMode={resizeMode}
          style={style}
        />
      </View>
    </>
  );
}

