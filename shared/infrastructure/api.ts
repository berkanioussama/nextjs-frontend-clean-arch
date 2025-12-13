import axios from 'axios'

const DEV_BACKEND_API_URL = "http://localhost:4000/api/v1";

export async function api(token: string | null) {
    if (!token) {
        throw new Error("No token provided")
    }
    const instance = axios.create({
        baseURL: DEV_BACKEND_API_URL,
        headers: { Authorization: `Bearer ${token}` },
    })

    // Add request interceptor
    instance.interceptors.request.use(config => {
        console.log('Request:', {
            url: config.url,
            method: config.method,
            headers: config.headers,
        });
        return config;
    }, error => {
        console.error('Request Error:', error);
        return Promise.reject(error);
    });

    // Add response interceptor
    instance.interceptors.response.use(response => {
        console.log('Response:', {
            status: response.status,
            data: response.data,
        });
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