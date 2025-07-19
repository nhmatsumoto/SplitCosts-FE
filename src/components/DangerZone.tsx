import { Trash } from 'lucide-react';

const DangerZone = () => (
  <div className="rounded-lg border bg-card text-card-foreground shadow-2xs border-red-200">
    <div className="flex flex-col space-y-1.5 p-6">
      <div className="flex items-center space-x-2">
        <Trash size={16} className="text-red-600" />
        <h3 className="text-2xl font-semibold leading-none tracking-tight text-red-600">Zona de Perigo</h3>
      </div>
      <p className="text-sm text-muted-foreground">Ações irreversíveis que afetam sua conta</p>
    </div>
    <div className="p-6 pt-0 space-y-4">
      <DangerAction label="Excluir Residência" description="Remove permanentemente esta residência e todos os dados associados" />
      <DangerAction label="Excluir Conta" description="Remove permanentemente sua conta e todos os dados" />
    </div>
  </div>
);

const DangerAction = ({ label, description }: any) => (
  <div className="flex items-center justify-between p-4 border border-red-200 rounded-lg">
    <div className="space-y-0.5">
      <label className="text-sm font-medium text-red-600">{label}</label>
      <p className="text-sm text-muted-foreground">{description}</p>
    </div>
    <button className="bg-destructive text-destructive-foreground h-10 px-4 py-2 rounded-md">Excluir</button>
  </div>
);

export default DangerZone;
