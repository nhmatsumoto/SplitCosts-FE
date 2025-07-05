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
      className="flex items-center gap-1 text-sm bg-red-600 hover:bg-red-700 text-white px-3 py-1.5 rounded transition"
    >
      <LogOut size={16} />
      <span>Logout</span>
    </button>
  );
};

export default LogoutButton;
