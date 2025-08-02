import { useState, useRef, useEffect } from "react";
import { useAuth } from "react-oidc-context";
import { User } from "lucide-react";

const Footer = () => {

    const { signoutRedirect, isAuthenticated, user } = useAuth();

    const handleLogout = () => {
        signoutRedirect();
    };

    const [dropdownOpen, setDropdownOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    const toggleDropdown = () => setDropdownOpen((open) => !open);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                dropdownRef.current &&
                !dropdownRef.current.contains(event.target as Node)
            ) {
                setDropdownOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    if (!isAuthenticated || !user) {
        return (
            <div className="w-full bg-gray-800 text-white px-4 py-3 border-t border-gray-700 flex justify-center">
                <button className="btn-primary">
                    <a href="#" onClick={() => handleLogout()}>
                        Login
                    </a>
                </button>
            </div>
        );
    }

    const userName = user.profile.name || user.profile.preferred_username;

    return (
        <div
            className="w-full bg-gray-800 text-white px-4 py-3 border-t border-gray-700 flex justify-center relative"
            ref={dropdownRef}
        >
            <button
                onClick={toggleDropdown}
                className="bg-gray-700 hover:bg-gray-600 rounded px-4 py-2 text-sm font-medium flex items-center gap-2 focus:outline-none"
                aria-haspopup="true"
                aria-expanded={dropdownOpen}
            >
                <User size={16} />
                {userName}
            </button>

            {dropdownOpen && (
                <ul className="absolute bottom-full mb-2 w-40 bg-gray-800 border border-gray-700 rounded shadow-lg text-sm text-white right-0">
                    <li>
                        <a
                            href="/settings"
                            className="block px-4 py-2 hover:bg-gray-700"
                            onClick={() => setDropdownOpen(false)}
                        >
                            Configurações
                        </a>
                    </li>
                    <li>
                        <a
                            href="/profile"
                            className="block px-4 py-2 hover:bg-gray-700"
                            onClick={() => setDropdownOpen(false)}
                        >
                            Perfil
                        </a>
                    </li>
                    <li>
                        <button
                            onClick={() => {
                                setDropdownOpen(false);
                                handleLogout();
                            }}
                            className="w-full text-left px-4 py-2 hover:bg-gray-700"
                        >
                            Sair
                        </button>
                    </li>
                </ul>
            )}
        </div>
    );
};

export default Footer;