import axios from 'axios';
import { useAuth } from 'react-oidc-context';

export const createApiClient = () => {

  const { isAuthenticated, user } = useAuth();
  
  const api = axios.create({
    baseURL: import.meta.env.VITE_BACKEND_API_URL
  });

  api.interceptors.request.use((config) => {
    if (isAuthenticated && user) {
      config.headers.Authorization = `Bearer ${user.access_token}`;
    }
    return config;
  });

  api.interceptors.response.use(
    (response) => response,
    (error) => {
        if (error.code === 'ECONNABORTED') {
            alert('Tempo limite excedido. O servidor não respondeu.');
        } else if (error.response) {
        const status = error.response.status;
        if (status === 503 || status === 500) {
            alert('Servidor indisponível no momento. Tente novamente mais tarde.');
        }
        } else if (error.request) {
            alert('Servidor fora do ar ou rede indisponível.');
        } else {
            alert(error.message);
        }
        
        return Promise.reject(error);
    }
  );

  return api;
};
