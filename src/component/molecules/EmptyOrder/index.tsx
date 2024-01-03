import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import Button from '../../atoms/Button';

const EmptyOrder = () => {

  const navigation = useNavigation();
  
  return (
    <View style={styles.page}>
      <Image source={require('../../../assets/Ilustration/OrderPage.png')} />
      <View style={{height: 24}} />
      <Text style={styles.title}>Ouch! Hungry</Text>
      <Text style={styles.subTitle}>Seems like you have not</Text>
      <Text style={styles.subTitle}>ordered any food yet</Text>
      <View style={{height: 24}} />
      <View style={styles.buttonConatiner}>
        <Button
          text="Find Foods"
          onPress={() => navigation.replace('appMain')}
        />
      </View>
    </View>
  );
};

export default EmptyOrder;

const styles = StyleSheet.create({
  page: {
    backgroundColor: 'white',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {color: '#020202', fontSize: 20, fontWeight: 'bold'},
  subTitle: {color: '#8D92A3', fontSize: 14, fontWeight: '500'},
  buttonConatiner: {width: '100%', paddingHorizontal: 100},
});
