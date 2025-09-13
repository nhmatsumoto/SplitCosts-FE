import React from 'react';
import { useAuth } from 'react-oidc-context';
import Login from './Login';
import Loader from './Loader';

interface ProtectedRouteProps {
    children: React.ReactNode;
}

const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
    const { isAuthenticated, isLoading } = useAuth();

    if (isLoading) {
        return <Loader message='Redirecionando...' />;
    }

    if (isAuthenticated) {
        return <>{children}</>;
    }

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-50 to-white p-6">
            <div className="w-full max-w-md bg-white p-10 rounded-3xl shadow-2xl border border-gray-200 flex flex-col items-center gap-6">
                <h2 className="text-2xl md:text-3xl font-extrabold text-center text-gray-800">
                    É necessário fazer login para acessar esta página.
                </h2>
                <p className="text-gray-500 text-center">
                    Faça login para continuar e acessar todos os recursos do SplitCosts.
                </p>
                <Login />
            </div>
        </div>
    );
};

export default ProtectedRoute;