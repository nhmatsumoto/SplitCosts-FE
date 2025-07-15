import { useState } from 'react';
import { useAuth } from 'react-oidc-context';
import { Link } from 'react-router-dom';
import { Menu, X, TrendingUp, TrendingDown, ChartColumn, Users, Settings, House, ChevronDown } from 'lucide-react';
import Footer from './Footer';

const Sidebar = () => {
    const auth = useAuth();
    const [open, setOpen] = useState(false);

    const toggleSidebar = () => setOpen(!open);
    const closeSidebar = () => setOpen(false);

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
                className={`fixed top-0 left-0 h-full w-64 bg-gray-900 text-white transform transition-transform duration-300 z-40 flex flex-col ${
                    open ? 'translate-x-0' : '-translate-x-full'
                } md:translate-x-0 md:relative md:w-64`}
                >
               
                <div className="flex items-center gap-3 p-6 text-xl font-semibold border-b border-gray-700">
                    <House size={28} />
                    <span>My Expenses</span>
                </div>

                <div className="p-4 border-b border-gray-700">
                    <label className="block mb-1 text-sm text-gray-400">Selecionar residência</label>
                    <div className="relative">
                        <select
                            className="w-full bg-gray-800 text-white border border-gray-600 rounded px-3 py-2 pr-8 appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                            <option>Residência A</option>
                            <option>Residência B</option>
                            <option>Residência C</option>
                        </select>
                        <ChevronDown className="absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-400 pointer-events-none" size={16} />
                    </div>
                </div>

                <nav className="p-4 flex-1">
                    <ul className="flex flex-col gap-4">
                    <NavLinks auth={auth} onClick={closeSidebar} />
                    </ul>
                </nav>

                <div className="mt-auto">
                    <Footer />
                </div>
            </aside>

            {open && (
                <div
                className="fixed inset-0 bg-black opacity-50 z-30 md:hidden"
                onClick={closeSidebar}
                />
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
}) => (
  <>
    <li>
      <Link
        to="/dashboard"
        onClick={onClick}
        className="flex items-center gap-2 hover:text-blue-400 transition-colors duration-200"
      >
        <ChartColumn size={18} /> Dashboard
      </Link>
    </li>
    <li>
      <Link
        to="/incomes"
        onClick={onClick}
        className="flex items-center gap-2 hover:text-blue-400 transition-colors duration-200"
      >
        <TrendingUp size={18} /> Incomes
      </Link>
    </li>

    <li>
      <Link
        to="/expenses"
        onClick={onClick}
        className="flex items-center gap-2 hover:text-blue-400 transition-colors duration-200"
      >
        <TrendingDown size={18} /> Expenses
      </Link>
    </li>

    <li>
      <Link
        to="/members"
        onClick={onClick}
        className="flex items-center gap-2 hover:text-blue-400 transition-colors duration-200"
      >
        <Users size={18} /> Members
      </Link>
    </li>

    <li>
      <Link
        to="/settings"
        onClick={onClick}
        className="flex items-center gap-2 hover:text-blue-400 transition-colors duration-200"
      >
        <Settings size={18} /> Settings
      </Link>
    </li>

    {!auth.isAuthenticated && (
      <li>
        <Link
          to="/register"
          onClick={onClick}
          className="flex items-center gap-2 hover:text-blue-400 transition-colors duration-200"
        >
          Register
        </Link>
      </li>
    )}

   
  </>
);
