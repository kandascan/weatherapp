import { GET_ERRORS, CLEAR_ERRORS } from '../actions/types';

const initialState = {
    message: null,
    isShow: false
};

export default function (state = initialState, action) {
    switch(action.type) {
        case GET_ERRORS:
            return {
                ...state,
                message: action.payload,
                isShow: true
            }
            case CLEAR_ERRORS:
                return {
                    ...state,
                    message: null,
                    isShow: false
                }
        default:
            return state;
    }
}