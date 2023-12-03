import axios from "axios";

let baseURL = import.meta.env.VITE_API;
let headers = {
    'X-RapidAPI-Key': '34d490b85fmshbbb398350aac3a9p16899ejsn81aca006c7e9',
    'X-RapidAPI-Host': 'booking-com15.p.rapidapi.com'
}

const api = axios.create({
    baseURL,
    headers,
});

export default api;