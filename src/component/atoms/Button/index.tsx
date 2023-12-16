import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

interface ButtonProps {
  text: string;
  backgroundColor?: string; // Tambahkan properti backgroundColor sebagai opsional
  color?: string;
  onPress?: () => void;
}

const Button: React.FC<ButtonProps> = ({
  text,
  backgroundColor = '#FFFB73',
  color = 'black',
  onPress,
}: ButtonProps) => {
  return (
    <TouchableOpacity activeOpacity={0.7} onPress={onPress}>
      <View style={[styles.container, {backgroundColor}]}>
        <Text style={[styles.text, {color}]}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  container: {padding: 12, borderRadius: 8},
  text: {fontWeight: 'bold', fontSize: 15, lineHeight: 21, textAlign: 'center'},
});
