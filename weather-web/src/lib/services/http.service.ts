import axios from 'axios';

const http = axios.create({
  baseURL: 'https://localhost:5001',
  headers: {
    "Content-Type": "application/json",
  },
});

http.interceptors.request.use((v) => v, (err) => { throw new Error(err) });

export default http;