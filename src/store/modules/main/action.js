import {createAction} from "redux-actions";
import type from './type'

export const loginSuccess = createAction(
    type.LOGIN_SUCCESS, accountId => accountId
);

export const loginFail = createAction(
    type.LOGIN_FAIL, errorMessage => errorMessage
)

