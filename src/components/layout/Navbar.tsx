import { useState } from 'react';
import { useAuth } from 'react-oidc-context';
import { Link } from 'react-router-dom';
import LogoutButton from '../Logout';
import LoginButton from '../Login';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const auth = useAuth();
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="bg-gray-900 text-white px-6 py-3 shadow-md">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
            <div className="text-xl font-semibold tracking-wide">My Expenses</div>
            <button
                className="md:hidden text-white"
                onClick={toggleMenu}
                aria-label="Abrir menu"
                >
                {menuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>

            <ul className="hidden md:flex items-center gap-6">
                <NavLinks auth={auth} />
            </ul>
        </div>

        {menuOpen && (
            <ul className="md:hidden mt-4 flex flex-col gap-4 px-4 pb-4 border-t border-gray-700">
                <NavLinks auth={auth} onClick={closeMenu} />
            </ul>
        )}
    </nav>
  );
};

export default Navbar;

// Subcomponente de links reutilizável
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
                to="/"
                onClick={onClick}
                className="hover:text-blue-400 transition-colors duration-200"
            >
                Home
            </Link>
        </li>
        {!auth.isAuthenticated && (
            <li>
                <Link
                to="/register"
                onClick={onClick}
                className="hover:text-blue-400 transition-colors duration-200"
                >
                Register
                </Link>
            </li>
        )}
        <li>
            <Link
                to="/dashboard"
                onClick={onClick}
                className="hover:text-blue-400 transition-colors duration-200"
            >
                Dashboard
            </Link>
        </li>
        <li>
            <Link
                to="/residence"
                onClick={onClick}
                className="hover:text-blue-400 transition-colors duration-200"
            >
                Residence
            </Link>
        </li>
        {auth.isAuthenticated && auth.user ? (
            <>
                <li className="text-sm text-gray-300">
                    Olá,{' '}
                    <span className="font-medium text-white">
                    {auth.user.profile.name || auth.user.profile.preferred_username}
                    </span>
                </li>
                <li>
                    <LogoutButton />
                </li>
            </>
        ) : (
            <li>
                <LoginButton />
            </li>
        )}
    </>
);