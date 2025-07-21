
import React from 'react';
import { TextInput, StyleSheet, TextInputProps, View } from 'react-native';

interface CustomInputProps extends TextInputProps {
    placeholder: string;
}

export const CustomInput: React.FC<CustomInputProps> = ({ placeholder, style, ...rest }) => {
    return (
        <View style={styles.container}>
            <TextInput
                placeholder={placeholder}
                placeholderTextColor="#999"
                style={[styles.input, style]}
                {...rest}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: '100%',
        marginVertical: 8,
    },
    input: {
        height: 50,
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 25,
        paddingHorizontal: 20,
        fontSize: 16,
        backgroundColor: '#fff',
    },
});
