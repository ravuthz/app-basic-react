import api from '../api';
import { USER_LOGGED_IN, USER_LOGGED_OUT } from '../types';

export const userLoggedIn = (user) => ({
    type: USER_LOGGED_IN,
    user
});

export const userLoggedOut = () => ({
    type: USER_LOGGED_OUT
});

export const login = (credentails) => (dispatch) => 
    api.user.login(credentails).then(user => {
        console.log("credentails: ", credentails);
        localStorage.setItem('token', user.token);
        dispatch(userLoggedIn(user));
    });
    
export const logout = () => (dispatch) => {
    localStorage.removeItem('token')
    dispatch(userLoggedOut());
}