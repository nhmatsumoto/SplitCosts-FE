import type { Expense } from '../types/Expense';
import type { Result } from '../types/Result';
import { createSplitCostAPIClient } from './client';

export const createExpenseApi = (accessToken?: string) => {

    const api = createSplitCostAPIClient(accessToken);

    return {
        getAll: async (): Promise<Result<Expense[]>> => {
            const response = await api.get('/expense');
            return response.data;
        },

        getById: async (id: string): Promise<Result<Expense>> => {
            const response = await api.get(`/expense/${id}`);
            return response.data;
        },

        getCategories: async (): Promise<Result<string[]>> => {
            const response = await api.get('/expense/categories');
            return response.data;
        },

        create: async (payload: any): Promise<Result<Expense>> => {
            const response = await api.post('/expense', payload);
            return response.data;
        },

        update: async (id: string, payload: any): Promise<Result<Expense>> => {
            const response = await api.put(`/expense/${id}`, payload);
            return response.data;
        },

        delete: async (id: string): Promise<Result<null>> => {
            const response = await api.delete(`/expense/${id}`);
            return response.data;
        }
    };
};

export default createExpenseApi;
