import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Header from '../../component/molecules/Header';
import TextInput from '../../component/atoms/TextInput';
import Button from '../../component/atoms/Button';

const SignUp = ({navigation}: any) => {
  return (
    <View style={styles.page}>
      <Header title="SignUp" subTitle="Register and eat" onBack={() => {}} />
      <View style={styles.container}>
        <View style={styles.photo}>
          <View style={styles.borderPhoto}>
            <View style={styles.photoConatiner}>
              <Text style={styles.addPhoto}>Add Photo</Text>
            </View>
          </View>
        </View>
        <TextInput label="Full Name" placeholder="Type your name" />
        <View style={{height: 24}} />
        <TextInput
          label="Email Address"
          placeholder="Type your email address"
        />
        <View style={{height: 24}} />
        <TextInput label="Password" placeholder="Type your password" />
        <View style={{height: 54}} />
        <Button text="Continue" onPress={() => navigation.navigate("SignUpAdress")}/>
        <View style={{height: 12}} />
      </View>
    </View>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  page: {flex: 1},
  container: {
    backgroundColor: 'white',
    paddingHorizontal: 24,
    paddingVertical: 26,
    marginTop: 24,
    flex: 1,
  },
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
});
