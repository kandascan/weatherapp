import { GET_ERRORS, CLEAR_ERRORS } from './types';

export const setError = (error) => dispatch => {    
    dispatch({
        type: GET_ERRORS,
        payload: error
    });    
}

export const clearError = () => dispatch => {
    dispatch({
        type: CLEAR_ERRORS
    })
}