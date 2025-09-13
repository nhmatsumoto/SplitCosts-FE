import type { ReactNode } from 'react';
import Sidebar from './Sidebar';
import Footer from './Footer';

export const MainLayout = ({ children }: { children: ReactNode }) => {
    return (
        <div className="h-screen flex bg-gray-50">
            <Sidebar />
            <div className="flex flex-col flex-1 overflow-hidden">
                <main className="flex-1 p-6 md:p-8 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100 transition-all">
                    {children}
                </main>
                <Footer />
            </div>
        </div>
    );
};
