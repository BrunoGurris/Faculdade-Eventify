import axios from 'axios'

const token = localStorage.getItem('_token')

const api = axios.create({
    baseURL: 'http://localhost:8000/api',
    headers: {'Authorization': 'Bearer ' + token},
    timeout: 10000
});

export default api