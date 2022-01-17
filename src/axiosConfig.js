import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
});

export default axiosInstance;

axiosInstance.interceptors.request.use(config => {
  config.params = {
    api_key: '89ca530b74d668933ea9c43f8c3fdb73',
  };

  config.headers = {
    'content-type': 'application/json',
  };

  return config;
});
