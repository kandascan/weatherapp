import weatherReducer from './weatherReducer';
import errorReducer from './errorReducer';

import { combineReducers } from 'redux';

export default combineReducers({
    weather: weatherReducer,
    error: errorReducer
});