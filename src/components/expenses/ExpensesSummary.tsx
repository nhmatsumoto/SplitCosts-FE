import { formatCurrency } from "../../hooks/useCurrencyFormatter";
import MetricCard from "../MetricCard";

type ExpenseStat = {
  label: string;
  value: number;
  color: string;
  description?: string;
};

type ExpensesSummaryProps = {
  total: number;
  paid: number;
  pending: number;
};

const ExpensesSummary = ({ total, paid, pending }: ExpensesSummaryProps) => {
  const stats: ExpenseStat[] = [
    { label: "Despesas totais", value: total, color: "text-gray-800" },
    { label: "Pagas", value: paid, color: "text-emerald-600" },
    { label: "Pendentes", value: pending, color: "text-rose-600" },
  ];

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
      {stats.map((item, idx) => (
        <MetricCard
          key={idx}
          title={item.label}
          value={formatCurrency(item.value)}
          valueColor={item.color}
        />
      ))}
    </div>
  );
};

export default ExpensesSummary;
