import { RouteProp } from "@react-navigation/native";

export type RootStackParamList = {
  Login: undefined;
  SignUp: undefined;
  MainTabs: { email: string };
};

export type RootTabParamList = {
  Home: undefined;
  Cart: undefined;
  Profile:  { email: string };
};

export type TabNavigatorProps = {
    route: RouteProp<RootStackParamList, 'MainTabs'>;
};