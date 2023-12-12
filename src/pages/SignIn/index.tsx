import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Header from '../../component/molecules/Header';
import TextInput from '../../component/atoms/TextInput';
import Button from '../../component/atoms/Button';

const SignIn = () => {
  return (
    <View style={styles.page}>
      <Header title="SignIn" subTitle="Find your best ever meal"/>
      <View style={styles.container}>
        <TextInput label="Email Address" placeholder="Type your email address"/>
        <View style={{height: 24}} />
        <TextInput label="Password" placeholder="Type your password"/>
        <View style={{height: 54}} />
        <Button text="Sign In"/>
        <View style={{height: 12}} />
        <Button text="Create New Account" backgroundColor="green" color="black"/>
      </View>
    </View>
  );
};

export default SignIn;

const styles = StyleSheet.create({
  page: {flex: 1},
  container: {
    backgroundColor: 'white',
    paddingHorizontal: 24,
    paddingVertical: 26,
    marginTop: 24,
    flex: 1,
  },
});
