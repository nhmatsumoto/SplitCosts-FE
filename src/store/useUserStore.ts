import { create } from 'zustand';

interface UserSettings {
    userId: string;
    username: string;
    email?: string;
    roles: string[];
    residenceId?: string;
    otherEntities?: Record<string, any>;
    [key: string]: any; // Allow indexing with string keys
}

interface UserStore {
    settings: UserSettings | null;
    setSettings: (settings: UserSettings) => void;
    clearSettings: () => void;
    loadSettings: (accessToken: string, userId: string) => Promise<void>;
    hasRole: (role: string) => boolean;
    getSetting: (key: string) => any;
}

export const useUserStore = create<UserStore>((set, get) => ({
    settings: null,

    setSettings: (settings) => set({ settings }),

    clearSettings: () => set({ settings: null }),

    loadSettings: async (accessToken: string, userId: string) => {
        try {
            // Chamada à API usando o userId
            const res = await fetch(`/api/user/settings/${userId}`, {
                headers: { Authorization: `Bearer ${accessToken}` },
            });
            if (!res.ok) throw new Error('Erro ao carregar configurações do usuário');
            const data: UserSettings = await res.json();
            set({ settings: data });
        } catch (err) {
            console.error('Erro ao carregar configurações do usuário:', err);
            set({ settings: null });
        }
    },

    hasRole: (role) => {
        const s = get().settings;
        return s ? s.roles.includes(role) : false;
    },

    getSetting: (key) => {
        const s = get().settings;
        return s ? s[key] : undefined;
    },
}));
