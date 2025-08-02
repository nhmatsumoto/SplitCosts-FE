import ExpensesSummary from "../../components/expenses/ExpensesSummary";
import ExpensesTable from "../../components/expenses/ExpensesTable";
import Header from "../../components/layout/Header";
import type { ExpenseItem } from "../../types/ExpenseItem";

const Expenses = () => {

    const AddExpense = () => {
        throw new Error("Function not implemented.");
    }

    const EditExpense = () => {

        alert('Edit functionality not implemented');
    }

    const defaultData: ExpenseItem[] = [
        { id: '1', name: 'Energia elétrica', amount: 320.0, status: 'Pago' },
        { id: '2', name: 'Internet', amount: 120.0, status: 'Pendente' },
    ];

    return (
        <div className="space-y-6">
            <Header
                title="Expenses"
                description="Gerencie as despesas."
                buttonLabel="Adicionar Despesa"
                onButtonClick={() => AddExpense()}
                buttonClassName="bg-emerald-600 text-white px-4 py-2 rounded hover:bg-emerald-700"
            />
            <ExpensesSummary total={0} paid={0} pending={0} />
            <ExpensesTable data={defaultData} onEdit={EditExpense} />
        </div>
    );
};

export default Expenses;
