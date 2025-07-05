import { useAuth } from 'react-oidc-context';
import { Link } from 'react-router-dom';
import LogoutButton from '../Logout';
import LoginButton from '../Login';

const Navbar = () => {
  const auth = useAuth();

  return (
    <nav className="bg-gray-900 text-white px-6 py-3 flex items-center justify-between shadow-md">
      <div className="text-xl font-semibold tracking-wide">MyApp</div>

      <ul className="flex items-center gap-6">
        <li>
          <Link
            to="/"
            className="hover:text-blue-400 transition-colors duration-200"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/private"
            className="hover:text-blue-400 transition-colors duration-200"
          >
            Dashboard
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
      </ul>
    </nav>
  );
};

export default Navbar;
