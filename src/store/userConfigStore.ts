import { create } from 'zustand';

interface UserConfig {
    theme: string;
    language: string;
    currency: string;
    locale: string;
    notificationsEnabled: boolean;
}

interface UserConfigState {
    userConfig: UserConfig | null;
    setUserConfig: (config: UserConfig) => void;
}

export const useUserConfigStore = create<UserConfigState>((set) => ({
    userConfig: null,
    setUserConfig: (config) => set({ userConfig: config }),
}));
