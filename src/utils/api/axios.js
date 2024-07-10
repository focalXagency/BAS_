import axios from 'axios'

let baseURL="http://127.0.0.1:8000";

// Create an Axios instance
const axiosPublic = axios.create({
    baseURL,
    }
    );

// Add a request interceptor to dynamically set the Content-Type header
axiosPublic.interceptors.request.use(
    (config) => {
        // Check a condition to determine the desired Content-Type
        // config.headers.lang = langHelper.getLang();

        return config;
    },
    (error) => {
        // return Promise.reject(error);
        console.log(Promise.reject(error));
    }
);

axiosPublic.interceptors.response.use(
    (response) => {
        return response;
    },
    
    (error) => {
    

        return Promise.reject(error);
    }
);

export {axiosPublic}