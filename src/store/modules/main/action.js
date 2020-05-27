import createAction from "redux-actions";
import type from './type'

export const login = createAction(
    type.LOGIN, accountId => accountId
);
