import { useEffect, useState } from 'react';
import { useAuth } from 'react-oidc-context';
import { useUserStore } from './store/useUserStore';

interface AppInitializerProps {
    children: React.ReactNode;
}

const AppInitializer = ({ children }: AppInitializerProps) => {
    const auth = useAuth();
    const loadSettings = useUserStore(state => state.loadSettings);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchSettings = async () => {
            if (!auth.isAuthenticated || !auth.user?.access_token) {
                setLoading(false);
                return;
            }

            try {
                const userId = auth.user.profile?.sub; // pega o ID do usuário do token
                await loadSettings(auth.user.access_token, userId);
            } catch (err) {
                console.error('Erro ao carregar configurações do usuário:', err);
            } finally {
                setLoading(false);
            }
        };

        fetchSettings();
    }, [auth.isAuthenticated, auth.user?.access_token, auth.user?.profile.sub, loadSettings]);


    if (loading) return <div>Carregando...</div>;

    return <>{children}</>;
};

export default AppInitializer;
