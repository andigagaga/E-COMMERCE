import axios from 'axios';
import React, { useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import { showMessage } from 'react-native-flash-message';
import Button from '../../component/atoms/Button';
import TextInput from '../../component/atoms/TextInput';
import Header from '../../component/molecules/Header';
import useForm from '../../utils/useForm';
import { setLoading, signInAction } from '../../redux/action';
import { useDispatch } from 'react-redux';
import { getData } from '../../utils/storage';

const SignIn = ({navigation}: any) => {
  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');
  const [form, setForm] = useForm({
    email: '',
    password: '',
  });

  const dispatch = useDispatch();

  // untuk penyimpanan agar ketika user masuk aplikasi maka akan langsung masuk ke halaman home tanpa perlu login ulang apa bila user belom sigout / token  ya belom kehapius
  // useEffect(() => {
  //   getData('token').then((res) => {
  //     if(res) {
  //       navigation.reset({index: 0, routes: [{name: 'appMain'}]})
  //     }
  //   })
  // }, )

  const onSubmit = async () => {
    dispatch(signInAction(form, navigation));

  };

  return (
    <View style={styles.page}>
      <Header
        title="SignIn"
        subTitle="Find your best ever meal"
        onBack={undefined}
      />
      <View style={styles.container}>
        <TextInput
          label="Email Address"
          placeholder="Type your email address"
          value={form.email}
          onChangeText={(value: React.SetStateAction<string>) =>
            setForm('email', value)
          }
        />
        <View style={{height: 24}} />
        <TextInput
          label="Password"
          placeholder="Type your password"
          value={form.password}
          onChangeText={(value: React.SetStateAction<string>) =>
            setForm('password', value)
          }
          // untuk agar pass tidak terlihat dan berubah jadi .....
          secureTextEntry
        />
        <View style={{height: 54}} />
        <Button text="Sign In" color="black" onPress={onSubmit} />
        <View style={{height: 12}} />
        <Button
          text="Create New Account"
          backgroundColor="cyan"
          color="black"
          onPress={() => navigation.navigate('SignUp')}
        />
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
