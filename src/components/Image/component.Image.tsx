import { View, Image, TouchableWithoutFeedback, Dimensions  } from 'react-native';
import { IImageCarProps } from '../../interfaces/DetailsCars.interface'
import styles from './styles'
import Carousel from 'react-native-reanimated-carousel';

export const ComponentImage: React.FC<IImageCarProps> = ({
  uri,
  resizeMode="cover",
  style
}) => {

  const { width } = Dimensions.get('screen')

  const images = uri.map(uri => ({ uri }))

  return (
    <>
      <View style={styles.containerImage}>
        <Carousel
          width={width}
          height={250}
          data={images}
          scrollAnimationDuration={1000}
          mode='horizontal-stack'
          style={styles.carousel}
          renderItem={({item}) => (
            <Image 
            source={{ uri: item.uri }}
            resizeMode={resizeMode}
            style={style}
            />
          )}
        >
        </Carousel>
      </View>
    </>
  );
}
