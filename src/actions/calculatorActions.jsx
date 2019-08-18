import { GET_RESULT } from './types';

export const addTwoNumbers = (a, b) => dispatch => {    
    dispatch({
        type: GET_RESULT,
        payload: parseInt(a) + parseInt(b)
    });    
}

export const minusTwoNumbers = (a, b) => dispatch => {    
    dispatch({
        type: GET_RESULT,
        payload: parseInt(a) - parseInt(b)
    });    
}

export const multipleTwoNumbers = (a, b) => dispatch => {    
    dispatch({
        type: GET_RESULT,
        payload: parseInt(a) * parseInt(b)
    });    
}

export const divideTwoNumbers = (a, b) => dispatch => {    
    dispatch({
        type: GET_RESULT,
        payload: parseInt(a) / parseInt(b)
    });    
}