import { NavigationProp, ParamListBase } from "@react-navigation/native"


export type RootStackParamList = {
  Login: undefined;
  SignUp: undefined;
  MainTabs: { email: string };
};

export type RootTabParamList = {
  Home: undefined;
  Cart: undefined;
  Profile: undefined;
};