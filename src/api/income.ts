import { useApiClient } from "../hooks/useApiClient";

const api = useApiClient();

export const IncomeApi = {

    getAll: async () => {
        const response = await api.get('/income');
        return response.data;
    },

    getById: async (id: string) => {
        const response = await api.get(`/income/${id}`);
        return response.data;
    },

    create: async (payload: any) => {
        const response = await api.post('/income', payload);
        return response.data;
    },

    update: async (id: string, payload: any) => {
        const response = await api.put(`/income/${id}`, payload);
        return response.data;
    },

    delete: async (id: string) => {
        const response = await api.delete(`/income/${id}`);
        return response.data;
    }
};

export default IncomeApi;