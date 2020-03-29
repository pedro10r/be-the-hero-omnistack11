import axios from 'axios';

const api = axios.create({
  baseURL: 'http://192.168.0.111:3333', // IP da rede para rodar o APP com expo
});

export default api;
