import {
  useReactTable,
  createColumnHelper,
  getCoreRowModel,
  flexRender,
} from '@tanstack/react-table';
import { useState } from 'react';

type Member = {
  name: string;
  role: string;
  status: 'Ativo' | 'Inativo' | 'Pendente';
};

const defaultData: Member[] = [
  { name: 'João Silva', role: 'Administrador', status: 'Ativo' },
  { name: 'Maria Souza', role: 'Editor', status: 'Inativo' },
  { name: 'Carlos Lima', role: 'Visualizador', status: 'Pendente' },
];

const columnHelper = createColumnHelper<Member>();

const columns = [
  columnHelper.accessor('name', {
    header: () => 'Nome',
    cell: (info) => <span className="text-gray-900">{info.getValue()}</span>,
  }),
  columnHelper.accessor('role', {
    header: () => 'Função',
    cell: (info) => <span className="text-gray-600">{info.getValue()}</span>,
  }),
  columnHelper.accessor('status', {
    header: () => 'Status',
    cell: (info) => {
      const value = info.getValue();
      const color =
        value === 'Ativo'
          ? 'bg-green-100 text-green-800'
          : value === 'Pendente'
          ? 'bg-yellow-100 text-yellow-800'
          : 'bg-gray-100 text-gray-600';
      return (
        <span className={`px-2 py-1 rounded-full text-xs font-medium ${color}`}>
          {value}
        </span>
      );
    },
  }),
];

const MembersTable = () => {
  const [data] = useState(() => [...defaultData]);

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-4 md:p-6 shadow-sm w-full">
      <h2 className="mb-4 text-lg md:text-xl font-semibold text-gray-800">Membros</h2>
      <div className="w-full overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200 text-sm">
          <thead className="bg-gray-50">
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <th
                    key={header.id}
                    className="px-4 py-3 text-left text-xs font-semibold text-gray-500 uppercase whitespace-nowrap"
                  >
                    {flexRender(header.column.columnDef.header, header.getContext())}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody className="bg-white divide-y divide-gray-100">
            {table.getRowModel().rows.map((row) => (
              <tr key={row.id} className="hover:bg-gray-50 transition-colors">
                {row.getVisibleCells().map((cell) => (
                  <td key={cell.id} className="px-4 py-3 whitespace-nowrap">
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MembersTable;
