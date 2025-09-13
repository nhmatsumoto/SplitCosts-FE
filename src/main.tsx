import { createRoot } from 'react-dom/client';
import { AuthProvider } from 'react-oidc-context';
import oidcConfig from './configuration/oidcConfig';
import AppRoutes from './routes/AppRoutes';
import './global.css';
import AppInitializer from './AppInlitializer';
import { ToastContainer } from 'react-toastify';


createRoot(document.getElementById('root')!).render(
    <AuthProvider {...oidcConfig}>
        <AppInitializer>
            <AppRoutes />
            <ToastContainer />
        </AppInitializer>
    </AuthProvider>
);
