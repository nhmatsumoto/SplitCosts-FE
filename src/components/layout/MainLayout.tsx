import type { ReactNode } from 'react';
import Sidebar from './Sidebar';
import { ToastContainer } from 'react-toastify';

export const MainLayout = ({ children }: { children: ReactNode }) => {
    return (
        <div className="h-screen flex overflow-hidden">
            <Sidebar />
            <div className="flex flex-col flex-1 overflow-auto">
                <main className="flex-grow p-4">
                    {children}
                </main>
                <ToastContainer position="top-right" autoClose={5000} />
            </div>
        </div>
    );
};
