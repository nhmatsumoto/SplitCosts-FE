const InvitationsTable = () => {
  return (
    <div className="rounded-xl border p-4">
      <h2 className="mb-2 text-lg font-semibold">Convites</h2>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="text-left">
              <th className="py-2">Email</th>
              <th className="py-2">Data</th>
              <th className="py-2">Status</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-t">
              <td className="py-2">maria@example.com</td>
              <td className="py-2">19/07/2025</td>
              <td className="py-2 text-yellow-600">Pendente</td>
            </tr>
            {/* Mais convites aqui */}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default InvitationsTable;
