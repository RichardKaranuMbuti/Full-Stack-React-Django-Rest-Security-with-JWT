import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://127.0.0.1:8000',  // Adjust this to match your Django server URL
  withCredentials: true,
});

instance.interceptors.request.use(function (config) {
  const csrfToken = document.cookie.split('; ').find(row => row.startsWith('csrftoken='))?.split('=')[1];
  if (csrfToken) {
    config.headers['X-CSRFToken'] = csrfToken;
  }
  return config;
}, function (error) {
  return Promise.reject(error);
});

export default instance;