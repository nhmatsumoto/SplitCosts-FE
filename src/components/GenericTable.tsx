import { type ColumnDef, flexRender, getCoreRowModel, useReactTable } from '@tanstack/react-table';

interface GenericTableProps<T> {
    data: T[];
    columns: ColumnDef<T, any>[];
    title: string;
    onEdit?: (item: T) => void;
    onDelete?: (item: T) => void;
}

const GenericTable = <T,>({ data, columns, title, onEdit, onDelete }: GenericTableProps<T>) => {
    const table = useReactTable({
        data,
        columns,
        getCoreRowModel: getCoreRowModel(),
        meta: {
            onEdit,
            onDelete,
        },
    });

    return (
        <div className="rounded-lg border border-gray-100 bg-white p-6 shadow-sm">
            <h4 className="text-xl font-semibold text-gray-800 mb-4">{title}</h4>
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
                                        {header.isPlaceholder ? null : flexRender(header.column.columnDef.header, header.getContext())}
                                    </th>
                                ))}
                            </tr>
                        ))}
                    </thead>
                    <tbody className="divide-y divide-gray-100 bg-white">
                        {table.getRowModel().rows.map((row) => (
                            <tr key={row.id} className="hover:bg-gray-50 transition-colors">
                                {row.getVisibleCells().map((cell) => (
                                    <td key={cell.id} className="px-4 py-3 whitespace-nowrap text-gray-700">
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

export default GenericTable;
