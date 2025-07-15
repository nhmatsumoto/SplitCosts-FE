type Transaction = {
  description: string;
  category: string;
  date: string;
  amount: number;
};

const transactions: Transaction[] = [
  { description: 'Supermercado', category: 'Alimentação', date: '15/01/2024', amount: -250 },
  { description: 'Salário', category: 'Trabalho', date: '01/01/2024', amount: 5000 },
  { description: 'Conta de Luz', category: 'Utilidades', date: '10/01/2024', amount: -180 },
  { description: 'Aluguel', category: 'Moradia', date: '05/01/2024', amount: -1200 },
  { description: 'Freelance', category: 'Trabalho', date: '12/01/2024', amount: 800 },
];

const formatCurrency = (value: number) =>
  `${value < 0 ? '-' : '+'}R$ ${Math.abs(value).toLocaleString('pt-BR', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })}`;

const RecentTransactions = () => {
  return (
    <div className="bg-white rounded-lg shadow-sm border">
      <div className="flex flex-col space-y-1.5 p-6">
        <h3 className="text-2xl font-semibold leading-none tracking-tight">
          Transações Recentes
        </h3>
        <p className="text-sm text-muted-foreground">
          Suas últimas movimentações financeiras
        </p>
      </div>

      <div className="p-6 pt-0">
        <div className="relative w-full overflow-auto">
          <table className="w-full caption-bottom text-sm">
            <thead className="[&_tr]:border-b">
              <tr className="border-b">
                <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground">
                  Descrição
                </th>
                <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground">
                  Categoria
                </th>
                <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground">
                  Data
                </th>
                <th className="h-12 px-4 align-middle font-medium text-muted-foreground text-right">
                  Valor
                </th>
              </tr>
            </thead>
            <tbody className="[&_tr:last-child]:border-0">
              {transactions.map((tx, idx) => (
                <tr
                  key={idx}
                  className="border-b transition-colors hover:bg-muted/50"
                >
                  <td className="p-4 align-middle font-medium">{tx.description}</td>
                  <td className="p-4 align-middle">{tx.category}</td>
                  <td className="p-4 align-middle">{tx.date}</td>
                  <td
                    className={`p-4 align-middle text-right font-medium ${
                      tx.amount < 0 ? 'text-red-600' : 'text-green-600'
                    }`}
                  >
                    {formatCurrency(tx.amount)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default RecentTransactions;
