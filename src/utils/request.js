import axios from 'axios';

const http = axios.create({
    baseURL: '/api',
    timeout:50000, //超时时长
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
    },
});

export default http;