import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Rating = ({rating}: any) => {
  return (
    <View style={styles.ratingContainer}>
          <View style={styles.startContainer}>
            <Image source={require('../../../assets/Dummy/Ic-Star-on.png')} />
            <Image source={require('../../../assets/Dummy/Ic-Star-on.png')} />
            <Image source={require('../../../assets/Dummy/Ic-Star-on.png')} />
            <Image source={require('../../../assets/Dummy/Ic-Star-on.png')} />
            <Image source={require('../../../assets/Dummy/Ic-Star-of.png')} />
          </View>
          <Text>{rating}</Text>
        </View>
  )
}

export default Rating

const styles = StyleSheet.create({
    startContainer: {flexDirection: 'row'},
    ratingContainer: {flexDirection: 'row', marginTop: 5},
})