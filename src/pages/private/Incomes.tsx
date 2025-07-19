import { useState } from "react";
import { Plus } from "lucide-react";

const incomesData = [
    {
        id: 1,
        description: "Salário Principal",
        category: "Salário",
        value: 5000,
        date: "01/01/2024",
        type: "Recorrente",
    },
    {
        id: 2,
        description: "Projeto Freelance",
        category: "Freelance",
        value: 800,
        date: "12/01/2024",
        type: "Única",
    },
    {
        id: 3,
        description: "Dividendos",
        category: "Investimentos",
        value: 150,
        date: "15/01/2024",
        type: "Recorrente",
    },
    {
        id: 4,
        description: "Aluguel Apartamento",
        category: "Aluguel",
        value: 1200,
        date: "05/01/2024",
        type: "Recorrente",
    },
];

const Incomes = () => {
    const [incomes, setIncomes] = useState(incomesData);

    const totalMonthly = incomes.reduce((acc, cur) => acc + cur.value, 0);
    const recurringCount = incomes.filter((i) => i.type === "Recorrente").length;
    const uniqueCount = incomes.filter((i) => i.type === "Única").length;

    const handleAddNew = () => {
        alert("Nova receita (funcionalidade a implementar)");
    };

    const handleEdit = (id: number) => {
        alert(`Editar receita ${id} (funcionalidade a implementar)`);
    };

    const handleDelete = (id: number) => {
        if (!confirm("Deseja realmente excluir esta receita?")) return;
        setIncomes((prev) => prev.filter((i) => i.id !== id));
    };

    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between space-y-2">
                <div className="flex items-center space-x-2">
                    <h2 className="text-3xl font-bold tracking-tight">Receitas</h2>
                </div>
                {/* <button
                    type="button"
                    className="ring-offset-background focus-visible:outline-hidden focus-visible:ring-ring inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2"
                    onClick={handleAddNew}
                    aria-haspopup="dialog"
                    aria-expanded="false"
                    >
                    <Plus className="mr-2 h-4 w-4" 
                />
                    Nova Receita
                </button> */}
            </div>

            <div className="grid gap-4 md:grid-cols-3">
                <div className="rounded-lg border bg-card text-card-foreground shadow-2xs">
                    <div className="flex flex-col space-y-1.5 p-6 pb-2">
                        <h3 className="tracking-tight text-sm font-medium">Total Mensal</h3>
                    </div>
                    <div className="p-6 pt-0">
                        <div className="text-2xl font-bold text-green-600">
                        R$&nbsp;{totalMonthly.toFixed(2).replace(".", ",")}
                        </div>
                    </div>
                </div>

                <div className="rounded-lg border bg-card text-card-foreground shadow-2xs">
                    <div className="flex flex-col space-y-1.5 p-6 pb-2">
                        <h3 className="tracking-tight text-sm font-medium">
                        Receitas Recorrentes
                        </h3>
                    </div>
                    <div className="p-6 pt-0">
                        <div className="text-2xl font-bold">{recurringCount}</div>
                    </div>
                </div>

                <div className="rounded-lg border bg-card text-card-foreground shadow-2xs">
                    <div className="flex flex-col space-y-1.5 p-6 pb-2">
                        <h3 className="tracking-tight text-sm font-medium">Receitas Únicas</h3>
                    </div>
                    <div className="p-6 pt-0">
                        <div className="text-2xl font-bold">{uniqueCount}</div>
                    </div>
                </div>
            </div>

            <div className="rounded-lg border bg-card text-card-foreground shadow-2xs">
                <div className="flex flex-col space-y-1.5 p-6">
                    <h3 className="text-2xl font-semibold leading-none tracking-tight">
                        Suas Receitas
                    </h3>
                    <p className="text-sm text-muted-foreground">
                        Gerencie todas as suas fontes de receita
                    </p>
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
                                {incomes.map(({ id, description, category, value, date, type }) => (
                                <tr
                                    key={id}
                                    className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted"
                                >
                                    <td className="p-4 align-middle [&:has([role=checkbox])]:pr-0 font-medium">
                                    {description}
                                    </td>
                                    <td className="p-4 align-middle [&:has([role=checkbox])]:pr-0">
                                    {category}
                                    </td>
                                    <td className="p-4 align-middle [&:has([role=checkbox])]:pr-0 text-green-600 font-medium">
                                    R$&nbsp;{value.toFixed(2).replace(".", ",")}
                                    </td>
                                    <td className="p-4 align-middle [&:has([role=checkbox])]:pr-0">
                                    {date}
                                    </td>
                                    <td className="p-4 align-middle [&:has([role=checkbox])]:pr-0">
                                    <span
                                        className={`px-2 py-1 rounded-full text-xs ${
                                        type === "Recorrente"
                                            ? "bg-blue-100 text-blue-800"
                                            : "bg-gray-100 text-gray-800"
                                        }`}
                                    >
                                        {type}
                                    </span>
                                    </td>
                                    <td className="p-4 align-middle [&:has([role=checkbox])]:pr-0 text-right">
                                    <div className="flex justify-end space-x-2">
                                        <button
                                        onClick={() => handleEdit(id)}
                                        className="ring-offset-background focus-visible:outline-hidden focus-visible:ring-ring inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-9 rounded-md px-3"
                                        aria-label="Editar receita"
                                        >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="24"
                                            height="24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            viewBox="0 0 24 24"
                                            className="lucide lucide-square-pen h-4 w-4"
                                        >
                                            <path d="M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                                            <path d="M18.375 2.625a2.121 2.121 0 1 1 3 3L12 15l-4 1 1-4Z"></path>
                                        </svg>
                                        </button>
                                        <button
                                        onClick={() => handleDelete(id)}
                                        className="ring-offset-background focus-visible:outline-hidden focus-visible:ring-ring inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-9 rounded-md px-3"
                                        aria-label="Excluir receita"
                                        >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="24"
                                            height="24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            viewBox="0 0 24 24"
                                            className="lucide lucide-trash2 h-4 w-4"
                                        >
                                            <path d="M3 6h18"></path>
                                            <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path>
                                            <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path>
                                            <line x1="10" y1="11" x2="10" y2="17"></line>
                                            <line x1="14" y1="11" x2="14" y2="17"></line>
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

export default Incomes;
