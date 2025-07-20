import ExpensesSummary from "../../components/expenses/ExpensesSummary";
import ExpensesTable from "../../components/expenses/ExpensesTable";
import Header from "../../components/Header";

const Expenses = () => {
    function handleButtonClick(): void {
        throw new Error("Function not implemented.");
    }

    return (
        <div className="space-y-6">
            <Header
                title="Expenses"
                description="Gerencie as despesas."
                buttonLabel="Adicionar Despesa"
                onButtonClick={() => handleButtonClick()}
                buttonClassName="bg-emerald-600 text-white px-4 py-2 rounded hover:bg-emerald-700"
            />
            <ExpensesSummary total={0} paid={0} pending={0} />
            <ExpensesTable />
        </div>
    );
};

export default Expenses;
