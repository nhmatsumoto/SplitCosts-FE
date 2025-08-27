import { useState } from 'react';
import MoneyInput from '../MoneyInput';

interface IncomeFormProps {
    onSubmit: (data: { 
        amount: number,
        date: Date,
        description: string; 
        category: string; 
        userId: string,
        residenceId: string
    }) => void;
}

const IncomeForm = ({ onSubmit }: IncomeFormProps) => {
    const [description, setDescription] = useState('');
    const [category, setCategory] = useState('');
    const [amount, setAmount] = useState<number | null>(null);
    const [userId, setUserId] = useState<string | null>(null);
    const [residenceId, setResidenceId] = useState<string | null>(null);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (amount === null || !userId || !residenceId || !category) {
            // Pode adicionar feedback para o usuário aqui
            return;
        }

        onSubmit({
            amount,
            date: new Date(),
            description,
            category,
            userId,
            residenceId
        });

        setDescription('');
        setCategory('');
        setAmount(null);
        setUserId(null);
        setResidenceId(null);
    };

    return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <input
                type="text"
                placeholder="Descrição"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="border border-gray-300 rounded px-3 py-2"
            />

            <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="border border-gray-300 rounded px-3 py-2"
            >
                <option value="">Selecione a categoria</option>
                <option value="Salário">Salário</option>
                <option value="Freelance">Freelance</option>
                <option value="Investimentos">Investimentos</option>
                <option value="Outros">Outros</option>
            </select>

            <MoneyInput
                value={amount}
                onChange={setAmount}
                placeholder="Valor"
            />

            <button
                type="submit"
                className="bg-green-600 text-white py-2 rounded hover:bg-green-700 transition"
            >
                Adicionar Entrada
            </button>
        </form>
    );
};

export default IncomeForm;
