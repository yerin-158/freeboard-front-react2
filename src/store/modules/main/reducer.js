import {handleActions} from 'redux-actions'
import type from './type';

const initialState = {
    accountId : null,
    isLogged : false,
    errorMessage : null
}

export default handleActions({
        [type.LOGIN_SUCCESS] : (state, action) => ({
            ...state,
            accountId: action.payload,
            isLogged: true
        }),
        [type.LOGIN_FAIL] : (state, action) => ({
            ...state,
            isLogged: false,
            errorMessage: action.payload
        })
    }, initialState
);
