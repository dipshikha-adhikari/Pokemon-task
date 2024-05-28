import Axios, { InternalAxiosRequestConfig } from 'axios'
import { API_BASE_URL } from '../config'

function authRequestInterceptor(config: InternalAxiosRequestConfig) {
    if (config.headers) {
        config.headers.Accept = 'application/json'
    }
    return config
}

export const api = Axios.create({
    baseURL: API_BASE_URL,
})

api.interceptors.request.use(authRequestInterceptor)
api.interceptors.response.use(
    (response) => {
        return response
    },
    (error) => {
        return Promise.reject(error)
    }
)
