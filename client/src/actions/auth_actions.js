import axios from 'axios';
import {
    AUTH_USER,
    AUTH_ERROR,
    UNAUTH_USER
} from './types';

const ROOT_URL = 'http://localhost:3050';

export function signinUser({ email, password }, callback) {
    return function(dispatch) {
        axios.post(`${ROOT_URL}/signin`, { email, password })
            .then(response => {
                dispatch({ type: AUTH_USER });
                localStorage.setItem('token', response.data.token);
                callback();
            })
            .catch(() => {
                dispatch(authError('Bad Login Info'));
            });
    }
}

export function signoutUser() {
    localStorage.removeItem('token');
    return { type: UNAUTH_USER };
}

export function signupUser({ email, username, password }, callback) {
    return function(dispatch) {
        axios.post(`${ROOT_URL}/signup`, { email, username, password })
            .then(response => {
                dispatch({ type: AUTH_USER });
                localStorage.setItem('token', response.data.token);
                callback();
            })
            .catch((error) => {
                dispatch(authError(error.response.data.error));
            })
    }
}

export function authError(error) {
    return {
        type: AUTH_ERROR,
        payload: error
    }
}
