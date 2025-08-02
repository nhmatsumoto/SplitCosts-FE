import { useState } from "react";
import DashboardModals from "../../components/dashboard/DashboardModals";
import DashboardCharts from "../../components/dashboard/DashboardCharts";
import RecentTransactions from "../../components/dashboard/RecentTransactions";
import ExpensesByCategory from "../../components/dashboard/ExpensesByCategory";
import Header from "../../components/layout/Header";
import MetricCard from "../../components/MetricCard";
import { DollarSign, TrendingDown, TrendingUp, Users } from "lucide-react";
import { useCurrencyFormatter } from "../../hooks/useCurrencyFormatter";
import { useTranslation } from "react-i18next";


const Dashboard = () => {

    const { formatCurrency } = useCurrencyFormatter();
    const { t } = useTranslation();

    const [modalType, setModalType] = useState<"income" | "expense" | "inviteUser" | "residence" | "investment" | null>(null);
    const closeModal = () => setModalType(null);

    const handleButtonClick = () => {
        alert("Button clicked");
    }

    return (
        <>
            <Header
                title={t('dashboard_title')}
                description="Gerencie suas finanças de forma eficiente"
                onButtonClick={() => handleButtonClick()}
                buttonClassName="bg-emerald-600 text-white px-4 py-2 rounded hover:bg-emerald-700"
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 m-6">
                <MetricCard
                    title="Receita Total"
                    value={formatCurrency(100000)}
                    icon={<TrendingUp className="h-6 w-6 text-green-600" />}
                    description="+12% em relação ao mês anterior"
                    valueColor="text-green-700"
                />
                <MetricCard
                    title="Despesas Totais"
                    value={formatCurrency(100000)}
                    icon={<TrendingDown className="h-6 w-6 text-red-600" />}
                    description="+5% em relação ao mês anterior"
                    valueColor="text-red-700"
                />
                <MetricCard
                    title="Saldo Atual"
                    value={formatCurrency(100000)}
                    icon={<DollarSign className="h-6 w-6 text-blue-600" />}
                    description="Disponível para gastos"
                    valueColor="text-blue-700"
                />
                <MetricCard
                    title="Membros Ativos"
                    value={formatCurrency(100000)}
                    icon={<Users className="h-6 w-6 text-purple-600" />}
                    valueColor="text-purple-700"
                />
            </div>

            <DashboardCharts />
            <RecentTransactions />
            <ExpensesByCategory />
            <DashboardModals modalType={modalType} closeModal={closeModal} />
        </>
    );
};

export default Dashboard;
