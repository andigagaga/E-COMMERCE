import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';

const Counter = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <Image source={require('../../../assets/Icon/Ic-Min.png')} />
      </TouchableOpacity>
      <Text style={styles.counter}>14</Text>
      <TouchableOpacity>
        <Image source={require('../../../assets/Icon/Ic-Plus.png')} />
      </TouchableOpacity>
    </View>
  );
};

export default Counter;

const styles = StyleSheet.create({
  container: {flexDirection: 'row', alignItems: 'center'},
  counter: {
    color: 'counter',
    fontSize: 16,
    fontWeight: '400',
    marginHorizontal: 10,
  },
});
