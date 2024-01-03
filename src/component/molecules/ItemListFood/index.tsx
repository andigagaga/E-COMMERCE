import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import Rating from '../Rating';
import {useNavigation} from '@react-navigation/native';
import Number from '../Number';

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
              <Number style={styles.price} number={price} type="currency" />
            </View>
            <Rating number={rating} />
          </>
        );
      case 'order-summary':
        // item order summary
        return (
          <>
            <View style={styles.contentContainer}>
              <Text style={styles.title}>{name}</Text>
              <Number style={styles.price} number={price} type="currency" />
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
              <View style={styles.containerPrice}>
                <Text style={styles.titleItems}>{items}3 items</Text>
                <View style={{ width: 3, height: 3, borderRadius: 3, backgroundColor: 'rgba(141, 146, 163, 1)', alignItems: 'center', marginHorizontal: 4 }}/>
                <Number style={styles.price} number={price} type="currency" />
              </View>
            </View>
          </>
        );
      case 'past-orders':
        // item past orders

        // function untuk mengubah agar date nya mudah di baca
        const formatedDate = new Date(date).toDateString();
        return (
          <>
            <View style={styles.contentContainer}>
              <Text style={styles.title}>{name}</Text>
              <View style={styles.containerPrice}>
                <Text style={styles.titleItems}>{items}3 items</Text>
                <View style={{ width: 3, height: 3, borderRadius: 3, backgroundColor: 'rgba(141, 146, 163, 1)', alignItems: 'center', marginHorizontal: 4 }}/>
                <Number style={styles.price} number={price} type="currency" />
              </View>
            </View>
            <View>
              <Text style={styles.date}>{formatedDate}</Text>
              <Text style={styles.status(status)}>{status}</Text>
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
  status: (status: string) => ({color: status === 'CANCELLED' ?  'rgba(217, 67, 94, 1)' : '#1abc9c', fontSize: 10, fontWeight: '400'}),
  containerPrice: {flexDirection: 'row', alignItems: 'center'}
});
