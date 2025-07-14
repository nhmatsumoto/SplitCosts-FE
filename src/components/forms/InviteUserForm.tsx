import { useState } from 'react';

interface Props {
    onSubmit: (email: string) => void;
}

const InviteUserForm = ({ onSubmit }: Props) => {
    const [email, setEmail] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (!email.trim()) {
            alert('Informe o e-mail do usuário.');
            return;
        }

        onSubmit(email);
        setEmail('');
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-4"
        >
            <h2 className="text-2xl font-semibold text-center">Convidar Usuário</h2>

            <input
                type="email"
                placeholder="E-mail do usuário"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="border border-gray-300 rounded px-3 py-2"
                required
            />

            <button
                type="submit"
                className="bg-indigo-600 text-white py-2 rounded hover:bg-indigo-700 transition"
            >
            Enviar Convite
            </button>
        </form>
    );
};

export default InviteUserForm;
