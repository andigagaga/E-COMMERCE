import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import Rating from '../Rating';
import {useNavigation} from '@react-navigation/native';

const ItemListFood = ({
  image,
  onPress,
  items,
  name,
  TotalItems,
  rating,
  price,
  type,
  date,
  status,
}: any) => {
  const renderItem = () => {
    switch (type) {
      case 'product':
        // items product home page
        return (
          <>
            <View style={styles.contentContainer}>
              <Text style={styles.title}>{name}</Text>
              <Text style={styles.price}>IDR {price}</Text>
            </View>
            <Rating rating={rating}/>
          </>
        );
      case 'order-summary':
        // item order summary
        return (
          <>
            <View style={styles.contentContainer}>
              <Text style={styles.title}>{name}</Text>
              <Text style={styles.price}>IDR {price}</Text>
            </View>
            <Text style={styles.titleItems}>{items} items</Text>
          </>
        );
      case 'in-progress':
        // item in progress
        return (
          <>
            <View style={styles.contentContainer}>
              <Text style={styles.title}>{name}</Text>
              <Text style={styles.price}>
                {TotalItems} items * IDR {price}
              </Text>
            </View>
          </>
        );
      case 'past-orders':
        // item past orders
        return (
          <>
           <View style={styles.contentContainer}>
              <Text style={styles.title}>{name}</Text>
              <Text style={styles.price}>
                {TotalItems} items IDR {price}
              </Text>
            </View>
            <View>
              <Text style={styles.date}>{date}</Text>
              <Text style={styles.status}>{status}</Text>
            </View>
          </>
        );
      default:
      // item product
      return (
        <>
          <View style={styles.contentContainer}>
            <Text style={styles.title}>{name}</Text>
            <Text style={styles.price}>IDR 289.000</Text>
          </View>
          <Rating />
        </>
      );
    }
  };

  return (
    <TouchableOpacity activeOpacity={0.7} onPress={onPress}>
      <View style={styles.container}>
        <Image source={image} style={styles.image} />
        {renderItem()}
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
  titleItems: {
    color: 'rgba(141, 146, 163, 1)',
    fontSize: 13,
    fontWeight: '400',
  },
  date: {color: 'rgba(141, 146, 163, 1)', fontSize: 10, fontWeight: '400'},
  status: {color: 'rgba(217, 67, 94, 1)', fontSize: 10, fontWeight: '400'}
});
