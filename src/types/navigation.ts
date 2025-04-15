import { NavigatorScreenParams } from "@react-navigation/native";

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
};

//Root navigation that rolls all the stacks
export type RootStackParamList = {
  AuthStack: NavigatorScreenParams<AuthStackParamList>;
};

//Global typing for react navigation
declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}
