import { Image } from 'react-native';
import { IImageCarProps } from '../../interfaces/DetailsCars.interface'


export const ComponentImage: React.FC<IImageCarProps> = ({
  uri,
  resizeMode="cover",
  style
}) => {
  return (
    <>
      <Image 
        source={{ uri }}
        resizeMode={resizeMode}
        style={style}
      />
    </>
  );
}
