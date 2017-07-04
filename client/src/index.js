import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import { AUTH_USER } from './actions/types';

import App from './components/app';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const token = localStorage.getItem('token');
if (token) {
    store.dispatch({ type: AUTH_USER })
}

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
, document.getElementById('app'));
