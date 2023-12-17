import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Button from '../../component/atoms/Button'

const SuccesOrder = ({navigation}: any) => {
  return (
    <View style={styles.page}>
      <Image source={require('../../assets/Ilustration/SuccesOrder.png')}/>
      <View style={styles.content}>
        <Text style={styles.title}>You’ve Made Order</Text>
        <Text style={styles.subTitle}>Just stay at home while we are</Text>
        <Text style={styles.subTitle}>preparing your best foods</Text>
      </View>
      <View style={styles.button}>
        <Button text="Order Other Foods" onPress={() => navigation.replace("appMain")}/>
        <View style={{height: 20}}/>

        {/* dia akan ke navigate ke halaman appMain tapi spesific ke tab order */}
        <Button text="View My Order" backgroundColor="rgba(141, 146, 163, 1)" color="white" onPress={() => navigation.replace("appMain", {screen: 'Order'})}/>
      </View>
    </View> 
  )
}

export default SuccesOrder

const styles = StyleSheet.create({
  page: { backgroundColor: 'white',
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',},
  content: {marginTop: 40, alignItems: 'center'},
  title: {color: '#020202', fontSize: 20, fontWeight: 'bold'},
  subTitle: {color: '#8D92A3', fontSize: 14, fontWeight: '500'},
  button: {width: '100%', marginTop: 40, paddingHorizontal: 100},
})