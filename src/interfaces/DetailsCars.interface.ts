import { ImageStyle, StyleProp } from "react-native";

export interface ICharactersCar {
  brand?: string;
  model?: string;
  year?: number;
  version?: string;
  engine?: string;
  fuel?: 'gasolina' | 'etanol' | 'diesel' | 'híbrido' | 'elétrico';
  power?: string;
  transmission?: 'manual' | 'automático' | 'CVT';
  km?: number;
  hasAirConditioning?: boolean;
  hasMultimedia?: boolean;
  features?: string[];
}

export interface IDataDetailsCar extends ICharactersCar{
  title?: string;
  description?: string;
  quality?: string;
  kmRound?: number;
  available?: number | null | undefined
  nameCharacters?:  string;
  descriptionCharacters?: string
  buttonIcon: React.ReactNode
}

export interface IImageCarProps {
  uris: string[];
  resizeMode?: 'cover' | 'contain' | 'stretch' | 'repeat' | 'center';
  style?: StyleProp<ImageStyle>
}