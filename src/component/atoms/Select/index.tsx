import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Picker} from '@react-native-picker/picker';

const Select = () => {
  return (
    <View>
      <Text style={styles.label}>City</Text>
      <View style={styles.input}>
      <Picker
        // selectedValue={selectedLanguage}
        // onValueChange={(itemValue, itemIndex) =>
        //   setSelectedLanguage(itemValue)
        // }
        >
        <Picker.Item label="Java" value="java" />
        <Picker.Item label="JavaScript" value="js" />
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
