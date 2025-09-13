// IncomesSummary.tsx
import type { LucideIcon } from "lucide-react";
import { useCurrencyFormatter } from "../../hooks/useCurrencyFormatter";
import MetricCard from "../MetricCard";

type IncomeStat = {
    label: string;
    value: number;
    icon?: LucideIcon;
    color?: string;
    description?: string;
};

type IncomeStatsProps = {
    total: number;
    recurring: number;
    unique: number;
};

const IncomesSummary = ({ total, recurring, unique }: IncomeStatsProps) => {

    const { formatCurrency } = useCurrencyFormatter();

    const stats: IncomeStat[] = [
        {
            label: "Total Recebido",
            value: total,
            color: "text-green-600",
            description: "+12% em relação ao mês anterior",
        },
        {
            label: "Recorrentes",
            value: recurring,
            color: "text-blue-600",
            description: "Estável este mês",
        },
        {
            label: "Únicos",
            value: unique,
            color: "text-yellow-600",
            description: "Crescimento de 5%",
        },
    ];

    return (
        <div className="grid grid-cols-1 gap-4 mt-6 sm:grid-cols-3 mb-6">
            {stats.map((item, idx) => (
                <MetricCard
                    key={idx}
                    title={item.label}
                    value={formatCurrency(item.value)}
                    valueColor={item.color}
                    description={item.description}
                    icon={
                        item.icon ? (
                            <item.icon className={`h-6 w-6 ${item.color}`} />
                        ) : undefined
                    }
                />
            ))}
        </div>
    );
};

export default IncomesSummary;
