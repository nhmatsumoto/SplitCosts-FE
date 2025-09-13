import { createSplitCostAPIClient } from './client';

export const userSettingsApi = (accessToken?: string) => {
    
    const api = createSplitCostAPIClient(accessToken);

    return {
        getById: async (id: string) => {
            const response = await api.get(`/userSettings/${id}`);
            return response.data;
        },

        update: async (id: string, payload: any) => {
            const response = await api.put(`/userSettings/${id}`, payload);
            return response.data;
        }
    };
};

export default userSettingsApi;
