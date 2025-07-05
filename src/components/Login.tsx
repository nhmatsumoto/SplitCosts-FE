import { useAuth } from "react-oidc-context";
import { LogIn } from "lucide-react";

const LoginButton = () => {
  const { signinRedirect } = useAuth();

  const handleLogin = () => {
    signinRedirect().catch(error => {
      console.error("Login failed:", error);
    });
  };

  return (
    <button
      onClick={handleLogin}
      aria-label="Login"
      className="flex items-center gap-1 text-sm bg-blue-600 hover:bg-blue-700 text-white px-3 py-1.5 rounded transition"
    >
      <LogIn size={16} />
      <span>Login</span>
    </button>
  );
};

export default LoginButton;