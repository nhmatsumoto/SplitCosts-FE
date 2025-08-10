import { createRoot } from 'react-dom/client';
import { AuthProvider } from 'react-oidc-context';
import oidcConfig from './configuration/oidcConfig';
import AppRoutes from './routes/AppRoutes';
import './global.css';
import { UserInitializer } from './configuration/UserInitializer';

createRoot(document.getElementById('root')!).render(
    <AuthProvider {...oidcConfig}>
        <UserInitializer />
        <AppRoutes />
    </AuthProvider>
);
