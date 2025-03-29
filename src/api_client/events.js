import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'http://localhost:8080/api',
  withCredentials : false,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const getAllEvents = () => apiClient.get('/events');