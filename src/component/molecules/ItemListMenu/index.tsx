import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const ItemListMenu = ({ text, onPress }: { text: string, onPress: () => void }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.container}>
        <Text style={styles.title}>{text}</Text>
        <Image source={require('../../../assets/Icon/Ic-next.png')} />
      </View>
    </TouchableOpacity>
  );
};


export default ItemListMenu

const styles = StyleSheet.create({
    container: {flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 24, paddingVertical: 7, alignItems: 'center'},
    title: {color: 'rgba(2, 2, 2, 1)', fontSize: 14, fontWeight: '400', lineHeight: 21}
})