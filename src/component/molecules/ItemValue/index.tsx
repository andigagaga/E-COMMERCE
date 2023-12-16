import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const ItemValue = ({label, value}: any) => {
  return (
    <View style={styles.container}>
        <Text style={styles.label}>{label}</Text>
        <Text style={styles.value}>{value}</Text>
    </View>
  )
}

export default ItemValue

const styles = StyleSheet.create({
  container: {flexDirection: 'row', justifyContent: 'space-between'},
  label: {color: 'rgba(141, 146, 163, 1)', fontSize: 14, fontWeight: '400', lineHeight: 21, paddingVertical: 7},
  value: {color: ' rgba(2, 2, 2, 1)', fontSize: 14, fontWeight: '400', lineHeight: 21}
})