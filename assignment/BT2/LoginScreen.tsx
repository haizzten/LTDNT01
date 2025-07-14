// SignInScreen.tsx
import React from 'react';
import { View, Text, StyleSheet, ScrollView, TextInput, Pressable } from 'react-native';
import { Button } from 'react-native-paper';
import Icon from 'react-native-vector-icons/Ionicons';

const SignInScreen = () => {
    return (
        <View style={styles.container}>
            <Button
                style={styles.backButton}
                compact
                mode="text"
                icon={({ size, color }) => (
                    <Icon name="arrow-back-outline" size={size} color="#fff" />
                )}
                onPress={() => { }}
                contentStyle={{ flexDirection: 'row-reverse' }}
            >{''}
            </Button>

            <Text style={styles.title}>Sign In</Text>
            <TextInput
                style={styles.input}
                placeholder="E-mail"
                placeholderTextColor="#888"
                keyboardType="email-address"
            />
            <TextInput
                style={styles.input}
                placeholder="Password"
                placeholderTextColor="#888"
                secureTextEntry
            />

            <Button
                style={styles.forgotButton}
                compact
                mode="text"
                labelStyle={styles.forgotText}
                onPress={() => { }}
            >
                Forgot password?
            </Button>

            <Button
                mode="contained"
                style={styles.loginBtn}
                labelStyle={styles.loginLabel}
                buttonColor="#8854d0"
                onPress={() => { }}
            >
                Log In
            </Button>
            <Text style={styles.or}>OR</Text>
            <Button
                mode="contained"
                style={styles.fbBtn}
                labelStyle={styles.fbLabel}
                buttonColor="#4267B2"
                icon="facebook"
                onPress={() => { }}
            >
                Login With Facebook
            </Button>
            <Pressable style={styles.googleBtn} onPress={() => { }}>
                <Icon name="logo-google" size={36} color="#4285F4" />
            </Pressable>
            <Button
                mode="contained"
                style={styles.appleBtn}
                labelStyle={styles.appleText}
                buttonColor="#fff"
                onPress={() => { }}
                icon={({ size }) => (
                    <Icon name="logo-apple" size={size} color="#000" style={{ marginRight: 8 }} />
                )}
            >
                Sign in with Apple
            </Button>
            <Button
                style={styles.phoneBtn}
                compact
                mode="text"
                labelStyle={styles.phoneText}
                onPress={() => { }}
            >
                Login with phone number
            </Button>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        backgroundColor: '#121212',
        paddingHorizontal: 24,
        paddingTop: 40,
    },
    backButton: {
        position: 'absolute',
        top: 32,
        left: 8,
        zIndex: 2,
        minWidth: 32,
    },
    title: {
        color: '#8854d0',
        fontSize: 32,
        fontWeight: '700',
        marginTop: 48,
        marginBottom: 32,
    },
    input: {
        backgroundColor: '#181818',
        borderRadius: 24,
        paddingHorizontal: 16,
        paddingVertical: 14,
        fontSize: 16,
        color: '#fff',
        marginBottom: 16,
        borderWidth: 1,
        borderColor: '#232323',
    },
    forgotButton: {
        alignSelf: 'flex-end',
        marginBottom: 24,
    },
    forgotText: {
        color: '#337aff',
        fontSize: 14,
        textTransform: 'none',
    },
    loginBtn: {
        borderRadius: 24,
        marginBottom: 20,
        paddingVertical: 4,
    },
    loginLabel: {
        fontSize: 18,
        color: '#fff',
        textTransform: 'none',
    },
    or: {
        textAlign: 'center',
        color: '#fff',
        marginBottom: 20,
        fontSize: 16,
        letterSpacing: 1.2,
    },
    fbBtn: {
        borderRadius: 24,
        marginBottom: 14,
        paddingVertical: 2,
    },
    fbLabel: {
        fontSize: 16,
        color: '#fff',
        textTransform: 'none',
    },
    googleBtn: {
        height: 48,
        width: 48,
        backgroundColor: '#fff',
        borderRadius: 24,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        marginBottom: 18,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.08,
        shadowRadius: 2,
        elevation: 2,
    },

    googleText: {
        color: '#222',
        fontSize: 16,
        fontWeight: '500',
        textTransform: 'none',
    },
    appleBtn: {
        borderRadius: 24,
        marginBottom: 24,
        paddingVertical: 2,
    },
    appleText: {
        color: '#222',
        fontSize: 16,
        fontWeight: '500',
        textTransform: 'none',
    },
    phoneBtn: {
        alignItems: 'center',
        minWidth: '100%',
    },
    phoneText: {
        color: '#337aff',
        fontSize: 15,
        fontWeight: '500',
        textTransform: 'none',
    },
});

export default SignInScreen;
