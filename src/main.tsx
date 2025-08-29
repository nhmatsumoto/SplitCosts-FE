import { createRoot } from 'react-dom/client';
import { AuthProvider } from 'react-oidc-context';
import oidcConfig from './configuration/oidcConfig';
import AppRoutes from './routes/AppRoutes';
import './global.css';
import AppInitializer from './AppInlitializer';


createRoot(document.getElementById('root')!).render(
    <AuthProvider {...oidcConfig}>
        <AppInitializer>
            <AppRoutes />
        </AppInitializer>
    </AuthProvider>
);
