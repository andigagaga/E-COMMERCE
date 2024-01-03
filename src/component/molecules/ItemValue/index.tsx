import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Number from '../Number';

const ItemValue = ({label, value, type, valueColor= 'black'}: any) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      {type === 'currency' ? (
        <Number number={value} style={styles.value(valueColor)} type={''} />
      ) : (
        <Text style={styles.value(valueColor)}>{value}</Text>
      )}
    </View>
  );
};

export default ItemValue;

const styles = StyleSheet.create({
  container: {flexDirection: 'row', justifyContent: 'space-between'},
  label: {
    color: 'rgba(141, 146, 163, 1)',
    fontSize: 14,
    fontWeight: '400',
    lineHeight: 21,
    paddingVertical: 7,
  },
  value: (color:any) => ({
    fontSize: 14,
    fontWeight: '400',
    lineHeight: 21,
    color: color,
  }),
});
