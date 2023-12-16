import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Header from '../../component/molecules/Header'
import TextInput from '../../component/atoms/TextInput'
import Button from '../../component/atoms/Button'
import Select from '../../component/atoms/Select'

const SignUpAdress = ({navigation}: any) => {
  return (
    <View style={styles.page}>
    <Header title="Address" subTitle="Make sure it’s valid" onBack={() => {}} />
    <View style={styles.container}>
      <TextInput label="Phone No." placeholder="Type your phone number" />
      <View style={{height: 24}} />
      <TextInput
        label="Address"
        placeholder="Type your address"
      />
      <View style={{height: 24}} />
      <TextInput label="House No." placeholder="Type your house number" />
      <View style={{height: 24}} />
      <Select/>
      <View style={{height: 54}} />
      <Button text="Sign Up Now" onPress={() => navigation.replace("SuccesSignUp")}/>
      <View style={{height: 12}} />
    </View>
  </View>
  )
}

export default SignUpAdress

const styles = StyleSheet.create({
    page: {flex: 1},
  container: {
    backgroundColor: 'white',
    paddingHorizontal: 24,
    paddingVertical: 26,
    marginTop: 24,
    flex: 1,
  },
})