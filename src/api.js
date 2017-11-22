import axios from 'axios';

export const url = 'http://all-node-ravuthz.c9users.io:8080';
// export const url = 'https://node-api-bookmarker.herokuapp.com';
// export const url = 'https://sails-oauth-two-api.herokuapp.com';
export const login = '/api/auth';
export const register = '/api/users';
export const confirm = '/api/auth/confirmation';
export const resetRequest = '/api/auth/reset_password_request';
export const reset = '/api/auth/reset_password';
export const validate = '/api/auth/validate_token';
export const apiPost = `${url}/api/posts`;

export default {
  user: {
    login: (credentials) => {
      console.log('user.login');
      return axios.post(url + login, { credentials }).then(res => res.data.user);
    },
    register: (user) => {
      console.log('user.register');
      return axios.post(url + register, { user }).then(res => res.data.user);
    },
    confirm: (token) => {
      console.log('user.confirm');
      return axios.post(url + confirm, { token }).then(res => res.data.user);
    },
    forgotPassword: (email) => {
      console.log('user.forgotPassword');
      return axios.post(url + resetRequest, { email });
    },
    validateToken: (token) => {
      console.log('user.validateToken');
      return axios.post(url + validate, { token });
    },
    resetPassword: (data) => {
      console.log('user.resetPassword');
      return axios.post(url + reset, { data });
    },
  },

  auth: {
    token: data => axios.post(`${url}/oauth/token`, data).then(res => res.data),
  },

  post: {
    list: () => axios.get(apiPost).then(res => res.data),
    find: id => axios.get(`${apiPost}/${id}`).then(res => res.data),
    create: data => axios.post(apiPost, { data }).then(res => res.data),
    update: (id, data) => axios.put(`${apiPost}/${id}`, { data }).then(res => res.data),
    delete: id => axios.delete(`{$apiPost}/${id}`).then(res => res.data),
  },
};
