import ExpensesHeader from "../../components/expenses/ExpensesHeader";
import ExpensesSummary from "../../components/expenses/ExpensesSummary";
import ExpensesTable from "../../components/expenses/ExpensesTable";

const Expenses = () => {
    return (
        <div className="space-y-6">
            <ExpensesHeader />
            <ExpensesSummary total={0} paid={0} pending={0} />
            <ExpensesTable />
        </div>
    );
};

export default Expenses;
