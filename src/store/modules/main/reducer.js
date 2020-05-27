import {handleActions} from 'redux-actions'
import type from './type';

const initialState = {
    accountId : null,
}

export default handleActions({
        [type.LOGIN] : (state, action) => ({
            ...state,
            accountId: action.payload,
        })
    }, initialState
)
