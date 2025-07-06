import Home from '../pages/public/Home';
import Dashboard from '../pages/private/Dashboard';
import { MainLayout } from '../components/layout/MainLayout';
import ProtectedRoute from '../components/ProtectedRoute';
import type { ReactNode } from 'react';
import Residence from '../pages/private/Residence';
import RegisterUser from '../pages/public/RegisterUser';

export interface AppRoute {
  path: string;
  name: string;
  element: ReactNode;
  private?: boolean;
}

export const appRoutes: AppRoute[] = [
  {
    path: '/',
    name: 'Home',
    element: (
      <MainLayout>
        <Home />
      </MainLayout>
    ),
  },
  {
    path: '/register',
    name: 'Register',
    element: (
      <MainLayout>
        <RegisterUser />
      </MainLayout>
    ),
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    element: (
      <ProtectedRoute>
        <MainLayout>
          <Dashboard />
        </MainLayout>
      </ProtectedRoute>
    ),
    private: true,
  },
  {
    path: '/residence',
    name: 'Residence',
    element: (
      <ProtectedRoute>
        <MainLayout>
          <Residence />
        </MainLayout>
      </ProtectedRoute>
    ),
    private: true,
  },
];