import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import EmptyOrder from '../../component/molecules/EmptyOrder'
import Header from '../../component/molecules/Header';
import OrderTabSection from '../../component/molecules/OrderTabSection';

const Order = () => {

  const [isEmpty] = useState(false);
  return (
    <View style={styles.page}>
      {isEmpty ? (
        <EmptyOrder/>

      ) : (
        <View style={styles.content}>
          <Header title="Your Orders" subTitle='Wait for the best meal' onBack={() => {}}/>
          <View style={styles.tabContainer}>
          <View style={{height: 24}} />
            <OrderTabSection/>
          </View>
        </View>
      )}
    </View>
  )
}

export default Order

const styles = StyleSheet.create({
  page: {flex: 1},
  content: {flex: 1},
  tabContainer: {flex: 1}
})