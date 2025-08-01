import { useCurrencyFormatter } from "../../hooks/useCurrencyFormatter";

type Transaction = {
    description: string;
    category: string;
    date: string;
    amount: number;
};

const transactions: Transaction[] = [
    { description: 'Supermercado', category: 'Alimentação', date: '15/01/2024', amount: -250 },
    { description: 'Salário', category: 'Trabalho', date: '01/01/2024', amount: 5000 },
    { description: 'Conta de Luz', category: 'Utilidades', date: '10/01/2024', amount: -180 },
    { description: 'Aluguel', category: 'Moradia', date: '05/01/2024', amount: -1200 },
    { description: 'Freelance', category: 'Trabalho', date: '12/01/2024', amount: 800 },
];

const RecentTransactions = () => {

    const { formatCurrency } = useCurrencyFormatter();

    return (
        <div className="bg-white rounded-xl border border-gray-200 shadow-md m-6">
            <div className="flex flex-col space-y-1.5 p-6">
                <h3 className="text-2xl font-semibold tracking-tight text-gray-800">
                    Transações Recentes
                </h3>
                <p className="text-sm text-gray-500">Suas últimas movimentações financeiras</p>
            </div>

            <div className="p-6 pt-0">
                <div className="relative w-full overflow-auto rounded-md">
                    <table className="w-full text-sm">
                        <thead>
                            <tr className="border-b border-gray-200">
                                <th className="h-12 px-4 text-left font-medium text-gray-500">Descrição</th>
                                <th className="h-12 px-4 text-left font-medium text-gray-500">Categoria</th>
                                <th className="h-12 px-4 text-left font-medium text-gray-500">Data</th>
                                <th className="h-12 px-4 text-right font-medium text-gray-500">Valor</th>
                            </tr>
                        </thead>
                        <tbody>
                            {transactions.map((tx, idx) => (
                                <tr
                                    key={idx}
                                    className="border-b border-gray-200 transition-colors hover:bg-gray-50"
                                >
                                    <td className="p-4 font-medium text-gray-700">{tx.description}</td>
                                    <td className="p-4 text-gray-600">{tx.category}</td>
                                    <td className="p-4 text-gray-600">{tx.date}</td>
                                    <td
                                        className={`p-4 text-right font-semibold ${tx.amount < 0 ? 'text-red-600' : 'text-green-600'}`}
                                    >
                                        {formatCurrency(tx.amount)}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default RecentTransactions;
