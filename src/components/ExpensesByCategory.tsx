type CategoryExpense = {
  label: string;
  amount: number;
  percent: number; // 0–100
};

const data: CategoryExpense[] = [
  { label: 'Moradia', amount: 1200, percent: 60 },
  { label: 'Alimentação', amount: 600, percent: 80 },
  { label: 'Transporte', amount: 450, percent: 85 },
  { label: 'Utilidades', amount: 300, percent: 90 },
  { label: 'Outros', amount: 450, percent: 85 },
];

const formatCurrency = (value: number) =>
  value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

const ExpensesByCategory = () => {
  return (
    <div className="bg-white rounded-lg shadow-sm border">
      <div className="flex flex-col space-y-1.5 p-6">
        <h3 className="text-2xl font-semibold leading-none tracking-tight">
          Despesas por Categoria
        </h3>
        <p className="text-sm text-muted-foreground">
          Distribuição dos seus gastos mensais
        </p>
      </div>

      <div className="p-6 pt-0 space-y-4">
        {data.map((item, idx) => (
          <div key={idx} className="space-y-2">
            <div className="flex items-center justify-between text-sm">
              <span className="font-medium">{item.label}</span>
              <span className="text-muted-foreground">
                {formatCurrency(item.amount)}
              </span>
            </div>
            <div
              role="progressbar"
              aria-valuemin={0}
              aria-valuemax={100}
              aria-valuenow={item.percent}
              className="relative w-full overflow-hidden rounded-full bg-gray-200 h-2"
            >
              <div
                className="h-full bg-blue-600 transition-all"
                style={{ width: `${item.percent}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExpensesByCategory;
