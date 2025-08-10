import { type ColumnDef, createColumnHelper } from '@tanstack/react-table';
import GenericTable from '../GenericTable';
import type { ExpenseItem } from '../../types/Expense';

const formatCurrency = (value: number) =>
    value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

const columnHelper = createColumnHelper<ExpenseItem>();

const expenseColumns: ColumnDef<ExpenseItem, any>[] = [
    columnHelper.accessor('name', {
        header: 'Nome',
        cell: (info) => <span className="font-medium text-gray-900">{info.getValue()}</span>,
    }),
    columnHelper.accessor('amount', {
        header: 'Valor',
        cell: (info) => <span className="text-gray-600">{formatCurrency(info.getValue())}</span>,
    }),
    columnHelper.accessor('status', {
        header: 'Status',
        cell: (info) => (
            <span
                className={`inline-flex items-center rounded-full px-2 py-0.5 text-xs font-medium ${info.getValue() === 'Pago'
                    ? 'bg-green-100 text-green-800'
                    : 'bg-red-100 text-red-800'
                    }`}
            >
                {info.getValue()}
            </span>
        ),
    }),
    columnHelper.display({
        id: 'actions',
        header: '',
        cell: ({ row, table }) => (
            <div className="text-right text-sm">
                <button
                    className="text-blue-600 hover:underline"
                    onClick={() => (table.options.meta as any)?.onEdit?.(row.original)}
                >
                    Editar
                </button>
            </div>
        ),
    }),
];

interface ExpensesTableProps {
    data?: ExpenseItem[];
    onEdit?: (item: ExpenseItem) => void;
}

const ExpensesTable = ({ data, onEdit }: ExpensesTableProps) => {

    return (
        <GenericTable
            data={data || []}
            columns={expenseColumns}
            title="Lista de despesas"
            onEdit={onEdit}
        />
    );
};

export default ExpensesTable;
