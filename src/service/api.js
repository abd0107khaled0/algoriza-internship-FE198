import axios from "axios";

let baseURL = import.meta.env.VITE_API;
let headers = {
    'X-RapidAPI-Key': '40d1e82a1bmsh5484412d3f16d4fp195421jsn89677aea99d9',
    'X-RapidAPI-Host': 'booking-com15.p.rapidapi.com'
}

const api = axios.create({
    baseURL,
    headers,
});

export default api;