import React from 'react'
import ReactDOM from 'react-dom';
import Board from './component/board';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import allReducers from './reducers/index'

const store = createStore(allReducers);

ReactDOM.render(<Provider store={store}><Board/></Provider>,
    document.getElementById('root'));


