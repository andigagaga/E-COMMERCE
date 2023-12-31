import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Picker} from '@react-native-picker/picker';

type TextInputProps = {
  label: string
  value: string
  onSelectChange: (value: string) => void
  // secureTextEntry?: boolean
}

const Select = ({label, value, onSelectChange}: TextInputProps) => {
  return (
    <View>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.input}>
      <Picker
        selectedValue={value}
        onValueChange={(itemValue) =>
          onSelectChange(itemValue)
        }
        >
        <Picker.Item label="Padang" value="Padang" />
        <Picker.Item label="Jakarta" value="Jakarta" />
        <Picker.Item label="Bandung" value="Bandung" />
        <Picker.Item label="Bogor" value="Bogor" />
      </Picker>

      </View>
    </View>
  );
};

export default Select;

const styles = StyleSheet.create({
    label: {fontSize: 16, fontWeight: "bold", lineHeight:24, color: '#020202', },
    input: {borderWidth: 1, borderColor: "#020202", borderRadius: 8}
});
