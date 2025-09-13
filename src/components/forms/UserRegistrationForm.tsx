import { useState } from 'react';
import createUserApi from '../../api/user';
import * as Yup from 'yup';
import { useAuth } from 'react-oidc-context';
import { toast } from 'react-toastify';

interface CreateApplicationUserInput {
    username: string;
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    confirmPassword: string;
}

const UserRegistrationForm = () => {
    const api = createUserApi();
    const { signinRedirect } = useAuth();

    const [form, setForm] = useState<CreateApplicationUserInput>({
        username: '',
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: '',
    });

    const [errors, setErrors] = useState<Partial<Record<keyof CreateApplicationUserInput, string>>>({});
    const [loading, setLoading] = useState(false);

    const schema = Yup.object().shape({
        username: Yup.string().required('Nome de usuário é obrigatório'),
        firstName: Yup.string(),
        lastName: Yup.string(),
        email: Yup.string().email('E-mail inválido').required('E-mail é obrigatório'),
        password: Yup.string().min(6, 'Senha deve ter no mínimo 6 caracteres').required('Senha é obrigatória'),
        confirmPassword: Yup.string().oneOf([Yup.ref('password')], 'As senhas não coincidem').required('Confirme a senha'),
    });

    const handleChange = (field: keyof CreateApplicationUserInput, value: string) => {
        setForm(prev => ({ ...prev, [field]: value }));
        setErrors(prev => ({ ...prev, [field]: '' }));
    };

    const validate = async () => {
        try {
            await schema.validate(form, { abortEarly: false });
            setErrors({});
            return true;
        } catch (err: any) {
            const newErrors: Partial<Record<keyof CreateApplicationUserInput, string>> = {};
            err.inner.forEach((error: any) => {
                if (error.path) newErrors[error.path as keyof CreateApplicationUserInput] = error.message;
            });
            setErrors(newErrors);
            return false;
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!(await validate())) return;

        try {
            setLoading(true);

            const toastId = toast.loading('Criando usuário...');

            await api.create(form);

            toast.update(toastId, {
                render: `Usuário criado! Redirecionando em 15s...`,
                type: 'success',
                isLoading: false,
                autoClose: false,
                pauseOnHover: false,
                closeButton: false,
                hideProgressBar: true,
                theme: 'colored',
            });

            let countdown = 15;
            const interval = setInterval(() => {
                countdown -= 1;
                toast.update(toastId, {
                    render: `Usuário criado! Redirecionando em ${countdown}s...`,
                });

                if (countdown <= 0) {
                    clearInterval(interval);
                    toast.dismiss(toastId);
                    signinRedirect().catch(() => {
                        toast('Erro ao redirecionar para login.', { type: 'error' });
                    });
                }
            }, 1000);
        } catch {
            toast('Erro ao criar usuário.', { type: 'error' });
        } finally {
            setLoading(false);
        }


    };

    const inputClasses = (field: keyof CreateApplicationUserInput) =>
        `w-full border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 transition-all placeholder-gray-400 ${errors[field] ? 'border-red-500 focus:ring-red-300' : 'border-gray-300 focus:ring-blue-300'}`;

    return (
        <form onSubmit={handleSubmit} className="w-full max-w-md bg-white border border-gray-200 shadow-2xl p-8 rounded-3xl flex flex-col gap-5">
            <h2 className="text-2xl font-extrabold text-center text-blue-600 mb-6">Cadastro de Usuário</h2>

            <input type="text" placeholder="Nome de usuário" value={form.username} onChange={(e) => handleChange('username', e.target.value)} className={inputClasses('username')} />
            {errors.username && <p className="text-red-500 text-sm mt-1">{errors.username}</p>}

            <input type="text" placeholder="Nome" value={form.firstName} onChange={(e) => handleChange('firstName', e.target.value)} className={inputClasses('firstName')} />

            <input type="text" placeholder="Sobrenome" value={form.lastName} onChange={(e) => handleChange('lastName', e.target.value)} className={inputClasses('lastName')} />

            <input type="email" placeholder="E-mail" value={form.email} onChange={(e) => handleChange('email', e.target.value)} className={inputClasses('email')} />
            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}

            <input type="password" placeholder="Senha" value={form.password} onChange={(e) => handleChange('password', e.target.value)} className={inputClasses('password')} />
            {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}

            <input type="password" placeholder="Confirmar Senha" value={form.confirmPassword} onChange={(e) => handleChange('confirmPassword', e.target.value)} className={inputClasses('confirmPassword')} />
            {errors.confirmPassword && <p className="text-red-500 text-sm mt-1">{errors.confirmPassword}</p>}

            <button type="submit" disabled={loading} className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold py-3 rounded-xl shadow-lg transition-all disabled:opacity-50">
                {loading ? 'Registrando...' : 'Registrar'}
            </button>
        </form>
    );
};

export default UserRegistrationForm;