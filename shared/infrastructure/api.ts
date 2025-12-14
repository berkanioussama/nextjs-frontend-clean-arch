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
        console.error('Request Error:', error);
        return Promise.reject(error);
    });

    // Add response interceptor
    instance.interceptors.response.use(response => {
        return response;
    }, error => {
        console.error('Response Error:', {
            status: error.response?.status,
            data: error.response?.data,
            message: error.response?.data.message,
        });
        return Promise.reject(error);
    });

    return instance
}