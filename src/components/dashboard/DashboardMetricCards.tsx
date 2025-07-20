import { TrendingUp, TrendingDown, DollarSign, Users } from "lucide-react";
import MetricCard from "./DashboardMetricCard";

const DashboardMetricCards = () => (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 m-6">
        <MetricCard
            title="Receita Total"
            value="R$ 5.800,00"
            icon={<TrendingUp className="h-6 w-6 text-green-600" />}
            description="+12% em relação ao mês anterior"
            valueColor="text-green-700"
        />
        <MetricCard
            title="Despesas Totais"
            value="R$ 3.000,00"
            icon={<TrendingDown className="h-6 w-6 text-red-600" />}
            description="+5% em relação ao mês anterior"
            valueColor="text-red-700"
        />
        <MetricCard
            title="Saldo Atual"
            value="R$ 2.800,00"
            icon={<DollarSign className="h-6 w-6 text-blue-600" />}
            description="Disponível para gastos"
            valueColor="text-blue-700"
        />
        <MetricCard
            title="Membros Ativos"
            value={3}
            icon={<Users className="h-6 w-6 text-purple-600" />}
            valueColor="text-purple-700"
        />
    </div>
);

export default DashboardMetricCards;
