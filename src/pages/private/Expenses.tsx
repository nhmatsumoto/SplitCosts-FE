import { useState } from "react";
import ExpensesSummary from "../../components/expenses/ExpensesSummary";
import ExpensesTable from "../../components/expenses/ExpensesTable";
import RegisterExpenseModal from "../../components/expenses/RegisterExpenseModal";
import Header from "../../components/layout/Header";
import type { Expense } from "../../types/Expense";

const Expenses = () => {

    const [modalType, setModalType] = useState<"expense" | null>(null);
    const closeModal = () => setModalType(null);

    const EditExpense = () => {

        alert('Edit functionality not implemented');
    }

    const defaultData: Expense[] = [
        { id: '1', name: 'Energia elétrica', amount: 320.0, status: 'Pago' },
        { id: '2', name: 'Internet', amount: 120.0, status: 'Pendente' },
    ];

    return (
        <div className="space-y-6">
            <Header
                title="Expenses"
                description="Gerencie as despesas."
                buttonLabel="Adicionar Despesa"
                onButtonClick={() => setModalType("expense")}
                buttonClassName="bg-emerald-600 text-white px-4 py-2 rounded hover:bg-emerald-700"
            />
            <ExpensesSummary total={1203} paid={43430} pending={44} />
            <ExpensesTable data={defaultData} onEdit={EditExpense} />
            <RegisterExpenseModal 

                modalType={modalType} // Replace with actual modal type state
                closeModal={() => closeModal()} // Replace with actual close modal function
            />
        </div>
    );
};

export default Expenses;
