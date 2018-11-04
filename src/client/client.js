// Startup point for the client side application
import React from 'react';
import ReactDom from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import Routes from './routes';
import {createStore, applyMiddleWare} from "redux";
import thunk from 'react-thunk';
import {Provider} from 'react-redux';

const store = createStore(reducers, {}, applyMiddleWare(thunk));

ReactDom.hydrate(
    <Provider store={store}>
        <BrowserRouter>
            <Routes/>
        </BrowserRouter>
    </Provider>
    , document.querySelector('#root'));