import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Rating from '../Rating';

const FoodCard = ({image, name, rating, onPress}: {image: string | any, name: string, rating: number | string , onPress: () => void   }) => {
  return (
    <TouchableOpacity activeOpacity={0.7} onPress={onPress}>
      <View style={styles.container}>
        <Image source={image} style={styles.image}/>
        <View style={styles.content}>
          <Text style={styles.text}>{name}</Text>
          <Rating number={rating}/>
        </View>
      </View>
      </TouchableOpacity>
    );

};

export default FoodCard;

const styles = StyleSheet.create({
  container: {
    width: 200,
    backgroundColor: 'white',
    borderRadius: 8,
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 7},
    shadowOpacity: 0.5,
    shadowRadius: 10,
    elevation: 14,
    overflow: 'hidden',
    marginRight: 12,
  },
  text: {fontSize: 16, fontWeight: '400', color: 'rgba(2, 2, 2, 1)'},
  content: {padding: 12},
  image: {width: 200, height: 140, resizeMode: 'cover'}
});
