import Home from '../pages/public/Home';
import Dashboard from '../pages/private/Dashboard';
import { MainLayout } from '../components/layout/MainLayout';
import ProtectedRoute from '../components/ProtectedRoute';
import type { ReactNode } from 'react';

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
    path: '/private',
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
];