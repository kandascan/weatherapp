import weatherReducer from './weatherReducer';
import errorReducer from './errorReducer';
import calculatorReducer from './calculatorReducer';

import { combineReducers } from 'redux';

export default combineReducers({
    weather: weatherReducer,
    error: errorReducer,
    calculator: calculatorReducer
});