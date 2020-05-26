import {combineReducers, createStore} from "redux";

import boardReducer from './modules/board/reducer'

const rootReducer = combineReducers({
    boardReducer
});

export default rootReducer;
