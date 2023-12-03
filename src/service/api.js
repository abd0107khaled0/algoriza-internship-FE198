import axios from "axios";

let baseURL = import.meta.env.VITE_API;
let headers = {
    'X-RapidAPI-Key': '53443fe064msh63468880d945046p172bd1jsn25d26e892c9f',
    'X-RapidAPI-Host': 'booking-com15.p.rapidapi.com'
}

const api = axios.create({
    baseURL,
    headers,
});

export default api;