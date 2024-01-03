import React, { useEffect, useState } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const Counter = ({onValueChange} : any) => {

  const [value, setValue] = useState(1);

  useEffect(() => {
    onValueChange(value)
  })

  const onCount = (type: any) => {
    let result = value;
    if(type === 'plus') {
      result = value + 1;
    }
    if(type === 'minus') {
      if(value > 1) {
        result = value - 1;

      }
    }
    setValue(result)
    onValueChange(result)
  }
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => onCount('minus')}>
        <Image source={require('../../../assets/Icon/Ic-Min.png')} />
      </TouchableOpacity>
      <Text style={styles.counter}>{value}</Text>
      <TouchableOpacity onPress={() => onCount('plus')}>
        <Image source={require('../../../assets/Icon/Ic-Plus.png')} />
      </TouchableOpacity>
    </View>
  );
};

export default Counter;

const styles = StyleSheet.create({
  container: {flexDirection: 'row', alignItems: 'center'},
  counter: {
    color: 'black',
    fontSize: 16,
    fontWeight: '400',
    marginHorizontal: 10,
  },
});
function onCounterChange() {
  throw new Error('Function not implemented.');
}

