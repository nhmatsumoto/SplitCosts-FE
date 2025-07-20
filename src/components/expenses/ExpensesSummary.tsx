type ExpenseStat = {
  label: string;
  value: number;
  color: string;
};

type ExpensesSummaryProps = {
  total: number;
  paid: number;
  pending: number;
};

const formatCurrency = (value: number) =>
  value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

const ExpensesSummary = ({ total, paid, pending }: ExpensesSummaryProps) => {
  const stats: ExpenseStat[] = [
    { label: 'Despesas totais', value: total, color: 'text-gray-800' },
    { label: 'Pagas', value: paid, color: 'text-emerald-600' },
    { label: 'Pendentes', value: pending, color: 'text-rose-600' },
  ];

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
      {stats.map((item, idx) => (
        <div
          key={idx}
          className="rounded-lg border bg-white text-card-foreground shadow-sm p-4"
        >
          <div className="text-sm text-muted-foreground">{item.label}</div>
          <div className={`text-lg font-semibold ${item.color}`}>
            {formatCurrency(item.value)}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ExpensesSummary;
