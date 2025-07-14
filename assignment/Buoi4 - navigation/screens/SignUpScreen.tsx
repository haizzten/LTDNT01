import React, { useState } from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet,
    KeyboardAvoidingView,
    Platform,
} from 'react-native';
import { CustomInput } from '../components/CustomInput';
import { CustomButton } from '../components/CustomButton';

const SignUpScreen: React.FC<{ navigation: any }> = ({ navigation }) => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleCreateAccount = () => {
        console.log('Create account:', username, email, password);
    };

    const goToSignIn = () => {
        navigation.goBack();
    };

    return (
        <KeyboardAvoidingView
            behavior={Platform.select({ ios: 'padding', android: undefined })}
            style={styles.container}
        >
            <Image
                source={require('../assets/logo-cart.png')}
                style={styles.logo}
                resizeMode="contain"
            />

            <CustomInput
                placeholder="User Name"
                value={username}
                onChangeText={setUsername}
            />

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

            <CustomButton
                title="Create New Account"
                onPress={handleCreateAccount}
                variant="filled"
            />

            <CustomButton
                title="Go To Sign In"
                onPress={goToSignIn}
                variant="outline"
            />
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


export default SignUpScreen