import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

interface ButtonProps {
  text: string;
  backgroundColor?: string; // Tambahkan properti backgroundColor sebagai opsional
  color?: string;
}

const Button: React.FC<ButtonProps> = ({ text, backgroundColor = '#FFC700', color= 'white' }: ButtonProps) => {
  return (
    <View style={[styles.container, { backgroundColor }]}>
      <Text style={[styles.text, {color}]}>{text}</Text>
    </View>
  );
};

export default Button;

const styles = StyleSheet.create({
  container: { padding: 12, borderRadius: 8 },
  text: { fontWeight: 'bold', fontSize: 15, lineHeight: 21, textAlign: 'center' },
});
