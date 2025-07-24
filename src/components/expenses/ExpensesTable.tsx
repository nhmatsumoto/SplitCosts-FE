const ExpensesTable = () => {
    return (
        <div className="rounded-xl bg-white shadow-md border border-gray-200">
            <div className="p-4 border-b border-gray-100">
                <h2 className="text-lg font-semibold">Lista de despesas</h2>
            </div>
            <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                        <tr>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Nome
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Valor
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Status
                            </th>
                            <th className="px-6 py-3"></th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200 bg-white">
                        <tr>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                Energia elétrica
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                                R$ 320,00
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm">
                                <span className="inline-flex items-center rounded-full bg-green-100 px-2 py-0.5 text-xs font-medium text-green-800">
                                    Pago
                                </span>
                            </td>
                            <td className="px-6 py-4 text-right text-sm">
                                <button className="text-blue-600 hover:underline">Editar</button>
                            </td>
                        </tr>
                        <tr>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                Internet
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                                R$ 120,00
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm">
                                <span className="inline-flex items-center rounded-full bg-red-100 px-2 py-0.5 text-xs font-medium text-red-800">
                                    Pendente
                                </span>
                            </td>
                            <td className="px-6 py-4 text-right text-sm">
                                <button className="text-blue-600 hover:underline">Editar</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ExpensesTable;