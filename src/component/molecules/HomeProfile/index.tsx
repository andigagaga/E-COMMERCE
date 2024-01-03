import React, { useEffect, useState } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { getData } from '../../../utils/storage';

const HomeProfile = () => {

  // state upload photo di profile
  const [photo, setPhoto] = useState<{uri: string}>({uri: ''});
  useEffect(() => {
    getData('userProfile').then((res: any) => {
      setPhoto({ uri: res.profile_photo_url });
    });
  }, []);  

  return (
    <View style={styles.profileContainer}>
    <View style={styles.appName}>
      <Text style={styles.title}>FoodMarket</Text>
      <Text style={styles.subTitle}>Let’s get some foods</Text>
    </View>
    <Image
      source={photo}
      style={styles.profile}
    />
  </View>
  )
}

export default HomeProfile

const styles = StyleSheet.create({
    profileContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: 'white',
      },
      profile: {
        width: 50,
        height: 50,
        borderRadius: 8,
        marginVertical: 30,
        marginRight: 24,
      },
      appName: {marginVertical: 30, marginLeft: 24},
      title: {fontSize: 22, fontWeight: 'bold', color: '#020202'},
      subTitle: {color: '#8D92A3', fontSize: 14, fontWeight: '400'},
})