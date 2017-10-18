import axios from 'axios';

// export const login = "/api/Users/login";
export const login = "/api/auth";
export const url = "http://all-node-ravuthz.c9users.io:8080";

export default {
    user: {
        login: (credentials) => axios.post(url + login, {credentials}).then(res => res.data.user),
    }
}