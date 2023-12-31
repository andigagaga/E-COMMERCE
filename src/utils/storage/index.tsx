import AsyncStorage from '@react-native-async-storage/async-storage';
import { showMessage } from 'react-native-flash-message';

export const storeData = async (storageKey: any ,value: any) => {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem(storageKey, jsonValue);
    } catch (e) {
        showMessage({
            message: 'Gagal menyimpan di local storage',
            type: 'danger',
            titleStyle: { textAlign: 'center' },
          });
    }
  };

  export const getData = async (storageKey: string) => {
    try {
      const jsonValue = await AsyncStorage.getItem(storageKey);
      return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch (e) {
        showMessage({
            message: 'Gagal mengambil data di local storage',
            type: 'danger',
            titleStyle: { textAlign: 'center' },
          });
    }
  };