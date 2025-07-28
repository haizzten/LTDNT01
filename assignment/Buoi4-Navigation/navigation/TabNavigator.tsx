// src/navigation/TabNavigator.tsx
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

import CartScreen from '../screens/CartScreen';
import ProfileScreen from '../screens/ProfileScreen';
import ProductList from '../../BT3/ProductList';

export type RootTabParamList = {
    Home: undefined;
    Cart: undefined;
    Profile: undefined;
};

const Tab = createBottomTabNavigator<RootTabParamList>();

const TabNavigator: React.FC = () => (
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
        <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
);

export default TabNavigator;
