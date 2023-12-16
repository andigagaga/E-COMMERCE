import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Rating from '../Rating'

const ItemListFood = ({ image }: { image: any }) => {
  return (
    <View
        style={{
          flexDirection: 'row',
          marginHorizontal: 4,
          marginVertical: 2,
          width: 'auto',
          backgroundColor: 'white',
          padding: 12,
          alignItems: 'center'
        }}>
        <Image
          source={image}
          style={{width: 60, height: 60, borderRadius: 8}}
        />
        <View style={{marginLeft: 12, flex: 1}}>
          <Text
            style={{
              color: 'rgba(2, 2, 2, 1)',
              fontSize: 16,
              fontWeight: '400',
            }}>
            Soup Bumil
          </Text>
          <Text style={{color: 'rgba(141, 146, 163, 1)', fontSize: 13, fontWeight: '400'}}>IDR 289.000</Text>
        </View>
        <Rating />
      </View>
  )
}

export default ItemListFood

const styles = StyleSheet.create({})