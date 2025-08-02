import {
    useReactTable,
    createColumnHelper,
    getCoreRowModel,
    flexRender,
} from '@tanstack/react-table';
import { useState } from 'react';

type Invitation = {
    email: string;
    date: string;
    status: 'Pendente' | 'Aceito' | 'Expirado';
};

const defaultData: Invitation[] = [
    { email: 'maria@example.com', date: '19/07/2025', status: 'Pendente' },
    { email: 'joao@example.com', date: '18/07/2025', status: 'Aceito' },
    { email: 'ana@example.com', date: '17/07/2025', status: 'Expirado' },
];

const columnHelper = createColumnHelper<Invitation>();

const columns = [
    columnHelper.accessor('email', {
        header: () => 'Email',
        cell: (info) => <span className="text-gray-900">{info.getValue()}</span>,
    }),
    columnHelper.accessor('date', {
        header: () => 'Data',
        cell: (info) => <span className="text-gray-600">{info.getValue()}</span>,
    }),
    columnHelper.accessor('status', {
        header: () => 'Status',
        cell: (info) => {
            const value = info.getValue();
            const color =
                value === 'Pendente'
                    ? 'bg-yellow-100 text-yellow-800'
                    : value === 'Aceito'
                        ? 'bg-green-100 text-green-800'
                        : 'bg-gray-100 text-gray-600';
            return (
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${color}`}>
                    {value}
                </span>
            );
        },
    }),
];

const MembersInvitationsTable = () => {
    const [data] = useState(() => [...defaultData]);

    const table = useReactTable({
        data,
        columns,
        getCoreRowModel: getCoreRowModel(),
    });

    return (
        <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <h2 className="mb-4 text-xl font-semibold text-gray-800">Convites</h2>
            <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200 text-sm">
                    <thead className="bg-gray-50">
                        {table.getHeaderGroups().map((headerGroup) => (
                            <tr key={headerGroup.id}>
                                {headerGroup.headers.map((header) => (
                                    <th
                                        key={header.id}
                                        className="px-4 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wide"
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

export default MembersInvitationsTable;
