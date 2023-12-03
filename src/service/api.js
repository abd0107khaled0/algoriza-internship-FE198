import axios from "axios";

let baseURL = import.meta.env.VITE_API;
let headers = {
    'X-RapidAPI-Key': 'fb4c56344fmshd391fa29b2603cdp1bf44ejsn7001366c0465',
    'X-RapidAPI-Host': 'booking-com15.p.rapidapi.com'
}

const api = axios.create({
    baseURL,
    headers,
});

export default api;