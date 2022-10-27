import axios from 'axios'

const token = localStorage.getItem('_token')

const api = axios.create({
    baseURL: 'https://api.systemgurris.shop/api',
    headers: {'Authorization': 'Bearer ' + token},
    timeout: 10000
});

export default api