import { StyleSheet, View, Text, Button } from 'react-native';
import { FC } from 'react';
import SignInScreen from './assignment/BT2/LoginScreen';
import LoginScreen from './assignment/Buoi4 - navigation/screens/LoginScreen';
import React from 'react';



import AuthStack from './assignment/Buoi4 - navigation/screens/LoginScreen';
import TabNavigator from './assignment/Buoi4 - navigation/navigation/TabNavigator';
import RootNavigator from './assignment/Buoi4 - navigation/navigation';
import { NavigationContainer, NavigationProp, ParamListBase } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './assignment/_KT1/LoaiHoa';
import FlowerListScreen from './assignment/_KT1/ListHoa';
import FlowerDetailScreen from './assignment/_KT1/Hoa';
import BookList from './assignment/Buoi5/ApiFetch';


function App() {
  return (


    <BookList />

  );
}
export default App