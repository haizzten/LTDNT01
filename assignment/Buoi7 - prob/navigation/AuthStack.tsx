import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import SignUpScreen from '../screens/SignUpScreen';
import { RootStackParamList } from "../types/navigation";

const Stack = createNativeStackNavigator<RootStackParamList>();

const AuthStack: React.FC = () => {
    return (

        <Stack.Navigator screenOptions={{ headerShown:  false}}>
            <Stack.Screen
                name="Login"
                component={AuthStack}
                options={{
                    title: 'First Page', //Set Header Title
                    headerStyle: {
                        backgroundColor: '#000000', //Set Header color
                    },
                    headerTintColor: '#fff', //Set Header text color
                    headerTitleStyle: {
                        fontWeight: 'bold', //Set Header text style
                    },
                }}
            />
            <Stack.Screen
                name="SignUp"
                component={SignUpScreen}
                options={{
                    title: 'Second Page', //Set Header Title
                    headerStyle: {
                        backgroundColor: '#000000', //Set Header color
                    },
                    headerTintColor: '#fff', //Set Header text color
                    headerTitleStyle: {
                        fontWeight: 'bold', //Set Header text style
                    },
                }}
            />
        </Stack.Navigator>

    )
}

// export default AuthStack