import axios from "axios"
import { API_HOST } from "../../config"

export const getFoodData = () => (dispatch:any) => {
    axios.get(`${API_HOST.url}/api/food`)
    .then((res) => {
        // console.log('res food', res.data.data.data)
        dispatch({type: 'SET_FOOD', value: res.data.data.data})
    })
    .catch((err) => {
        console.log('data failded', err)
    })
}

export const getFoodDataByTypes = (types: any) => (dispatch:any) => {
    axios.get(`${API_HOST.url}/api/food?types=${types}`)
    .then((res) => {
        if(types === 'New_food') {
            dispatch({type: 'SET_NEW_TASTE', value: res.data.data.data})
        }
        if(types === 'Popular') {
            dispatch({type: 'SET_POPULAR', value: res.data.data.data})
        }
        if(types === 'Recommended') {
            dispatch({type: 'SET_RECOMMENDED', value: res.data.data.data})
        }
    })
    .catch((err) => {
        console.log('data failded', err)
    })
}