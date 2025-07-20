import { useState } from "react";
import DashboardModals from "../../components/dashboard/DashboardModals";
import DashboardMetricCards from "../../components/dashboard/DashboardMetricCards";
import DashboardCharts from "../../components/DashboardCharts";
import RecentTransactions from "../../components/dashboard/RecentTransactions";
import ExpensesByCategory from "../../components/dashboard/ExpensesByCategory";
import Header from "../../components/Header";

const Dashboard = () => {
    const [modalType, setModalType] = useState<"income" | "expense" | "inviteUser" | "residence" | "investment" | null>(null);
    const closeModal = () => setModalType(null);

    const handleButtonClick = () => {
        alert("Button clicked");
    }

    return (
        <>
            <Header
                title="Dashboard"
                description="Gerencie suas finanças de forma eficiente"
                onButtonClick={() => handleButtonClick()}
                buttonClassName="bg-emerald-600 text-white px-4 py-2 rounded hover:bg-emerald-700"
            />

            <DashboardMetricCards />
            <DashboardCharts />
            <RecentTransactions />
            <ExpensesByCategory />
            <DashboardModals modalType={modalType} closeModal={closeModal} />
        </>
    );
};

export default Dashboard;
