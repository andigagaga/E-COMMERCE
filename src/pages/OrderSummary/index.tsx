import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import Header from '../../component/molecules/Header';
import ItemListFood from '../../component/molecules/ItemListFood';
import ItemValue from '../../component/molecules/ItemValue';
import Button from '../../component/atoms/Button';
import axios from 'axios';
import {API_HOST} from '../../config';
import {getData} from '../../utils/storage';
import {WebView} from 'react-native-webview';
import Loading from '../../component/molecules/Loading';

const OrderSummary = ({navigation, route}: any) => {
  const {item, transaction, userProfile} = route.params;
  const [token, setToken] = useState('');
  const [isPaymentOpen, setIsPaymentOpen] = useState(false);
  const [paymentURL, setPaymentURL] = useState('https://google.com');

  // useEffect(() => {
  //   getData('token').then(res => {
  //     console.log('tokennya', res);
  //     setToken(res.value);
  //   });
  // }, [token]);

  const onChekout = () => {
    const data = {
      food_id: item.id,
      user_id: userProfile.id,
      quantity: transaction.totalItem,
      total: transaction.total,
      status: 'PENDING',
    };

    getData('token').then(resToken => {
      axios
      .post(`${API_HOST.url}/api/checkout`, data, {
        headers: {
          Authorization: resToken.value,
        },
      })
      .then(res => {
        setIsPaymentOpen(true);
        setPaymentURL(res.data.data.payment_url);
      })
      .catch(err => {
      });
    })
    
    // navigation.replace('SuccesOrder')
  };

  // navigation
  const onNavChange = (state:any) => {
    console.log('navasssss', state)
    const titleWeb = 'Example Domain';
    if(state.url === titleWeb) {
      navigation.reset({index: 0, routes: [{name: 'SuccesOrder'}]})
    }
  }

  if (isPaymentOpen) {
    // buat nampilin paymentURL nya
    return (
      <>
        <Header
          title="Payment"
          subTitle="You deserve better meal"
          onBack={() => setIsPaymentOpen(false)}
        />
        <WebView
          source={{uri: paymentURL}}
          startInLoadingState={true}
          renderLoading={() => <Loading/>}
          onNavigationStateChange={onNavChange}
        />
      </>
    );
  }
  return (
    <View style={{flex: 1}}>
      <Header
        title="OrderSummarry"
        subTitle="You deserve better meal"
        onBack={() => navigation.goBack()}
      />
      <ScrollView>
        <View style={{height: 24}} />
        <View style={styles.container}>
          <Text style={styles.label}>Item Ordered</Text>
          <ItemListFood
            image={{uri: item.pictures}}
            type="order-summary"
            name={item.name}
            price={item.price}
            items={transaction.totalItem}
            onPress={undefined}
            rating={undefined}
          />
          <View style={{height: 20}} />
          <Text style={styles.label}>Details Transaction</Text>
          <ItemValue
            label={item.name}
            value={transaction.totalPrice}
            type="currency"
          />
          <ItemValue
            label="Driver"
            value={transaction.driver}
            type="currency"
          />
          <ItemValue label="Tax 10%" value={transaction.tax} type="currency" />
          <ItemValue
            label="Total Price"
            value={transaction.total}
            valueColor={'rgba(26, 188, 156, 1)'}
            type="currency"
          />
        </View>
        <View style={{height: 15}} />
        <View style={styles.container}>
          <Text style={styles.label}>Deliver to:</Text>
          <ItemValue label="Name" value={userProfile.name} />
          <ItemValue label="Phone No." value={userProfile.phoneNumber} />
          <ItemValue label="Address" value={userProfile.address} />
          <ItemValue label="House No." value={userProfile.houseNumber} />
          <ItemValue label="City" value={userProfile.city} />
        </View>

        <View style={styles.button}>
          <Button text="Checkout Now" onPress={onChekout} />
        </View>
      </ScrollView>
    </View>
  );
};

export default OrderSummary;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 24,
    paddingVertical: 16,
    backgroundColor: 'white',
    flex: 1,
  },
  label: {
    color: 'rgba(2, 2, 2, 1)',
    fontSize: 14,
    fontWeight: '400',
    lineHeight: 21,
  },
  button: {paddingHorizontal: 24, marginTop: 24, marginBottom: 24},
});
