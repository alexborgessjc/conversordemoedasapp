import axios from 'axios';

const api = axios.create({
    baseURL: 'https://api.freecurrencyapi.com/v1/'
});

export default api;