import api from '../api';
import { USER_LOGGED_IN, USER_LOGGED_OUT } from '../types';

export const userLoggedIn = user => ({
  type: USER_LOGGED_IN,
  user,
});

export const userLoggedOut = () => ({
  type: USER_LOGGED_OUT,
});

export const login = credentails => dispatch =>
  api.user.login(credentails).then((user) => {
    console.log('credentails: ', credentails);
    localStorage.setItem('token', user.token);
    dispatch(userLoggedIn(user));
  });

export const logout = () => (dispatch) => {
  localStorage.removeItem('token');
  dispatch(userLoggedOut());
};

export const register = data => dispatch =>
  api.user.register(data).then((user) => {
    console.log('data: ', data);
    localStorage.setItem('token', user.token);
    dispatch(userLoggedIn(user));
  });

export const confirm = token => dispatch =>
  api.user.confirm(token).then((user) => {
    console.log('token: ', token);
    localStorage.setItem('token', user.token);
    dispatch(userLoggedIn(user));
  });

export const forgotPassword = ({ email }) => () => api.user.forgotPassword(email);

export const validateToken = token => () => api.user.validateToken(token);

export const resetPassword = token => () => api.user.resetPassword(token);
