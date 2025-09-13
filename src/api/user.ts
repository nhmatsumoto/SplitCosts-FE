import { createSplitCostAPIClient } from './client';

export const createUserApi = (accessToken?: string) => {

    const api = createSplitCostAPIClient(accessToken);

    return {
        getAll: async () => {
            const response = await api.get('/user');
            return response.data;
        },

        getById: async (id: string) => {
            const response = await api.get(`/user/${id}`);
            return response.data;
        },

        getCategories: async () => {
            const response = await api.get('/user/categories');
            return response.data;
        },

        create: async (payload: any) => {
            const response = await api.post('/user/register', payload);
            return response.data;
        },

        update: async (id: string, payload: any) => {
            const response = await api.put(`/user/${id}`, payload);
            return response.data;
        },

        delete: async (id: string) => {
            const response = await api.delete(`/user/${id}`);
            return response.data;
        }
    };
};

export default createUserApi;
