import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Rating = () => {
  return (
    <View style={styles.ratingContainer}>
          <View style={styles.startContainer}>
            <Image source={require('../../../assets/Dummy/Ic-Star-on.png')} />
            <Image source={require('../../../assets/Dummy/Ic-Star-on.png')} />
            <Image source={require('../../../assets/Dummy/Ic-Star-on.png')} />
            <Image source={require('../../../assets/Dummy/Ic-Star-on.png')} />
            <Image source={require('../../../assets/Dummy/Ic-Star-of.png')} />
          </View>
          <Text>4.5</Text>
        </View>
  )
}

export default Rating

const styles = StyleSheet.create({
    startContainer: {flexDirection: 'row'},
    ratingContainer: {flexDirection: 'row', marginTop: 5},
})