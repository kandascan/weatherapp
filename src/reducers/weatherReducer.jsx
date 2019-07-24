import { GET_CURRENT_WEATHER, CLEAR_WEATHER } from '../actions/types';

const initialState = {
    currentWeather: {}
};

export default function (state = initialState, action) {
    switch(action.type) {
        case GET_CURRENT_WEATHER:
            return {
                ...state,
                currentWeather: action.payload
            }
        case CLEAR_WEATHER:
            return {
                ...state,
                currentWeather: {}
            }
        default:
            return state;
    }
}