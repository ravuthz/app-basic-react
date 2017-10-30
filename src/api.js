import axios from 'axios';

// export const login = "/api/Users/login";
export const login = "/api/auth";
export const register = "/api/users";
export const confirm = "/api/auth/confirmation";
export const url = "http://all-node-ravuthz.c9users.io:8080";

export default {
    user: {
        login: (credentials) => {
            console.log("user.login");
            return axios.post(url + login, {credentials}).then(res => res.data.user);
        },
         register: (user) => {
            console.log("user.register");
            return axios.post(url + register, {user}).then(res => res.data.user);
         },
         confirm: (token) => {
            console.log("user.confirm");
            return axios.post(url + confirm, {token}).then(res => res.data.user);
         }
    }
}