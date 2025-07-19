import { Home, ChevronDown } from 'lucide-react';

interface Props {
  residenceName: string;
  setResidenceName: (value: string) => void;
  address: string;
  setAddress: (value: string) => void;
}

const ResidenceSettings = ({ residenceName, setResidenceName, address, setAddress }: Props) => (
  <div className="rounded-lg border bg-card text-card-foreground shadow-2xs">
    <div className="flex flex-col space-y-1.5 p-6">
      <div className="flex items-center space-x-2">
        <Home size={16} />
        <h3 className="text-2xl font-semibold leading-none tracking-tight">Configurações da Residência</h3>
      </div>
      <p className="text-sm text-muted-foreground">Gerencie as informações da sua residência</p>
    </div>
    <div className="p-6 pt-0 space-y-4">
      <div className="grid gap-4 md:grid-cols-2">
        <Input label="Nome da Residência" id="residence-name" value={residenceName} onChange={setResidenceName} />
        <div className="space-y-2">
          <label htmlFor="currency" className="text-sm font-medium">Moeda</label>
          <button className="flex h-10 w-full items-center justify-between border rounded-md px-3 py-2 text-sm">
            <span>Real Brasileiro (R$)</span>
            <ChevronDown size={16} />
          </button>
        </div>
      </div>
      <div className="space-y-2">
        <label htmlFor="address" className="text-sm font-medium">Endereço</label>
        <textarea
          id="address"
          className="w-full min-h-[80px] rounded-md border px-3 py-2 text-sm"
          placeholder="Endereço completo da residência"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
      </div>
      <button className="bg-primary text-primary-foreground h-10 px-4 py-2 rounded-md">Salvar Configurações</button>
    </div>
  </div>
);

const Input = ({ label, id, value, onChange }: any) => (
  <div className="space-y-2">
    <label htmlFor={id} className="text-sm font-medium">{label}</label>
    <input
      id={id}
      className="flex h-10 w-full rounded-md border px-3 py-2 text-sm"
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  </div>
);

export default ResidenceSettings;
