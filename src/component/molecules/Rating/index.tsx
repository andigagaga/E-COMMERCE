import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Number from '../Number';

const Rating = ({number}: number | any) => {
  const renderStart = () => {
    let start = [];
    for(let i=1; i<=5; i++) {
      if(i <= number) {
        start.push(<Image key={i} source={require('../../../assets/Dummy/Ic-Star-on.png')} />)
      } else {
        start.push(<Image key={i} source={require('../../../assets/Dummy/Ic-Star-of.png')} />)
      }
    }
    return start;
  }
  return (
    <View style={styles.ratingContainer}>
          <View style={styles.startContainer}>
            {renderStart()}
          </View>
          <Number number={number} type='decimal'/>
          <Text>{number}</Text>
        </View>
  )
}

export default Rating

const styles = StyleSheet.create({
  ratingContainer: {flexDirection: 'row', marginTop: 5},
    startContainer: {flexDirection: 'row', marginRight: 6, alignItems: 'center'},
})