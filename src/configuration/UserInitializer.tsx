import { useEffect } from 'react';
import { useAuth } from 'react-oidc-context';
import { useUserConfigStore } from '../store/userConfigStore';


export const UserInitializer = () => {
    const auth = useAuth();
    const setUserConfig = useUserConfigStore((state) => state.setUserConfig);

    useEffect(() => {
        if (auth.isAuthenticated && auth.user?.access_token) {
            fetch('/api/user/settings', {
                headers: {
                    Authorization: `Bearer ${auth.user.access_token}`,
                },
            })
                .then((res) => res.json())
                .then(setUserConfig)
                .catch(console.error);
        }
    }, [auth.isAuthenticated, auth.user?.access_token, setUserConfig]);

    return null;
};
