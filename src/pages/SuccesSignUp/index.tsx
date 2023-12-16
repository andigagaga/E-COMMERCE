import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Button from '../../component/atoms/Button';

const SuccesSignUp = ({navigation}: any) => {
  return (
    <View style={styles.page}>
      <Image source={require('../../assets/Ilustration/SuccesSignUp.png')} />
      <View style={{height: 24}} />
      <Text style={styles.title}>Yeay! Completed</Text>
      <Text style={styles.subTitle}>Now you are able to order</Text>
      <Text style={styles.subTitle}>some foods as a self-reward</Text>
      <View style={{height: 24}} />
      <View style={styles.buttonConatiner}>
      <Button text="Find Foods" backgroundColor="#bae1ef" onPress={() => navigation.replace("appMain")}/>

      </View>
    </View>
  );
};

export default SuccesSignUp;

const styles = StyleSheet.create({
  page: {
    backgroundColor: 'yellow',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {color: '#020202', fontSize: 20, fontWeight: 'bold'},
  subTitle: {color: '#8D92A3', fontSize: 14, fontWeight: '500'},
  buttonConatiner: { width: '100%', paddingHorizontal: 100}
});
