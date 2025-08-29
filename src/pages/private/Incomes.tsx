import { useState } from "react";
import IncomesSummary from "../../components/incomes/IncomesSummary";
import IncomeTable from "../../components/incomes/IncomeTable";
import Header from "../../components/layout/Header";
import Modal from "../../components/Modal";
import IncomeForm from "../../components/forms/IncomeForm";

type IncomeItem = {
    id: number;
    description: string;
    category: string;
    value: number;
    date: string;
    type: "Recorrente" | "Única";
};


const initialData: IncomeItem[] = [
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
    const [incomes, setIncomes] = useState<IncomeItem[]>(initialData);
    
    const totalMonthly = incomes.reduce((acc, cur) => acc + cur.value, 0);
    const recurringCount = incomes.filter((i) => i.type === "Recorrente").length;
    const uniqueCount = incomes.filter((i) => i.type === "Única").length;

    // Modal state
    const [isOpen, setIsOpen] = useState(false);

    const handleOpen = () => setIsOpen(true);
    const handleClose = () => setIsOpen(false);


    const handleEdit = (item: IncomeItem) => {
        const newDescription = prompt("Editar descrição:", item.description);
        const newValue = prompt("Editar valor:", item.value.toString());

        if (newDescription && newValue) {
            setIncomes((prev) =>
                prev.map((entry) =>
                    entry.id === item.id
                        ? { ...entry, description: newDescription, value: parseFloat(newValue) }
                        : entry
                )
            );
        }
    };

    const handleDelete = (item: IncomeItem) => {
        if (confirm(`Deseja excluir "${item.description}"?`)) {
            setIncomes((prev) => prev.filter((entry) => entry.id !== item.id));
        }
    };

    return (
        <>
            <Header
                title="Incomes"
                description="Registre e gerencie suas receitas"
                buttonLabel="Add Income"
                onButtonClick={() => handleOpen()}
                buttonClassName="bg-emerald-600 text-white px-4 py-2 rounded hover:bg-emerald-700"
            />

            <IncomesSummary
                total={totalMonthly}
                recurring={recurringCount}
                unique={uniqueCount}
            />

            <IncomeTable
                data={incomes.map(({ description, value, date }) => ({
                    source: description,
                    amount: value,
                    date,
                }))}
                onEdit={(item) => {
                    const target = incomes.find(
                        (i) =>
                            i.description === item.source &&
                            i.date === item.date &&
                            i.value === item.amount
                    );
                    if (target) handleEdit(target);
                }}
                onDelete={(item) => {
                    const target = incomes.find(
                        (i) =>
                            i.description === item.source &&
                            i.date === item.date &&
                            i.value === item.amount
                    );
                    if (target) handleDelete(target);
                }}
            />
            
            <Modal
                isOpen={isOpen}
                onClose={handleClose}
                title="Adicionar Receita"
            >
                <IncomeForm onSubmit={(data) => console.log(data)} />
            </Modal>
        </>
    );
};

export default Incomes;
