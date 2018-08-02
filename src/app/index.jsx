import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import allReducers from './reducers/index'
import thunkMiddleware from 'redux-thunk';
import reduxMulti from 'redux-multi'
import App from './app';

const store = createStore(allReducers,applyMiddleware(
    thunkMiddleware,
    reduxMulti
));

render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('root')
);