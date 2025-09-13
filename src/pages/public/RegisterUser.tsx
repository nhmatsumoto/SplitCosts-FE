import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from 'react-oidc-context';
import UserRegistrationForm from "../../components/forms/UserRegistrationForm";

const RegisterUser = () => {
    const auth = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        if (auth.isAuthenticated) {
            navigate('/');
        }
    }, [auth.isAuthenticated, navigate]);

    return (
        <>
            {!auth.isAuthenticated && (
                <UserRegistrationForm />
            )}
        </>
    );
};

export default RegisterUser;
