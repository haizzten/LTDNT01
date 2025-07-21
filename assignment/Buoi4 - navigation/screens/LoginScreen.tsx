// src/screens/LoginScreen.tsx
import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, KeyboardAvoidingView, Platform } from 'react-native';
import { CustomInput } from '../components/CustomInput';
import { CustomButton } from '../components/CustomButton';
import { RootStackParamList } from '../types/navigation';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

type Props = NativeStackScreenProps<RootStackParamList, 'Login'>;

const LoginScreen = ({ navigation }: Props) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        console.log('Login with', email, password);
        navigation.navigate('MainTabs', { email })
    };

    const handleSignUp = () => {
        console.log('Go to Sign Up');
        navigation.navigate('SignUp')
    };

    return (
        <KeyboardAvoidingView
            behavior={Platform.select({ ios: 'padding', android: undefined })}
            style={styles.container}
        >
            <Image source={require('../assets/logo-cart.png')} style={styles.logo} resizeMode="contain" />

            <CustomInput
                placeholder="Email"
                keyboardType="email-address"
                autoCapitalize="none"
                value={email}
                onChangeText={setEmail}
            />

            <CustomInput
                placeholder="Password"
                secureTextEntry
                value={password}
                onChangeText={setPassword}
            />

            <Text style={styles.title}>Smart E-Commerce</Text>

            <CustomButton title="Login" onPress={handleLogin} variant="filled" />

            <CustomButton title="Sign Up" onPress={handleSignUp} variant="outline" />
        </KeyboardAvoidingView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    logo: {
        width: 150,
        height: 150,
        marginVertical: 20,
    },
    title: {
        fontSize: 18,
        fontWeight: '600',
        marginVertical: 12,
    },
});



export default LoginScreen