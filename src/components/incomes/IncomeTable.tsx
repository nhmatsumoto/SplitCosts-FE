type IncomeItem = {
    date: string;
    source: string;
    amount: number;
};

type IncomeTableProps = {
    data: IncomeItem[];
    onEdit?: (item: IncomeItem) => void;
    onDelete?: (item: IncomeItem) => void;
};

const formatCurrency = (value: number) =>
    value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

const IncomeTable = ({ data, onEdit, onDelete }: IncomeTableProps) => {
    return (
        <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <h4 className="text-xl font-semibold text-gray-800 mb-4">Detalhes das Entradas</h4>
            <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200 text-sm">
                    <thead className="bg-gray-50">
                        <tr className="text-left">
                            <th className="px-4 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wide">Data</th>
                            <th className="px-4 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wide">Origem</th>
                            <th className="px-4 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wide">Valor</th>
                            {(onEdit || onDelete) && (
                                <th className="px-4 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wide">Ações</th>
                            )}
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100 bg-white">
                        {data.map((item, idx) => (
                            <tr key={idx} className="hover:bg-gray-50 transition-colors">
                                <td className="px-4 py-3 whitespace-nowrap text-gray-700">{item.date}</td>
                                <td className="px-4 py-3 whitespace-nowrap text-gray-700">{item.source}</td>
                                <td className="px-4 py-3 whitespace-nowrap text-gray-900 font-medium">
                                    {formatCurrency(item.amount)}
                                </td>
                                {(onEdit || onDelete) && (
                                    <td className="px-4 py-3 whitespace-nowrap text-sm">
                                        <div className="flex gap-3">
                                            {onEdit && (
                                                <button
                                                    onClick={() => onEdit(item)}
                                                    className="text-blue-600 hover:underline"
                                                >
                                                    Editar
                                                </button>
                                            )}
                                            {onDelete && (
                                                <button
                                                    onClick={() => onDelete(item)}
                                                    className="text-red-600 hover:underline"
                                                >
                                                    Excluir
                                                </button>
                                            )}
                                        </div>
                                    </td>
                                )}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default IncomeTable;
