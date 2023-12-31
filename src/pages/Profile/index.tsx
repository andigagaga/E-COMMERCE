import {Image, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import ProfileTabSection from '../../component/molecules/ProfileTabSection';
import {getData} from '../../utils/storage';

type UserProfile = {
  name: string;
  email: string;
  profile_photo_url: string;
};

const Profile = () => {
  const [dataProfile, setDataProfile] = useState<UserProfile>({
    name: '',
    email: '',
    profile_photo_url: '',
  });

  useEffect(() => {
    getData('userProfile').then((res: UserProfile) => {
      setDataProfile(res);
    });
  }, []);

  return (
    <View style={styles.page}>
      <View style={styles.photo}>
        <View style={styles.borderPhoto}>
          <Image
            style={styles.image}
            source={{uri: dataProfile.profile_photo_url}}
          />
        </View>
        <View style={styles.content}>
          <Text style={styles.title}>{dataProfile.name}</Text>
          <Text>{dataProfile.email}</Text>
        </View>
      </View>
      <View style={{height: 24}} />
      <ProfileTabSection />
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  page: {flex: 1},
  image: {width: 90, height: 90, borderRadius: 90},
  photo: {alignItems: 'center', marginTop: 26, marginBottom: 16},
  borderPhoto: {
    width: 110,
    height: 110,
    borderWidth: 1,
    borderRadius: 110,
    borderColor: '#8D92A3',
    borderStyle: 'dashed',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
  },
  photoConatiner: {
    backgroundColor: '#F0F0F0',
    width: 90,
    height: 90,
    borderRadius: 90,
    padding: 24,
  },
  addPhoto: {
    color: '#8D92A3',
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  content: {marginTop: 20, alignItems: 'center'},
  title: {color: 'rgba(2, 2, 2, 1)', fontSize: 15, fontWeight: '500'},
  subTitle: {color: 'rgba(141, 146, 163, 1)', fontSize: 14, fontWeight: '300'},
});
