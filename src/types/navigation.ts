import { NavigatorScreenParams } from "@react-navigation/native";
import { CarsProps } from "../contexts/homeContext";

//Screens´s types of authetication (public)
export type AuthStackParamList = {
  Welcome: undefined;
  Login?: { email: string; password: string };
  Register: {
    name: string;
    surname: string;
    email: string;
    password: string;
    CNHnumber: number;
  };
  MultiForm: undefined;
  RegisterConfirmation: undefined;
};

export type AppStackParamsList = {
  Home: undefined;
  FeedCars: {
    brand: string;
  };
  DetailsCars: {
    cars: CarsProps;
  };
};

export type AppTabParamsList = {
  Home: undefined;
  FeedCars: {
    brand: string;
  };
  Maps: undefined;
  Perfil: {
    email: string;
    password: string;
  };
};



//Root navigation that rolls all the stacks
export type RootStackParamList = {
  AuthStack: NavigatorScreenParams<AuthStackParamList>;
  AppStack: NavigatorScreenParams<AppStackParamsList>;
};

//Global typing for react navigation
declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}
