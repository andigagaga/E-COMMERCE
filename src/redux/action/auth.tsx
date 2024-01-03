import axios from "axios";
import { showMessage } from "react-native-flash-message";
import { ThunkAction } from "redux-thunk";
import { setLoading } from ".";
import { API_HOST } from "../../config";
import { storeData } from "../../utils/storage";

type DataRegister = {
    name: string;
    email: string;
    password: string;
  };
  
  type PhotoReducer = {
    isUploadPhoto: boolean;
    photo: any;
  };
  
  type Navigation = any;

  type Form = {
    email: string,
    password: string
}
  
  // const API_HOST = {
  //   url: 'https://daef-2404-8000-1004-2418-80d2-a1ea-fbfa-cbd2.ngrok-free.app'
  // };
  
  type ThunkResult<Type> = ThunkAction<Type, DataRegister, PhotoReducer, Navigation>;
  
  export const signUpAction = (
    dataRegister: DataRegister,
    photoReducer: PhotoReducer,
    navigation: Navigation
  ): ThunkResult<void> => async (dispatch) => {
    await axios
      .post(
        `${API_HOST.url}/api/register`,
        dataRegister,
      )
      .then(res => {
        console.log('Data Registrasi: ', res.data);

        // menyimpan data user
        const profile = res.data.data.user;
        
        // menyimpan data token
        const token = `${res.data.data.token_type} ${res.data.data.access_token}`
        storeData('token', {value: token})

        if (photoReducer.isUploadPhoto) {
          const photoForUpload = new FormData();
          photoForUpload.append('file', photoReducer);
          axios
            .post(
              `${API_HOST.url}/api/user/photo`,
              photoForUpload,
              {
                headers: {
                  Authorization: token,
                  'Content-Type': 'multipart/form-data',
                },
              },
            ).then(resUpload => {
              profile.profile_photo_url = `${API_HOST.url}/storage/${resUpload.data.data[0]}`
              storeData('userProfile', profile)
              navigation.reset({index: 0, routes: [{name: 'SuccesSignUp'}]});
            })
            .catch(err => {
              // notif jika gagal upload photo
              showMessage({
                message: 'Anda batal memilih photo',
                type: 'danger',
                titleStyle: {textAlign: 'center'},
              });
              navigation.reset({index: 0, routes: [{name: 'SuccesSignUp'}]});
            });
        } else {
          storeData('userProfile', profile)
          navigation.reset({index: 0, routes: [{name: 'SuccesSignUp'}]});
        }

        dispatch(setLoading(false));

        // notif jika success login
        showMessage({
          message: 'Sign-in successfully',
          type: 'success',
          titleStyle: {textAlign: 'center'},
        });
        
      })
      .catch(err => {
        dispatch(setLoading(false));
        console.error('Registrasi gagals:', err.response.data.message);
        // notif jika gagal login
        showMessage({
          message: err?.response?.data?.message || 'Ada data yang tidak valid',
          type: 'danger',
          titleStyle: {textAlign: 'center'},
        });
      });
  };

  export const signInAction = (form: Form, navigation: Navigation): ThunkResult<void> => async (dispatch) => {
    dispatch(setLoading(true))
     axios.post(`${API_HOST.url}/api/login`, form)
     .then((res) => {

       // menyimpan data token
       const token = `${res.data.data.token_type} ${res.data.data.access_token}`
       
       // menyimpan data user
      const profile = res.data.data.user;

      dispatch(setLoading(false))

        storeData('token', {value: token})
        storeData('userProfile', profile)

      
         navigation.reset({index: 0, routes: [{name: 'appMain'}]});
     })
     .catch((err) => {
         dispatch(setLoading(false))
         dispatch(setLoading(false))
         showMessage({
          message: err?.response?.data?.message || 'Ada data yang tidak valid',
          type: 'danger',
          titleStyle: {textAlign: 'center'},
        });
     })
 }