import { NavigatorScreenParams } from '@react-navigation/native'

//Screens´s types of authetication 
export type AuthStackParamList = {
  Welcome: undefined;
  Login: undefined;
  Register: undefined;
};


export type RootStackParamList = {
  AuthStack: NavigatorScreenParams<AuthStackParamList>;
};

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}
