import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import Rating from '../Rating';
import {useNavigation} from '@react-navigation/native';

const ItemListFood = ({
  image,
  onPress,
  items,
  rating,
}: {
  image: any;
  onPress: any;
  items: any;
  rating: any;
}) => {
  return (
    <TouchableOpacity activeOpacity={0.7} onPress={onPress}>
      <View style={styles.container}>
        <Image source={image} style={styles.image} />
        <View style={styles.contentContainer}>
          <Text style={styles.title}>Soup Bumil</Text>
          <Text style={styles.price}>IDR 289.000</Text>
        </View>
        {items && !rating && <Text style={styles.titleItems}>{items} items</Text>}
        {rating && !items && <Rating />}
      </View>
    </TouchableOpacity>
  );
};

export default ItemListFood;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginVertical: 5,
    backgroundColor: 'white',
    alignItems: 'center',
  },
  image: {width: 60, height: 60, borderRadius: 8},
  contentContainer: {marginLeft: 12, flex: 1},
  title: {
    color: 'rgba(2, 2, 2, 1)',
    fontSize: 16,
    fontWeight: '400',
  },
  price: {
    color: 'rgba(141, 146, 163, 1)',
    fontSize: 13,
    fontWeight: '400',
  },
  titleItems: {color: 'rgba(141, 146, 163, 1)', fontSize: 13, fontWeight: '400'}
});
