import {
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import Rating from '../../component/molecules/Rating';
import Button from '../../component/atoms/Button';
import Counter from '../../component/molecules/Counter';
import Number from '../../component/molecules/Number';
import {getData} from '../../utils/storage';

type DetailTypes = {
  id: number;
  name: string;
  pictures: string;
  description: string;
  ingredients: string;
  price: number;
  reting: number;
};

const FoodDetail = ({navigation, route}: any) => {
  const {
    id,
    name,
    pictures,
    description,
    ingredients,
    price,
    reting,
  }: DetailTypes = route.params;

  const [totalItem, setTotalItem] = useState(1);
  // state data Profile
  const [userProfile, setUserProfile] = useState({});

  // data profile di order nya
  useEffect(() => {
    getData('userProfile').then(res => {
      setUserProfile(res);
    });
  }, []);

  const onCounterChange = (value: number) => {
    setTotalItem(value);
  };

  // data food yang di order
  const onOrder = () => {
    const totalPrice = totalItem * price;
    const driver = 50000;
    const tax = (10 / 100) * totalPrice;
    const total = totalPrice + driver + tax;
    const data = {
      item: {
        id: id,
        name: name,
        price: price,
        pictures: pictures,
      },
      transaction: {
        totalItem: totalItem,
        totalPrice: totalPrice,
        driver: driver,
        tax: tax,
        total: total,
      },
      userProfile,
    };

    console.log('data order yang di dapat', data);
    navigation.navigate('OrderSummary', data);
  };

  return (
    <View style={styles.page}>
      <ImageBackground source={{uri: pictures}} style={styles.cover}>
        <TouchableOpacity
          style={styles.back}
          onPress={() => navigation.goBack()}>
          <Image source={require('../../assets/Icon/Ic-Back-white.png')} />
        </TouchableOpacity>
      </ImageBackground>
      <View style={styles.content}>
        <View style={styles.mainContainer}>
          <View>
            <View style={styles.productContainer}>
              <View>
                <Text style={styles.title}>{name}</Text>
                <Rating number={reting} />
              </View>
              <Counter onValueChange={onCounterChange} />
            </View>
            <Text style={styles.desc}>{description}</Text>
          </View>
          <View>
            <Text style={styles.label}>Ingredients:</Text>
            <Text style={styles.desc}>{ingredients}</Text>
          </View>
        </View>
        <View style={styles.footer}>
          <View style={styles.priceContainer}>
            <Text style={styles.labelTotal}>Total Price:</Text>
            <Number
              number={totalItem * price}
              type="currency"
              style={styles.priceTotal}
            />
          </View>
          <View style={styles.button}>
            <Button text="Order Now" onPress={onOrder} />
          </View>
        </View>
      </View>
    </View>
  );
};

export default FoodDetail;

const styles = StyleSheet.create({
  page: {flex: 1},
  cover: {height: 330, paddingTop: 10, paddingLeft: 10},
  back: {
    width: 24,
    height: 24,
    marginTop: 24,
    marginLeft: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    backgroundColor: 'white',
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    marginTop: -40,
    flex: 1,
    paddingTop: 26,
    paddingHorizontal: 16,
  },
  title: {color: 'rgba(2, 2, 2, 1)', fontSize: 16, fontWeight: '400'},
  productContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 30,
  },
  desc: {
    color: 'rgba(141, 146, 163, 1)',
    fontSize: 14,
    fontWeight: '400',
    marginBottom: 16,
  },
  label: {
    color: 'rgba(2, 2, 2, 1)',
    fontSize: 14,
    fontWeight: '400',
    marginTop: 20,
  },
  mainContainer: {flex: 1},
  footer: {flexDirection: 'row', paddingVertical: 16, alignItems: 'center'},
  priceContainer: {flex: 1},
  button: {width: 163, height: 45, borderRadius: 8},
  labelTotal: {
    color: 'rgba(141, 146, 163, 1)',
    fontSize: 13,
    fontWeight: '400',
  },
  priceTotal: {color: 'rgba(2, 2, 2, 1)', fontSize: 18, fontWeight: '400'},
});
