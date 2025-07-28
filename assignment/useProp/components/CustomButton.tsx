
import React from 'react';
import { TouchableOpacity, Text, StyleSheet, ViewStyle, TextStyle } from 'react-native';

interface CustomButtonProps {
  title: string;
  onPress: () => void;
  variant?: 'filled' | 'outline';
  style?: ViewStyle;
  textStyle?: TextStyle;
}

export const CustomButton: React.FC<CustomButtonProps> = ({
  title,
  onPress,
  variant = 'filled',
  style,
  textStyle,
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.button,
        variant === 'outline' ? styles.outline : styles.filled,
        style,
      ]}
    >
      <Text style={[styles.text, variant === 'outline' && styles.textOutline, textStyle]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 6,
    width: "100%"
  },
  filled: {
    backgroundColor: '#000',
  },
  outline: {
    borderWidth: 1,
    borderColor: '#000',
    backgroundColor: 'transparent',
  },
  text: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  textOutline: {
    color: '#000',
  },
});
