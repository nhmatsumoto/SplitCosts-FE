const Expenses = () => {
    return (
    <div className="space-y-6">
        <div className="flex items-center justify-between space-y-2">
            <div className="flex items-center space-x-2">
                <h2 className="text-3xl font-bold tracking-tight">Despesas</h2>
            </div>
        </div>

        <div className="grid gap-4 md:grid-cols-3 mt-6">
            <div className="rounded-lg border bg-card text-card-foreground shadow-2xs">
                <div className="flex flex-col space-y-1.5 p-6 pb-2">
                    <h3 className="tracking-tight text-sm font-medium">Total Mensal</h3>
                </div>
                <div className="p-6 pt-0">
                    <div className="text-2xl font-bold text-red-600">R$ 1.919,00</div>
                </div>
            </div>
            <div className="rounded-lg border bg-card text-card-foreground shadow-2xs">
                <div className="flex flex-col space-y-1.5 p-6 pb-2">
                    <h3 className="tracking-tight text-sm font-medium">Despesas Fixas</h3>
                </div>
                <div className="p-6 pt-0">
                    <div className="text-2xl font-bold">3</div>
                </div>
            </div>
            <div className="rounded-lg border bg-card text-card-foreground shadow-2xs">
                <div className="flex flex-col space-y-1.5 p-6 pb-2">
                    <h3 className="tracking-tight text-sm font-medium">Despesas Variáveis</h3>
                </div>
                <div className="p-6 pt-0">
                    <div className="text-2xl font-bold">2</div>
                </div>
            </div>
        </div>

        <div className="rounded-lg border bg-card text-card-foreground shadow-2xs mt-6">
            <div className="flex flex-col space-y-1.5 p-6">
                <h3 className="text-2xl font-semibold leading-none tracking-tight">Suas Despesas</h3>
                <p className="text-sm text-muted-foreground">Gerencie todos os seus gastos</p>
            </div>
            <div className="p-6 pt-0">
                <div className="relative w-full overflow-auto">
                    <table className="w-full caption-bottom text-sm">
                        <thead className="[&_tr]:border-b">
                        <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                            <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0">
                            Descrição
                            </th>
                            <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0">
                            Categoria
                            </th>
                            <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0">
                            Valor
                            </th>
                            <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0">
                            Data
                            </th>
                            <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0">
                            Tipo
                            </th>
                            <th className="h-12 px-4 align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0 text-right">
                            Ações
                            </th>
                        </tr>
                        </thead>
                        <tbody className="[&_tr:last-child]:border-0">
                        {[
                            {
                            descricao: "Aluguel",
                            categoria: "Moradia",
                            valor: "R$ 1.200,00",
                            data: "05/01/2024",
                            tipo: "Fixa",
                            tipoClass: "bg-red-100 text-red-800",
                            },
                            {
                            descricao: "Supermercado",
                            categoria: "Alimentação",
                            valor: "R$ 250,00",
                            data: "15/01/2024",
                            tipo: "Variável",
                            tipoClass: "bg-gray-100 text-gray-800",
                            },
                            {
                            descricao: "Conta de Luz",
                            categoria: "Utilidades",
                            valor: "R$ 180,00",
                            data: "10/01/2024",
                            tipo: "Fixa",
                            tipoClass: "bg-red-100 text-red-800",
                            },
                            {
                            descricao: "Gasolina",
                            categoria: "Transporte",
                            valor: "R$ 200,00",
                            data: "12/01/2024",
                            tipo: "Variável",
                            tipoClass: "bg-gray-100 text-gray-800",
                            },
                            {
                            descricao: "Internet",
                            categoria: "Utilidades",
                            valor: "R$ 89,00",
                            data: "08/01/2024",
                            tipo: "Fixa",
                            tipoClass: "bg-red-100 text-red-800",
                            },
                        ].map((item, i) => (
                            <tr
                            key={i}
                            className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted"
                            >
                            <td className="p-4 align-middle [&:has([role=checkbox])]:pr-0 font-medium">
                                {item.descricao}
                            </td>
                            <td className="p-4 align-middle [&:has([role=checkbox])]:pr-0">{item.categoria}</td>
                            <td className="p-4 align-middle [&:has([role=checkbox])]:pr-0 text-red-600 font-medium">
                                {item.valor}
                            </td>
                            <td className="p-4 align-middle [&:has([role=checkbox])]:pr-0">{item.data}</td>
                            <td className="p-4 align-middle [&:has([role=checkbox])]:pr-0">
                                <span
                                className={`px-2 py-1 rounded-full text-xs ${item.tipoClass}`}
                                >
                                {item.tipo}
                                </span>
                            </td>
                            <td className="p-4 align-middle [&:has([role=checkbox])]:pr-0 text-right">
                                <div className="flex justify-end space-x-2">
                                <button className="ring-offset-background focus-visible:outline-hidden focus-visible:ring-ring inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-9 rounded-md px-3">
                                    <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="lucide lucide-square-pen h-4 w-4"
                                    >
                                    <path d="M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                                    <path d="M18.375 2.625a2.121 2.121 0 1 1 3 3L12 15l-4 1 1-4Z"></path>
                                    </svg>
                                </button>
                                <button className="ring-offset-background focus-visible:outline-hidden focus-visible:ring-ring inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-9 rounded-md px-3">
                                    <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="lucide lucide-trash2 h-4 w-4"
                                    >
                                    <path d="M3 6h18"></path>
                                    <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path>
                                    <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path>
                                    <line x1="10" x2="10" y1="11" y2="17"></line>
                                    <line x1="14" x2="14" y1="11" y2="17"></line>
                                    </svg>
                                </button>
                                </div>
                            </td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
    );
};

export default Expenses;
