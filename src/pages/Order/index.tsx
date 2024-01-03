import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import EmptyOrder from '../../component/molecules/EmptyOrder';
import Header from '../../component/molecules/Header';
import OrderTabSection from '../../component/molecules/OrderTabSection';
import {useDispatch, useSelector} from 'react-redux';
import {getOrders} from '../../redux/action/order';

const Order = () => {
  const [isEmpty] = useState(false);
  const dispatch = useDispatch();
  // ambil data dari redux nya dengan menggunakan useSelector
  const {orders} = useSelector((state: any) => state.orderReducer);

  useEffect(() => {
    dispatch(getOrders());
  }, []);

  return (
    <View style={styles.page}>
      {orders.length < 1 ? (
        <EmptyOrder />
      ) : (
        <View style={styles.content}>
          <Header
            title="Your Orders"
            subTitle="Wait for the best meal"
            onBack={() => {}}
          />
          <View style={styles.tabContainer}>
            <View style={{height: 24}} />
            <OrderTabSection />
          </View>
        </View>
      )}
    </View>
  );
};

export default Order;

const styles = StyleSheet.create({
  page: {flex: 1},
  content: {flex: 1},
  tabContainer: {flex: 1},
});
