import React from 'react';
import {StyleSheet, View} from 'react-native';
import {showMessage} from 'react-native-flash-message';
import {ScrollView} from 'react-native-gesture-handler';
import {useDispatch, useSelector} from 'react-redux';
import Button from '../../component/atoms/Button';
import Select from '../../component/atoms/Select';
import TextInput from '../../component/atoms/TextInput';
import Header from '../../component/molecules/Header';
import {setLoading, signUpAction} from '../../redux/action';
import useForm from '../../utils/useForm';

const SignUpAdress = ({navigation}: any) => {
  const [form, setForm] = useForm({
    phoneNumber: '',
    address: '',
    houseNumber: '',
    city: '',
    // password_confirmation: '',
  });

  const dispatch = useDispatch();
  const {registerReducer, photoReducer} = useSelector((state: any) => state);

  const onSubmit = async () => {
    const data = {
      ...form,
      ...registerReducer,
    };

    // kondisi pengisian data harus diisi
    if (!form.phoneNumber || !form.address || !form.houseNumber || !form.city) {
      showMessage({
        message: 'Isi data dengan lengkap :)',
        type: 'danger',
        titleStyle: {textAlign: 'center'},
      });
      return;
    }

    dispatch(setLoading(true));
    dispatch(signUpAction(data, photoReducer, navigation));
  };

  const showToast = (message: any, type: any) => {
    showMessage({
      message,
      type: type === 'success' ? 'success' : 'danger',
      backgroundColor:
        type === 'success' ? 'rgba(26, 188, 156, 1)' : 'rgba(217, 67, 94, 1)',
    });
  };

  return (
    <ScrollView contentContainerStyle={{flexGrow: 1}}>
      <View style={styles.page}>
        <Header
          title="Address"
          subTitle="Make sure it’s valid"
          onBack={() => navigation.goBack()}
        />
        <View style={styles.container}>
          <TextInput
            label="Address"
            placeholder="Type your address"
            value={form.address}
            onChangeText={value => setForm('address', value)}
          />
          <View style={{height: 24}} />
          <Select
            label="City"
            value={form.city}
            onSelectChange={value => setForm('city', value)}
          />
          <View style={{height: 24}} />
          <TextInput
            label="House No."
            placeholder="Type your house number"
            value={form.houseNumber}
            onChangeText={value => setForm('houseNumber', value)}
          />
          <View style={{height: 24}} />
          <TextInput
            label="Phone No."
            placeholder="Type your phone number"
            value={form.phoneNumber}
            onChangeText={value => setForm('phoneNumber', value)}
          />
          <View style={{height: 24}} />
          <View style={{height: 24}} />
          <View style={{height: 54}} />
          <Button text="Sign Up Now" onPress={onSubmit} />
          <View style={{height: 12}} />
        </View>
      </View>
    </ScrollView>
  );
};

export default SignUpAdress;

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
