import Dashboard from '../pages/private/Dashboard';
import { MainLayout } from '../components/layout/MainLayout';
import ProtectedRoute from '../components/ProtectedRoute';
import type { ReactNode } from 'react';
import RegisterUser from '../pages/public/RegisterUser';
import Incomes from '../pages/private/Incomes';
import Expenses from '../pages/private/Expenses';
import Members from '../pages/private/Members';
import Settings from '../pages/private/Settings';

export interface AppRoute {
    path: string;
    name: string;
    element: ReactNode;
    private?: boolean;
}

export const appRoutes: AppRoute[] = [
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
        path: '/incomes',
        name: 'Incomes',
        element: (
            <ProtectedRoute>
                <MainLayout>
                    <Incomes />
                </MainLayout>
            </ProtectedRoute>
        ),
        private: true,
    },
    {
        path: '/expenses',
        name: 'Expenses',
        element: (
            <ProtectedRoute>
                <MainLayout>
                    <Expenses />
                </MainLayout>
            </ProtectedRoute>
        ),
        private: false,
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
        path: '/members',
        name: 'Members',
        element: (
            <ProtectedRoute>
                <MainLayout>
                    <Members />
                </MainLayout>
            </ProtectedRoute>
        ),
        private: true,
    },
    {
        path: '/settings',
        name: 'Settings',
        element: (
            <ProtectedRoute>
                <MainLayout>
                    <Settings />
                </MainLayout>
            </ProtectedRoute>
        ),
        private: true,
    },
    {
        path: '/',
        name: 'Settings',
        element: (
            <ProtectedRoute>
                <MainLayout>
                    <Settings />
                </MainLayout>
            </ProtectedRoute>
        ),
        private: true,
    },
];