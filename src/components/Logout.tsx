import { useAuth } from "react-oidc-context";
import { LogOut } from "lucide-react";

const LogoutButton = () => {
    const { signoutRedirect } = useAuth();

    const handleLogout = () => {
        signoutRedirect();
    };

    return (
        <button
            onClick={handleLogout}
            aria-label="Logout"
            className="group flex items-center gap-2 rounded-xl bg-red-500 px-4 py-2 text-sm font-medium text-white shadow-sm transition-all hover:bg-red-600 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-offset-2"
        >
            <LogOut
                size={18}
                className="transition-transform group-hover:rotate-12"
            />
            <span className="hidden sm:inline">Sair</span>
        </button>
    );
};

export default LogoutButton;
