import React from "react";
import ReactDOM from 'react-dom';

import {createStore} from 'redux';
import rootReducer from './store/rootReducer';

import {Provider} from 'react-redux';

import './index.css';
import MainContainer from './containers/MainContainer';
import Main from './components/Main';


const store = createStore(rootReducer);
console.log(store.getState());

ReactDOM.render(
    <Provider store={store}>
        <MainContainer/>
    </Provider>,
    document.getElementById('root')
);

