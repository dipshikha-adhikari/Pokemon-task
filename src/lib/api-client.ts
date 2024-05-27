import Axios, { InternalAxiosRequestConfig } from 'axios';


function authRequestInterceptor(config: InternalAxiosRequestConfig) {
    if (config.headers) {
        config.headers.Accept = 'application/json';
    }
    return config;
}

export const api = Axios.create({
    baseURL: import.meta.env.ASTRO_APP_API_URL,
});

api.interceptors.request.use(authRequestInterceptor);
api.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
        return Promise.reject(error);
    },
);