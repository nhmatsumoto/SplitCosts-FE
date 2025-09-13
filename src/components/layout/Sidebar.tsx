import { useState } from 'react';
import { useAuth } from 'react-oidc-context';
import { PiggyBank, Menu, X } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import NavLinks from './NavLinks';
import { motion } from "framer-motion";

const Sidebar = () => {
    const auth = useAuth();
    const [open, setOpen] = useState(false);
    const toggleSidebar = () => setOpen(!open);
    const closeSidebar = () => setOpen(false);
    const { t } = useTranslation();

    const { user } = useAuth();
    const username = user?.profile.email;

    return (
        <>
            {/* Botão Mobile */}
            <button
                className="fixed top-4 right-4 z-50 p-2 rounded-lg bg-sky-500 shadow-md text-gray-700 hover:bg-sky-100 transition md:hidden"
                onClick={toggleSidebar}
                aria-label="Abrir/fechar menu lateral"
            >
                {open ? <X size={24} className="text-white"/> : <Menu size={24} className="text-white"/>}
            </button>

            {/* Sidebar */}
            <aside
                className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg border-r border-gray-200 text-gray-800 transform transition-transform duration-300 z-40 flex flex-col
                    ${open ? 'translate-x-0' : '-translate-x-full'}
                    md:translate-x-0 md:relative md:w-64`}
            >
                {/* Cabeçalho */}
                <div className="flex flex-col p-6 border-b border-gray-200">
                    <div className="flex items-center gap-2 text-sm font-bold text-gray-900">
                        <PiggyBank size={100} className="text-blue-600" />
                        <span>{t('title')}</span>
                    </div>

                    {username && (
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, ease: "easeOut" }}
                            className="mt-3 flex items-center gap-1 rounded-xl bg-gray-50 px-4 py-2 shadow-md backdrop-blur-sm border border-gray-200"
                        >
                            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-600 text-white text-sm font-semibold">
                                {username.charAt(0).toUpperCase()}
                            </div>
                            <span className="text-gray-800 text-sm truncate max-w-[150px]">
                                {username}
                            </span>
                        </motion.div>
                    )}
                </div>

                {/* Navegação */}
                <nav className="flex-1 overflow-y-auto p-4">
                    <ul className="flex flex-col gap-2">
                        <NavLinks auth={auth} onClick={closeSidebar} />
                    </ul>
                </nav>
            </aside>

            {/* Overlay no mobile */}
            {open && (
                <div
                    className="fixed inset-0 bg-black/50 backdrop-blur-sm z-30 md:hidden"
                    onClick={closeSidebar}
                />
            )}
        </>
    );
};

export default Sidebar;
