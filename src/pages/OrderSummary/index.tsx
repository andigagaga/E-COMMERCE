import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Header from '../../component/molecules/Header';
import ItemListFood from '../../component/molecules/ItemListFood';
import ItemValue from '../../component/molecules/ItemValue';
import Button from '../../component/atoms/Button';

const OrderSummary = ({navigation}: any) => {
  return (
    <View style={{flex: 1}}>
      <Header title="Payment" subTitle="You deserve better meal" onBack />
      <View style={{height: 24}} />
      <View style={styles.container}>
        <Text style={styles.label}>Item Ordered</Text>
        <ItemListFood
          image={require('../../assets/Dummy/FoodCard2.png')}
          items={14}
          onPress={undefined}
          rating={undefined}
        />
        <View style={{height: 20}} />
        <Text style={styles.label}>Details Transaction</Text>
        <ItemValue label="Cherry Healthy" value="IDR 18.390.000" />
        <ItemValue label="Driver" value="IDR 50.000" />
        <ItemValue label="Tax 10%" value="IDR 1.800.390" />
        <ItemValue label="Total Price" value="IDR 390.803.000" />
      </View>
      <View style={{height: 15}} />
      <View style={styles.container}>
        <Text style={styles.label}>Deliver to:</Text>
        <ItemValue label="Name" value="Angga Risky" />
        <ItemValue label="Phone No." value="0822 0819 9688" />
        <ItemValue label="Address" value="Setra Duta Palima" />
        <ItemValue label="House No." value="A5 Hook" />
        <ItemValue label="City" value="Bandung" />
      </View>

      <View style={styles.button}>
        <Button text="Checkout Now" onPress={() => navigation.replace('SuccesOrder')}/>
      </View>
    </View>
  );
};

export default OrderSummary;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 24,
    paddingVertical: 16,
    backgroundColor: 'white',
    flex: 1
  },
  label: {
    color: 'rgba(2, 2, 2, 1)',
    fontSize: 14,
    fontWeight: '400',
    lineHeight: 21,
  },
  button: {paddingHorizontal: 24, marginTop: 24, marginBottom: 24},
});
