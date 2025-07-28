import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { RouteProp } from '@react-navigation/native';
import { RootTabParamList } from '../types/navigation';
type Props = {
    route: RouteProp<RootTabParamList, 'Profile'>;
};

const ProfileScreen: React.FC<Props> = ({ route }) => {
    const { email } = route.params;
    const user = {
        name: 'Jane Doe',
        email,
        avatar: 'https://i.pravatar.cc/300',
    };

    return (
        <View style={styles.container}>
            <Image source={{ uri: user.avatar }} style={styles.avatar} />
            {/* <Text style={styles.name}>{user.name}</Text> */}
            <Text style={styles.email}>{user.email}</Text>
            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Edit Profile</Text>
            </TouchableOpacity>
        </View>
    );
};

export default ProfileScreen;

const styles = StyleSheet.create({
    container: {
        paddingTop: 80,
        flex: 1,
        padding: 24,
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    avatar: {
        width: 120,
        height: 120,
        borderRadius: 60,
        marginBottom: 16,
    },
    name: {
        fontSize: 22,
        fontWeight: '600',
        marginBottom: 4,
    },
    email: {
        fontSize: 22,
        color: '#666',
        marginBottom: 24,
    },
    button: {
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 8,
        backgroundColor: '#000',
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
    },
});
