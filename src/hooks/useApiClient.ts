import axios, { type AxiosInstance } from 'axios';
import { useMemo } from 'react';
import { useAuth } from 'react-oidc-context';
import { toast } from 'react-toastify';

export const useApiClient = (): AxiosInstance => {
    const { isAuthenticated, user } = useAuth();

    const api = useMemo(() => {
        const instance = axios.create({
            baseURL: import.meta.env.VITE_BACKEND_API_URL,
            timeout: 10000,
        });

        instance.interceptors.request.use((config) => {
            if (isAuthenticated && user) {
                config.headers.Authorization = `Bearer ${user.access_token}`;
            }
            return config;
        });

        instance.interceptors.response.use(
            (response) => response,
            (error) => {
                if (error.code === 'ECONNABORTED') {
                    toast.error('⏱️ Tempo limite excedido. O servidor não respondeu.');
                } else if (error.response) {
                    const status = error.response.status;

                    if (status === 401) {
                        toast.warning('🔒 Sessão expirada. Faça login novamente.');
                        // Opcional: redirecionar para login
                    } else if (status >= 500) {
                        toast.error('💥 Erro interno do servidor. Tente novamente mais tarde.');
                    } else if (status >= 400) {
                        toast.error(`⚠️ ${error.response.data?.message || 'Requisição inválida'}`);
                    }
                } else if (error.request) {
                    toast.error('🌐 Sem resposta do servidor. Verifique sua conexão.');
                } else {
                    toast.error(`Erro: ${error.message}`);
                }

                return Promise.reject(error);
            }
        );

        return instance;
    }, [isAuthenticated, user]);

    return api;
};
