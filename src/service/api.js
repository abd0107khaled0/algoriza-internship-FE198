import axios from "axios";
import { useCounterStore } from "./../store/index.js";

let baseURL = import.meta.env.VITE_API;
let headers = {
    'X-RapidAPI-Key': '7ae494a24fmsh0713be035b78a0ap1eeb98jsn328a90a49cbc',
    'X-RapidAPI-Host': 'booking-com15.p.rapidapi.com'
}

const api = axios.create({
    baseURL,
    headers,
});

api.interceptors.request.use((config) => {
    // Append lang query param to all requests.
    // Set header auth.
    // var token = useCounterStore.state.token;
    // if (token) {
    //     config.headers.Authorization = token;
    // }

    console.log(config)
    return config;
});

api.interceptors.response.use(
    (response) => {
        // Hide loading indicator.
        // useCounterStore.dispatch("SET_LOADING", { name: "ui", value: false });
        return response;
    },
    (error) => {
        console.log(error)

        return Promise.reject(error);
    }
);

export default api;
