
import { Pressable, StyleProp, StyleSheet, Text, TextStyle, ViewStyle } from 'react-native'
import React from 'react'
type ButtonProps = {
    onPress?: () => void,
    title?: string,
    styleButton?: StyleProp<ViewStyle>,
    styleText?: StyleProp<TextStyle>,
}

const Button: React.FC<ButtonProps> = (props) => {
    const { onPress, title, styleButton, styleText } = props;

    return (
        <Pressable style={[styles.button, styleButton]} onPress={onPress}>
            <Text style={[styles.text, styleText]}>{title}</Text>
        </Pressable>
    )
}

export default Button

const styles = StyleSheet.create({
    button: {
        width: '100%',
        height: 50,
        padding: 12,
        backgroundColor: '#8C1AF6',
        borderRadius: 90,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 24,
    },
    text: {
        fontSize: 18,
        fontWeight: '600',
        color: 'white'
    },
})