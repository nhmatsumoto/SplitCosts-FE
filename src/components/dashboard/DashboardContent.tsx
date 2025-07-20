import ExpensesByCategory from "./ExpensesByCategory";
import RecentTransactions from "./RecentTransactions";
import DashboardMetricCards from "./DashboardMetricCards";
import DashboardCharts from "../DashboardCharts";

const DashboardContent = () => (
    <>
        <DashboardMetricCards />
        <DashboardCharts />
        <RecentTransactions />
        <ExpensesByCategory />
    </>
);

export default DashboardContent;
