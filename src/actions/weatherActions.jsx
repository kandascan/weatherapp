import axios from 'axios';
import { GET_CURRENT_WEATHER, CLEAR_WEATHER } from './types';
import { setError, clearError } from './errorActions';

const API_KEY = 'd9f3d8b3e6b374637a36660b1efc332e';

export const getCurrentWeather = (city) => dispatch => {
    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&mode=json&units=metric&appid=${API_KEY}`)
    .then(res => {
        dispatch(clearError());
        dispatch({
            type: GET_CURRENT_WEATHER,
            payload: res.data
        })
    })
    .catch(err => {    
        dispatch(setError('Cannot get weather for entered city, please check if you not did any mispel'));
        dispatch(clearWeather());
    })
}

export const clearWeather = () => dispatch => {
    dispatch({
        type: CLEAR_WEATHER
    })
}