type IncomeItem = {
  date: string;
  source: string;
  amount: number;
};

type IncomeTableProps = {
  data: IncomeItem[];
  onEdit?: (item: IncomeItem) => void;
  onDelete?: (item: IncomeItem) => void;
};

const formatCurrency = (value: number) =>
  value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

const IncomeTable = ({ data, onEdit, onDelete }: IncomeTableProps) => {
  return (
    <div className="p-6 pt-0">
      <h4 className="text-lg font-semibold mb-4">Detalhes das Entradas</h4>
      <div className="border rounded-lg overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-gray-100 text-left">
            <tr>
              <th className="px-4 py-2">Data</th>
              <th className="px-4 py-2">Origem</th>
              <th className="px-4 py-2">Valor</th>
              {(onEdit || onDelete) && <th className="px-4 py-2">Ações</th>}
            </tr>
          </thead>
          <tbody>
            {data.map((item, idx) => (
              <tr key={idx} className="border-t">
                <td className="px-4 py-2">{item.date}</td>
                <td className="px-4 py-2">{item.source}</td>
                <td className="px-4 py-2">{formatCurrency(item.amount)}</td>
                {(onEdit || onDelete) && (
                  <td className="px-4 py-2 space-x-2">
                    {onEdit && (
                      <button
                        onClick={() => onEdit(item)}
                        className="text-blue-600 hover:underline"
                      >
                        Editar
                      </button>
                    )}
                    {onDelete && (
                      <button
                        onClick={() => onDelete(item)}
                        className="text-red-600 hover:underline"
                      >
                        Excluir
                      </button>
                    )}
                  </td>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default IncomeTable;
