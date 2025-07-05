import React from 'react';
import { useAuth } from 'react-oidc-context';
import Login from './Login';
import { MainLayout } from './layout/MainLayout';
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
    <MainLayout>
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            minHeight: '300px',
            padding: '20px',
            textAlign: 'center',
            }}
        >
            <h2>É necessário fazer login para acessar esta página.</h2>
            <Login />
        </div>
    </MainLayout>
  );
};

export default ProtectedRoute;
