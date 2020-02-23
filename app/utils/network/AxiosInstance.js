import axios from 'axios';
import {Urls} from '../values/Urls';

const instance = axios.create({
  baseURL: Urls.baseUrl,
  timeout: 60000,
  headers: {'Content-Type': 'application/x-www-form-urlencoded'},
});

instance.interceptors.request.use(
  async config => {
    console.log(config);
    return config;
  },
  error => {
    console.log('interceptor error ', error);
    return Promise.reject(error);
  },
);

export default instance;
