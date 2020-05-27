import {combineReducers, createStore} from "redux";

import boardReducer from './modules/board/reducer'
import mainReducer from './modules/main/reducer'

const rootReducer = combineReducers({
    boardReducer,
    mainReducer
});

export default rootReducer;
