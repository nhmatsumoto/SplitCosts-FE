import type { ReactNode } from 'react';
import Header from './Header';
import Footer from './Footer';
import { ToastContainer } from 'react-toastify';

export const MainLayout = ({ children }: { children: ReactNode }) => {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-grow">{children}</main>
            <ToastContainer position="top-right" autoClose={5000} />
            <Footer />
        </div>
    );
};
