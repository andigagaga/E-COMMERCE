import { useState } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { launchImageLibrary } from 'react-native-image-picker';
import { useDispatch } from 'react-redux';
import Button from '../../component/atoms/Button';
import TextInput from '../../component/atoms/TextInput';
import Header from '../../component/molecules/Header';
import useForm from '../../utils/useForm';
import { showMessage } from 'react-native-flash-message';

const SignUp = ({navigation}: any) => {
  const [form, setForm] = useForm({
    name: '',
    email: '',
    password: '',
    password_confirmation: '',
  });

  // state poto profile
  const [photo, setPhoto] = useState<string | undefined>(undefined);

  // state konfirmasi passwordnya
  const [error, setError] = useState(false);
  const [errorEmail, setErrorEmail] = useState(false);

  const dispatch = useDispatch();

  const isValidEmail = (email: any) => {
    // Ekspresi reguler untuk memvalidasi format email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };
  const onSubmit = () => {
    if (!isValidEmail(form.email)) {
      // Email tidak valid
      setErrorEmail(true);
      setTimeout(() => {
        setErrorEmail(false);
      }, 2000);
      return;
    }
    if (form.password !== form.password_confirmation) {
      //  return  dispatch({type:"SET_ERROR",value:"confirmation passord error"})
      setError(true);
      setTimeout(() => {
        setError(false);
      }, 2000);
      return;
    }
    // console.log('form', form);
    // untuk mengirim data ke redux nya
    dispatch({type: 'SET_REGISTER', value: form});
    navigation.navigate('SignUpAdress');
  };



  // function addPhoto
  const addPhoto = () => {
    launchImageLibrary(
      {
        mediaType: 'photo',
        quality: 0.5,
        maxWidth: 200,
        maxHeight: 200,
      },
      response => {
        if (response.didCancel) {
          showMessage({
            message: 'Anda membatalkan pengambilan gambar',
            type: 'danger',
            titleStyle: { textAlign: 'center' },
          });
        } else if (response.assets && response.assets.length > 0) {
          const source = { uri: response.assets[0].uri };
          const dataImage = {
            uri: response.assets[0].uri,
            type: response.assets[0].type,
            name: response.assets[0].fileName,
          };
  
          setPhoto(response.assets[0].uri);
          // setPhoto(source);
          
          // penyimpanan data ke redux mya
          dispatch({ type: 'SET_PHOTO', value: dataImage });
          dispatch({ type: 'SET_UPLOAD_STATUS', value: true });
        }
      }
    );
  };

  return (
    <ScrollView contentContainerStyle={{flexGrow: 1}}>
      <View style={styles.page}>
        <Header title="SignUp" subTitle="Register and eat" onBack={() => navigation.goBack()} />
        <View style={styles.container}>
          <View style={styles.photo}>
            <TouchableOpacity onPress={addPhoto}>
              <View style={styles.borderPhoto}>
                {photo ? (
                  <Image source={{ uri: photo }} style={styles.photoConatiner}/> 
                ) : (
                <View style={styles.photoConatiner}>
                  <Text style={styles.addPhoto}>Add Photo</Text>
                </View>

                )}
              </View>
            </TouchableOpacity>
          </View>
          <TextInput
            label="Full Name"
            placeholder="Type your name"
            value={form.name}
            onChangeText={value => setForm('name', value)}
          />
          <View style={{height: 24}} />
          {errorEmail && (
            <Text style={{color: 'red'}}>
              Email yang di masukkan tidak valid
            </Text>
          )}
          <TextInput
            label="Email Address"
            placeholder="Type your email address"
            value={form.email}
            onChangeText={value => setForm('email', value)}
          />
          <Text style={{color: 'red'}}>! Masukkan email yang valid</Text>
          <View style={{height: 24}} />
          <TextInput
            label="Password"
            placeholder="Type your password"
            value={form.password}
            onChangeText={value => setForm('password', value)}
            secureTextEntry
          />
          <Text style={{color: 'red'}}>! Minimal 8 character</Text>
          <View style={{height: 24}} />
          {error && (
            <Text style={{color: 'red'}}>confirmation password error</Text>
          )}
          <TextInput
            label="Password Confirmation"
            placeholder="Passwor Confirmation"
            value={form.password_confirmation}
            onChangeText={value => setForm('password_confirmation', value)}
            secureTextEntry
          />
          <View style={{height: 54}} />
          <Button text="Continue" onPress={onSubmit} />
          <View style={{height: 12}} />
        </View>
      </View>
    </ScrollView>
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
