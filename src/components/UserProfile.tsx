import { User, ChevronDown } from 'lucide-react';

interface Props {
  userName: string;
  setUserName: (value: string) => void;
  userEmail: string;
  setUserEmail: (value: string) => void;
  userPhone: string;
  setUserPhone: (value: string) => void;
}

const UserProfile = ({ userName, setUserName, userEmail, setUserEmail, userPhone, setUserPhone }: Props) => (
  <div className="rounded-lg border bg-card text-card-foreground shadow-2xs">
    <div className="flex flex-col space-y-1.5 p-6">
      <div className="flex items-center space-x-2">
        <User size={16} />
        <h3 className="text-2xl font-semibold leading-none tracking-tight">Perfil do Usuário</h3>
      </div>
      <p className="text-sm text-muted-foreground">Gerencie suas informações pessoais</p>
    </div>
    <div className="p-6 pt-0 space-y-4">
      <div className="flex items-center space-x-4">
        <span className="relative flex shrink-0 overflow-hidden rounded-full h-20 w-20">
          <img className="aspect-square h-full w-full" src="/placeholder-user.jpg" alt="User Avatar" />
        </span>
        <button className="border h-10 px-4 py-2 rounded-md">Alterar Foto</button>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        <Input label="Nome Completo" id="name" value={userName} onChange={setUserName} />
        <Input label="Email" id="email" type="email" value={userEmail} onChange={setUserEmail} />
        <Input label="Telefone" id="phone" value={userPhone} onChange={setUserPhone} />
        <div className="space-y-2">
          <label htmlFor="timezone" className="text-sm font-medium">Fuso Horário</label>
          <button className="flex h-10 w-full items-center justify-between border rounded-md px-3 py-2 text-sm">
            <span>São Paulo (GMT-3)</span>
            <ChevronDown size={16} />
          </button>
        </div>
      </div>
      <button className="bg-primary text-primary-foreground h-10 px-4 py-2 rounded-md">Salvar Perfil</button>
    </div>
  </div>
);

const Input = ({ label, id, type = 'text', value, onChange }: any) => (
  <div className="space-y-2">
    <label htmlFor={id} className="text-sm font-medium">{label}</label>
    <input
      id={id}
      type={type}
      className="flex h-10 w-full rounded-md border px-3 py-2 text-sm"
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  </div>
);

export default UserProfile;
