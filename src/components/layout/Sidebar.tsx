import { useState } from 'react';
import { useAuth } from 'react-oidc-context';
import { Link, useLocation } from 'react-router-dom';
import {
    Menu,
    X,
    TrendingUp,
    TrendingDown,
    ChartColumn,
    Users,
    Settings,
    House,
    ChevronDown,
    ChevronRight,
    ArrowLeftRight,
} from 'lucide-react';
import Footer from './Footer';
import { useTranslation } from 'react-i18next';

const Sidebar = () => {
    const auth = useAuth();
    const [open, setOpen] = useState(false);
    const toggleSidebar = () => setOpen(!open);
    const closeSidebar = () => setOpen(false);
    const { t } = useTranslation();

    return (
        <>
            <button
                className="fixed top-4 left-4 z-50 text-white bg-gray-900 p-2 rounded-md md:hidden"
                onClick={toggleSidebar}
                aria-label="Toggle sidebar"
            >
                {open ? <X size={24} /> : <Menu size={24} />}
            </button>

            <aside
                className={`fixed top-0 left-0 h-full w-64 bg-gray-900 text-white transform transition-transform duration-300 z-40 flex flex-col ${open ? 'translate-x-0' : '-translate-x-full'
                    } md:translate-x-0 md:relative md:w-64`}
            >
                <div className="flex items-center gap-3 p-6 text-xl font-semibold border-b border-gray-700">
                    <House size={28} />
                    <span>{t('title')}</span>
                </div>

                <div className="p-4 border-b border-gray-700">
                    <label className="block mb-1 text-sm text-gray-400">{t('select_residence')}</label>
                    <div className="relative">
                        <select className="w-full bg-gray-800 text-white border border-gray-600 rounded px-3 py-2 pr-8 appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500">
                            <option>{t('residence_a')}</option>
                            <option>{t('residence_b')}</option>
                            <option>{t('residence_c')}</option>
                        </select>
                        <ChevronDown className="absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-400 pointer-events-none" size={16} />
                    </div>
                </div>

                <nav className="p-4 flex-1">
                    <ul className="flex flex-col gap-2">
                        <NavLinks auth={auth} onClick={closeSidebar} />
                    </ul>
                </nav>

                <div className="mt-auto">
                    <Footer />
                </div>
            </aside>

            {open && (
                <div className="fixed inset-0 bg-black opacity-50 z-30 md:hidden" onClick={closeSidebar} />
            )}
        </>
    );
};

export default Sidebar;

const NavLinks = ({
    auth,
    onClick,
}: {
    auth: ReturnType<typeof useAuth>;
    onClick?: () => void;
}) => {
    const location = useLocation();
    const [submenuGestaoOpen, setSubmenuGestaoOpen] = useState(() =>
        ['/members', '/settings'].includes(location.pathname)
    );
    const [submenuTransacoesOpen, setSubmenuTransacoesOpen] = useState(() =>
        ['/incomes', '/expenses'].includes(location.pathname)
    );

    const { t } = useTranslation();

    const isActive = (path: string) => location.pathname === path;

    return (
        <>
            <li>
                <Link
                    to="/dashboard"
                    onClick={onClick}
                    className={`flex items-center gap-2 transition-colors duration-200 ${isActive('/dashboard') ? 'text-blue-400' : 'hover:text-blue-400'
                        }`}
                >
                    <ChartColumn size={18} /> {t('menu_dashboard')}
                </Link>
            </li>

            <li>
                <button
                    onClick={() => setSubmenuTransacoesOpen(!submenuTransacoesOpen)}
                    className="flex items-center justify-between w-full hover:text-blue-400 transition-colors duration-200"
                >
                    <span className="flex items-center gap-2">
                        <ArrowLeftRight size={18} /> {t('menu_transactions')}
                    </span>
                    {submenuTransacoesOpen ? (
                        <ChevronDown size={16} />
                    ) : (
                        <ChevronRight size={16} />
                    )}
                </button>
                {submenuTransacoesOpen && (
                    <ul className="ml-6 mt-2 flex flex-col gap-2 text-sm text-gray-300">
                        <li>
                            <Link
                                to="/incomes"
                                onClick={onClick}
                                className={`flex items-center gap-2 transition-colors duration-200 ${isActive('/incomes') ? 'text-blue-400' : 'hover:text-blue-400'
                                    }`}
                            >
                                <TrendingUp size={16} /> {t('menu_incomes')}
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/expenses"
                                onClick={onClick}
                                className={`flex items-center gap-2 transition-colors duration-200 ${isActive('/expenses') ? 'text-blue-400' : 'hover:text-blue-400'
                                    }`}
                            >
                                <TrendingDown size={16} /> {t('menu_expenses')}
                            </Link>
                        </li>
                    </ul>
                )}
            </li>

            <li>
                <button
                    onClick={() => setSubmenuGestaoOpen(!submenuGestaoOpen)}
                    className="flex items-center justify-between w-full hover:text-blue-400 transition-colors duration-200"
                >
                    <span className="flex items-center gap-2">
                        <Users size={18} /> {t('menu_management')}
                    </span>
                    {submenuGestaoOpen ? (
                        <ChevronDown size={16} />
                    ) : (
                        <ChevronRight size={16} />
                    )}
                </button>
                {submenuGestaoOpen && (
                    <ul className="ml-6 mt-2 flex flex-col gap-2 text-sm text-gray-300">
                        <li>
                            <Link
                                to="/members"
                                onClick={onClick}
                                className={`flex items-center gap-2 transition-colors duration-200 ${isActive('/members') ? 'text-blue-400' : 'hover:text-blue-400'
                                    }`}
                            >
                                <Users size={16} /> {t('menu_members')}
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/settings"
                                onClick={onClick}
                                className={`flex items-center gap-2 transition-colors duration-200 ${isActive('/settings') ? 'text-blue-400' : 'hover:text-blue-400'
                                    }`}
                            >
                                <Settings size={16} /> {t('menu_settings')}
                            </Link>
                        </li>
                    </ul>
                )}
            </li>

            {!auth.isAuthenticated && (
                <li>
                    <Link
                        to="/register"
                        onClick={onClick}
                        className={`flex items-center gap-2 transition-colors duration-200 ${isActive('/register') ? 'text-blue-400' : 'hover:text-blue-400'
                            }`}
                    >
                        {t('menu_register')}
                    </Link>
                </li>
            )}
        </>
    );
};
