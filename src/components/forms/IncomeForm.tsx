import { useState } from 'react';
import MoneyInput from '../MoneyInput';

interface IncomeFormProps {
    onSubmit: (data: { description: string; category: string; amount: number }) => void;
}

const IncomeForm = ({ onSubmit }: IncomeFormProps) => {
    const [description, setDescription] = useState('');
    const [category, setCategory] = useState('');
    const [amount, setAmount] = useState<number | null>(null);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!description || !category || amount === null) {
            return alert('Preencha todos os campos');
        }
        onSubmit({ description, category, amount });
        setDescription('');
        setCategory('');
        setAmount(null);
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
