// src/navigation/TabNavigator.tsx
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { RouteProp } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

import CartScreen from '../screens/CartScreen';
import ProfileScreen from '../screens/ProfileScreen';
import ProductList from '../../BT3/ProductList';
import { RootStackParamList } from '../types/navigation';

export type RootTabParamList = {
    Home: undefined;
    Cart: undefined;
    Profile: undefined;
};

const Tab = createBottomTabNavigator<RootTabParamList>();

type TabNavigatorProps = {
    route: RouteProp<RootStackParamList, 'MainTabs'>;
};

const TabNavigator: React.FC<TabNavigatorProps> = ({ route }) => {
    const { email } = route.params;
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                headerShown: false,
                tabBarIcon: ({ focused, size, color }) => {
                    let iconName: keyof typeof Ionicons.glyphMap;
                    if (route.name === 'Home') {
                        iconName = focused ? 'home' : 'home-outline';
                    } else if (route.name === 'Cart') {
                        iconName = focused ? 'cart' : 'cart-outline';
                    } else {
                        iconName = focused ? 'person' : 'person-outline';
                    }
                    return <Ionicons name={iconName} size={size} color={color} />;
                },
                tabBarActiveTintColor: '#000',
                tabBarInactiveTintColor: '#888',
            })}
        >
            <Tab.Screen name="Home" component={ProductList} />
            <Tab.Screen name="Cart" component={CartScreen} />
            <Tab.Screen name="Profile" component={ProfileScreen} initialParams={{ email }} />
        </Tab.Navigator>
    );
};

export default TabNavigator;
