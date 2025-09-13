import UserRegistrationForm from '../../components/forms/UserRegistrationForm';
import { useAuth } from 'react-oidc-context';
import { motion } from 'framer-motion';

const Onboard = () => {
    const auth = useAuth();

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-white p-4">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0, transition: { duration: 1.2 } }} // 1.2 segundos
                exit={{ opacity: 0, y: -20, transition: { duration: 1 } }}   // 1 segundo
                className="w-full max-w-xl p-8 md:p-12 flex flex-col gap-6"
            >
                <h2 className="text-3xl md:text-4xl font-extrabold text-center text-gray-800 mb-6">
                    Crie sua Conta
                </h2>

                {!auth.isAuthenticated && (
                    <UserRegistrationForm />
                )}
            </motion.div>
        </div>
    );
};

export default Onboard;
