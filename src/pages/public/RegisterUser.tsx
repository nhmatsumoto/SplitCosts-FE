import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from 'react-oidc-context';
import UserRegistrationForm from "../../components/forms/UserRegistrationForm";

const RegisterUser = () => {
    const auth = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        if (auth.isAuthenticated) {
            navigate('/dashboard');
        }
    }, [auth.isAuthenticated, navigate]);

    const handleSubmit = (data: any) => {
        console.log('Usuário enviado:', data);
        // enviar os dados via API
    };

    return (
        <>
            {!auth.isAuthenticated && (
            <UserRegistrationForm onSubmit={handleSubmit} />
            )}
        </>
    );
};

export default RegisterUser;
