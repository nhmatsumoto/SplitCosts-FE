import { useCurrencyFormatter } from "../../hooks/useCurrencyFormatter";

type CategoryExpense = {
    label: string;
    amount: number;
    percent: number; // 0–100
};

const data: CategoryExpense[] = [
    { label: 'Moradia', amount: 1200, percent: 60 },
    { label: 'Alimentação', amount: 600, percent: 80 },
    { label: 'Transporte', amount: 450, percent: 85 },
    { label: 'Utilidades', amount: 300, percent: 90 },
    { label: 'Outros', amount: 450, percent: 85 },
];


const ExpensesByCategory = () => {

    const { formatCurrency } = useCurrencyFormatter();

    return (
        <div className="bg-white rounded-xl border border-gray-200 shadow-md m-6">
            <div className="flex flex-col space-y-1.5 p-6">
                <h3 className="text-2xl font-semibold tracking-tight text-gray-800">
                    Despesas por Categoria
                </h3>
                <p className="text-sm text-gray-500">Distribuição dos seus gastos mensais</p>
            </div>

            <div className="p-6 pt-0 space-y-6">
                {data.map((item, idx) => (
                    <div key={idx} className="space-y-2">
                        <div className="flex items-center justify-between text-sm">
                            <span className="font-semibold text-gray-700">{item.label}</span>
                            <span className="text-gray-500">{formatCurrency(item.amount)}</span>
                        </div>
                        <div
                            role="progressbar"
                            aria-valuemin={0}
                            aria-valuemax={100}
                            aria-valuenow={item.percent}
                            className="relative w-full h-3 rounded-full bg-gray-200 overflow-hidden"
                        >
                            <div
                                className="h-full bg-gradient-to-r from-blue-500 to-blue-700 transition-all"
                                style={{ width: `${item.percent}%` }}
                            />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );

};

export default ExpensesByCategory;
