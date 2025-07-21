import { StyleSheet, View, Text, Button } from 'react-native';
import { FC } from 'react';
import SignInScreen from './assignment/BT2/LoginScreen';
import React from 'react';

import RootNavigator from './assignment/Buoi4 - navigation/navigation';
import { NavigationContainer, NavigationProp, ParamListBase } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './assignment/_KT1/LoaiHoa';
import FlowerListScreen from './assignment/_KT1/ListHoa';
import FlowerDetailScreen from './assignment/_KT1/Hoa';


function App() {
  return (
    <RootNavigator />
  );
}
export default App