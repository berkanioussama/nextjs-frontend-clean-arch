'use server'
import axios from 'axios'
import { auth } from "@clerk/nextjs/server";

const DEV_BACKEND_API_URL = "http://localhost:4000/api/v1";

export async function api() {
    const { getToken } = await auth()
    const token = await getToken()
    const instance = axios.create({
        baseURL: DEV_BACKEND_API_URL,
        headers: { Authorization: `Bearer ${token}` },
    })

    // Add request interceptor
    instance.interceptors.request.use(config => {
        return config;
    }, error => {
        return Promise.reject(error);
    });

    // Add response interceptor
    instance.interceptors.response.use(response => {
        return response;
    }, error => {
        if (error.response?.data?.error) {
            const customError = new Error(error.response.data.error);
            return Promise.reject(customError);
        }
        return Promise.reject(error);
    });

    return instance
}