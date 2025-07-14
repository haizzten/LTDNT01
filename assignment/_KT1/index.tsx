import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./LoaiHoa";
import FlowerListScreen from "./ListHoa";
import FlowerDetailScreen from "./Hoa";


export type RootStackParamList = {
  Home: undefined;
  FlowerList: { loaiId: string; loaiTen: string };
  FlowerDetail: { hoa: any, tenloai: string };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export const FlowerList = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Loại hoa', headerTitleAlign: 'center' }} />
                <Stack.Screen name="FlowerList" component={FlowerListScreen} options={{ title: 'Hoa', headerTitleAlign: 'center' }} />
                <Stack.Screen name="FlowerDetail" component={FlowerDetailScreen} options={{ title: 'CTHoa', headerTitleAlign: 'center' }} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}