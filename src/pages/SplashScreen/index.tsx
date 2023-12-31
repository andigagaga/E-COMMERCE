import { useEffect } from 'react';
import {Image, Text, View} from 'react-native';
import { getData } from '../../utils/storage';

const SplashScreen = ({navigation}: any) => {

  // // saya menggunakan navigation.replace karena = saat berpindah halaman halaman sebelumnya terhapus
  useEffect(() => {
    setTimeout(() => {

       // untuk penyimpanan agar ketika user masuk aplikasi maka akan langsung masuk ke halaman home tanpa perlu login ulang apa bila user belom sigout / token  ya belom kehapius
      getData('token').then((res) => {
        if(res) {
          navigation.reset({index: 0, routes: [{name: 'appMain'}]})
        } else {
          navigation.reset({index: 0, routes: [{name: 'SignIn'}]})
        }
      })
    }, 3000)
  }, [])

  

  return (
    <>
      <View
        style={{
          backgroundColor: '#FFC700',
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Image
          style={{width: 150, height: 150}}
          source={require('../../assets/Ilustration/Homes.png')}
        />
        <View style={{height: 38}} />
        <Text style={{color: '#020202', fontSize: 50, fontWeight: 'bold'}}>FoodMarket</Text>
      </View>
    </>
  );
};

export default SplashScreen;
