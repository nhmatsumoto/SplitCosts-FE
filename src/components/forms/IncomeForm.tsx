import { useEffect, useState } from 'react';
import createIncomeApi from '../../api/income';
import { useAuth } from 'react-oidc-context';

interface IncomeFormProps {
    onSubmit: (data: CreateIncomeInput) => void;
}

interface Category {
    id: string | number;
    name: string;
}

interface CreateIncomeInput {
    category: string;
    amount: number;
    description: string;
    date?: string;
    residenceId: string;
    userId: string;
}

const IncomeForm = ({ onSubmit }: IncomeFormProps) => {
    const auth = useAuth();
    const [categories, setCategories] = useState<Category[]>([]);

    const [form, setForm] = useState<CreateIncomeInput>({
        category: '',
        amount: 0,
        description: '',
        residenceId: '',
        userId: '',
    });

    useEffect(() => {
        if (!auth?.user?.access_token) return;

        const api = createIncomeApi(auth.user.access_token);

        api.getCategories()
            .then((data: Category[]) => {
                setCategories(data);
            })
            .catch(err => {
                console.error('Erro ao buscar categorias de receita:', err);
                setCategories([]);
            });
    }, [auth?.user?.access_token]);

    const handleChange = <K extends keyof CreateIncomeInput>(field: K, value: any) => {
        setForm(prev => ({ ...prev, [field]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSubmit({
            ...form,
            date: new Date().toISOString(),
            userId: auth.user?.profile.sub ?? '',
            residenceId: 'default-residence-id',
        });
    };

    return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <select
                value={form.category}
                onChange={e => handleChange('category', e.target.value)}
                className="border border-gray-300 rounded px-3 py-2"
                required
            >
                <option value="">Selecione a categoria</option>
                {categories.map(c => (
                    <option key={c.id} value={c.name}>{c.name}</option>
                ))}
            </select>

            <input
                type="text"
                value={form.amount.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
                onChange={e => {
                    const rawValue = e.target.value.replace(/\D/g, '');
                    const numericValue = Number(rawValue) / 100;
                    handleChange('amount', numericValue);
                }}
                placeholder="Valor"
                className="border border-gray-300 rounded px-3 py-2"
                required
            />

            <input
                type="text"
                value={form.description}
                onChange={e => handleChange('description', e.target.value)}
                placeholder="Descrição"
                className="border border-gray-300 rounded px-3 py-2"
                required
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
