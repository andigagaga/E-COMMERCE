import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Header from '../../component/molecules/Header';
import ItemListFood from '../../component/molecules/ItemListFood';
import ItemValue from '../../component/molecules/ItemValue';
import Button from '../../component/atoms/Button';
import axios from 'axios';
import {API_HOST} from '../../config';
import {getData} from '../../utils/storage';

const OrderDetail = ({navigation, route}: any) => {
  const {order} = route.params;

  // fungsi untuk cancel order
  const onCancel = () => {
    const data = {
      status: 'CANCELLED',
    };
    getData('token').then(resToken => {
      axios
        .post(`${API_HOST.url}/api/transaction/${order.id}`, data, {
          headers: {
            Authorization: resToken.value,
          },
        })
        .then(res => {
          console.log('cancel order berhasil', res);
          navigation.reset({index: 0, routes: [{name: 'appMain'}]});
        })
        .catch(err => {
          console.log('cancel gagal', err);
        });
    });
  };

  return (
    <View style={{flex: 1}}>
      <Header
        title="Payment"
        subTitle="You deserve better meal"
        onBack={() => navigation.goBack()}
      />
      <ScrollView>
        <View style={{height: 5}} />
        <View style={styles.container}>
          <Text style={styles.label}>Item Orderedsss</Text>
          <ItemListFood
            image={order?.food?.pictures ? {uri: order?.food?.pictures} : null}
            type="order-summary"
            name={order?.food?.name}
            price={order?.food?.price}
            items={order?.quantity}
            onPress={undefined}
            rating={undefined}
          />

          <View style={{height: 20}} />
          <Text style={styles.label}>Details Transaction</Text>
          <ItemValue
            label={order?.food?.name}
            value={order?.food?.total}
            type="currency"
          />
          <ItemValue label="Driver" value={50000} type="currency" />
          <ItemValue
            label="Tax 10%"
            value={(10 / 100) * order?.total}
            type="currency"
          />
          <ItemValue label="Total Price" value={order?.total} type="currency" />
        </View>
        <View style={{height: 5}} />
        <View style={styles.container}>
          <Text style={styles.label}>Deliver to:</Text>
          <ItemValue label="Name" value={order?.user?.name} />
          <ItemValue label="Phone No." value={order?.user?.phoneNumber} />
          <ItemValue label="Address" value={order?.user?.address} />
          <ItemValue label="House No." value={order?.user?.houseNumber} />
          <ItemValue label="City" value={order?.usercity} />
        </View>

        <View style={{height: 5}} />
        <View style={styles.container}>
          <Text style={styles.label}>Order Status:</Text>
          <ItemValue label={`${order.id}`} value={order.status} />
        </View>

        <View style={styles.button}>
          {/* logic kalau status nya pending maka tombol button nya ada */}
          {order.status === 'PENDING' && (
            <Button
              text="Cancel My Order"
              onPress={onCancel}
              backgroundColor="rgba(217, 67, 94, 1)"
              color="white"
            />
          )}
        </View>
      </ScrollView>
    </View>
  );
};

export default OrderDetail;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 24,
    paddingVertical: 16,
    marginTop: 24,
    backgroundColor: 'white',
  },
  label: {
    color: 'rgba(2, 2, 2, 1)',
    fontSize: 14,
    fontWeight: '400',
    lineHeight: 21,
  },
  button: {paddingHorizontal: 24, marginTop: 24, marginBottom: 24},
});
