import axios,  from "axios";

const baseURL:string =``;

export const $auth = axios.create({
    baseURL,
    headers: {
        'Content-Type': 'application/json',
    },
});