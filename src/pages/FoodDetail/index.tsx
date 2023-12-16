import {
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import Rating from '../../component/molecules/Rating';
import Button from '../../component/atoms/Button';
import Counter from '../../component/molecules/Counter';

const FoodDetail = ({navigation}: any) => {
  return (
    <View style={styles.page}>
      <ImageBackground
        source={require('../../assets/Dummy/FoodDetail.png')}
        style={styles.cover}>
        <TouchableOpacity style={styles.back}>
          <Image source={require('../../assets/Icon/Ic-Back-white.png')} />
        </TouchableOpacity>
      </ImageBackground>
      <View style={styles.content}>
        <View style={styles.mainContainer}>
          <View>
            <View style={styles.productContainer}>
              <View>
                <Text style={styles.title}>Cherry Healthy</Text>
                <Rating />
              </View>
              <Counter/>
            </View>
            <Text style={styles.desc}>
              Makanan khas Bandung yang cukup sering dipesan oleh anak muda
              dengan pola makan yang cukup tinggi dengan mengutamakan diet yang
              sehat dan teratur.
            </Text>
          </View>
          <View>
            <Text style={styles.label}>Ingredients:</Text>
            <Text style={styles.desc}>Seledri, telur, blueberry, madu.</Text>
          </View>
        </View>
        <View style={styles.footer}>
          <View style={styles.priceContainer}>
            <Text style={styles.labelTotal}>Total Price:</Text>
            <Text style={styles.priceTotal}>IDR 12.289.000</Text>
          </View>
          <View style={styles.button}>
            <Button text="Order Now" onPress={() => navigation.navigate('OrderSummary')}/>
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
    marginBottom: 30
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
  labelTotal: {color: 'rgba(141, 146, 163, 1)', fontSize: 13, fontWeight: '400'},
  priceTotal: {color: 'rgba(2, 2, 2, 1)', fontSize: 18, fontWeight: '400'}

});
