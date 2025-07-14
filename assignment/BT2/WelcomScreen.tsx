import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const PRIMARY = '#a259fe';
const BG = '#191920';

export default function WelcomScreen() {
    return (
        <View style={styles.container}>
            <Ionicons name="rocket-outline" size={100} color={PRIMARY} style={styles.icon} />
            <Text style={styles.title}>Instamobile</Text>
            <Text style={styles.desc}>
                Use this codebase to start a new Firebase mobile app in minutes.
            </Text>
            <TouchableOpacity style={styles.loginBtn}>
                <Text style={styles.loginTxt}>Log In</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.signupBtn}>
                <Text style={styles.signupTxt}>Sign Up</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: BG,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 24,
    },
    icon: {
        marginBottom: 40,
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        color: PRIMARY,
        marginBottom: 8,
        textAlign: 'center',
    },
    desc: {
        color: '#ccc',
        fontSize: 15,
        textAlign: 'center',
        marginBottom: 40,
    },
    loginBtn: {
        backgroundColor: PRIMARY,
        borderRadius: 25,
        width: '100%',
        alignItems: 'center',
        paddingVertical: 14,
        marginBottom: 18,
    },
    loginTxt: {
        color: '#fff',
        fontSize: 18,
        fontWeight: '600',
    },
    signupBtn: {
        borderWidth: 1,
        borderColor: PRIMARY,
        borderRadius: 25,
        width: '100%',
        alignItems: 'center',
        paddingVertical: 14,
    },
    signupTxt: {
        color: PRIMARY,
        fontSize: 18,
        fontWeight: '600',
    },
});
