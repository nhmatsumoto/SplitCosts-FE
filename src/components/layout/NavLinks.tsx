import { Link, useLocation } from "react-router-dom";
import { ArrowLeftRight, ChevronDown, ChevronRight, IdCard, Settings, TrendingDown, TrendingUp, Users } from "lucide-react";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import type { useAuth } from "react-oidc-context";

const NavLinks = ({
    auth,
    onClick,
}: {
    auth: ReturnType<typeof useAuth>;
    onClick?: () => void;
}) => {
    const location = useLocation();
    const { t } = useTranslation();

    if (!auth.isAuthenticated) {
        return (
            <ul className="flex flex-col gap-6"> {/* espaçamento maior */}
                <li>
                    <Link
                        to="/register"
                        onClick={onClick}
                        className={`flex items-center gap-2 transition-colors duration-200 ${location.pathname === '/register' ? 'text-blue-400' : 'hover:text-blue-400'}`}
                    >
                        {t('menu_register')}
                    </Link>
                </li>
            </ul>
        );
    }

    const [submenuGestaoOpen, setSubmenuGestaoOpen] = useState(() =>
        ['/members', '/settings'].includes(location.pathname)
    );

    const [submenuTransacoesOpen, setSubmenuTransacoesOpen] = useState(() =>
        ['/incomes', '/expenses'].includes(location.pathname)
    );

    const isActive = (path: string) => location.pathname === path;

    return (
        <ul className="flex flex-col gap-6"> {/* maior espaçamento entre menus */}
            {!auth.isAuthenticated && (
                <li>
                    <Link
                        to="/onboard"
                        onClick={onClick}
                        className={`flex items-center gap-2 transition-colors duration-200 ${isActive('/onboard') ? 'text-blue-400' : 'hover:text-blue-400'}`}
                    >
                        <IdCard size={18} /> Onboard
                    </Link>
                </li>
            )}

            <li>
                <button
                    onClick={() => setSubmenuTransacoesOpen(!submenuTransacoesOpen)}
                    className="flex items-center justify-between w-full hover:text-blue-400 transition-colors duration-200"
                >
                    <span className="flex items-center gap-2">
                        <ArrowLeftRight size={18} /> {t('menu_transactions')}
                    </span>
                    {submenuTransacoesOpen ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
                </button>
                {submenuTransacoesOpen && (
                    <ul className="ml-6 mt-3 flex flex-col gap-3 text-sm text-gray-300"> {/* espaçamento maior */}
                        <li>
                            <Link
                                to="/incomes"
                                onClick={onClick}
                                className={`flex items-center gap-2 transition-colors duration-200 ${isActive('/incomes') ? 'text-blue-400' : 'hover:text-blue-400'}`}
                            >
                                <TrendingUp size={16} /> {t('menu_incomes')}
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/expenses"
                                onClick={onClick}
                                className={`flex items-center gap-2 transition-colors duration-200 ${isActive('/expenses') ? 'text-blue-400' : 'hover:text-blue-400'}`}
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
                    {submenuGestaoOpen ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
                </button>
                {submenuGestaoOpen && (
                    <ul className="ml-6 mt-3 flex flex-col gap-3 text-sm text-gray-300"> {/* espaçamento maior */}
                        <li>
                            <Link
                                to="/members"
                                onClick={onClick}
                                className={`flex items-center gap-2 transition-colors duration-200 ${isActive('/members') ? 'text-blue-400' : 'hover:text-blue-400'}`}
                            >
                                <Users size={16} /> {t('menu_members')}
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/settings"
                                onClick={onClick}
                                className={`flex items-center gap-2 transition-colors duration-200 ${isActive('/settings') ? 'text-blue-400' : 'hover:text-blue-400'}`}
                            >
                                <Settings size={16} /> {t('menu_settings')}
                            </Link>
                        </li>
                    </ul>
                )}
            </li>
        </ul>
    );
};

export default NavLinks;