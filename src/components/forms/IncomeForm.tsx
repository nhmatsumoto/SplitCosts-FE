import { useState } from 'react';
import MoneyInput from '../MoneyInput';
import IncomeApi from '../../api/income';


interface IncomeFormProps {
    onSuccess?: () => void; // opcional, para atualizar lista após criar
}

const IncomeForm = ({ onSuccess }: IncomeFormProps) => {
    const [description, setDescription] = useState('');
    const [category, setCategory] = useState('');
    const [amount, setAmount] = useState<number | null>(null);
    const [userId, setUserId] = useState<string | null>(null);
    const [residenceId, setResidenceId] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (amount === null || !userId || !residenceId || !category) return;

        alert(JSON.stringify({ description, category, amount, userId, residenceId }));

        setLoading(true);
        try {
            await IncomeApi.create({
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

            if (onSuccess) onSuccess();
        } catch (error) {
            console.error('Erro ao criar entrada:', error);
        } finally {
            setLoading(false);
        }
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
                disabled={loading}
            >
                {loading ? 'Adicionando...' : 'Adicionar Entrada'}
            </button>
        </form>
    );
};

export default IncomeForm;
