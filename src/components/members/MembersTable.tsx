const MembersTable = () => {
  return (
    <div className="rounded-xl border p-4">
      <h2 className="mb-2 text-lg font-semibold">Membros</h2>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="text-left">
              <th className="py-2">Nome</th>
              <th className="py-2">Função</th>
              <th className="py-2">Status</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-t">
              <td className="py-2">João Silva</td>
              <td className="py-2">Administrador</td>
              <td className="py-2 text-green-600">Ativo</td>
            </tr>
            {/* Mais membros aqui */}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MembersTable;
