import axios from 'axios';
import {API_HOST} from '../../config';
import {getData} from '../../utils/storage';

export const getOrders = () => (dispatch: any) => {
  getData('token').then(resToken => {
    axios
      .get(`${API_HOST.url}/api/transaction`, {
        headers: {
          Authorization: resToken.value,
        },
      })
      .then(res => {
        // console.log('get orders', res.data);
        // untuk ambil list ordernya saja
        dispatch({type: 'SET_ORDER', value: res.data.data.data});
      })
      .catch(err => {
        console.log('err', err);
      });
  });
};

export const getInProgress = () => (dispatch: any) => {
  getData('token').then(resToken => {
    axios
      .all([
        axios.get(`${API_HOST.url}/api/transaction?status=PENDING`, {
          headers: {
            Authorization: resToken.value,
          },
        }),
        axios.get(`${API_HOST.url}/api/transaction?status=SUCCESS`, {
          headers: {
            Authorization: resToken.value,
          },
        }),
        axios.get(`${API_HOST.url}/api/transaction?status=ON_DELIVERY`, {
          headers: {
            Authorization: resToken.value,
          },
        }),
      ])
      .then(
        axios.spread((res1, res2, res3) => {
          // variabel data [PENDING, SUCCESS, ON_DELIVERY]
          const pending = res1.data.data.data;
          const succes = res2.data.data.data;
          const onDelivery = res3.data.data.data;

          // untuk ambil list ordernya saja
          dispatch({type: 'SET_IN_PROGRESS', value: [...pending, ...succes, ...onDelivery],});
        }),
      )
      .catch(err => {
        console.log('err in progress', err);
      });
  });
};

export const getPastOrders = () => (dispatch: any) => {
  getData('token').then(resToken => {
    axios.all([
      axios
      .get(`${API_HOST.url}/api/transaction?status=CANCELLED`, {
        headers: {
          Authorization: resToken.value,
        },
      }),
      axios
      .get(`${API_HOST.url}/api/transaction?status=DELIVERED`, {
        headers: {
          Authorization: resToken.value,
        },
      })
    ])
    
      .then(axios.spread((res1, res2) => {
        const cancellled = res1.data.data.data
        const delivered = res2.data.data.data

          // untuk ambil list ordernya saja
          dispatch({type: 'SET_PAST_ORDERS', value: [...cancellled, ...delivered]});
        })
      )
      .catch(err => {
        console.log('err in get pastvprogress', err);
      });
  });
};
