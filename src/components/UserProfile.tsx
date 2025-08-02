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
    <div className="rounded-xl border border-gray-100 bg-white shadow-lg transition-shadow hover:shadow-xl max-w-2xl mx-auto">
        <div className="p-6 border-b border-gray-100">
            <div className="flex items-center space-x-3">
                <User size={20} className="text-indigo-600" />
                <h3 className="text-2xl font-bold text-gray-900 tracking-tight">Perfil do Usuário</h3>
            </div>
            <p className="mt-1 text-sm text-gray-500">Atualize suas informações pessoais com facilidade</p>
        </div>
        <div className="p-6 space-y-6">
            <div className="flex items-center space-x-4">
                <span className="relative flex shrink-0 overflow-hidden rounded-full h-20 w-20 ring-2 ring-indigo-100 transition-transform hover:scale-105">
                    <img className="aspect-square h-full w-full object-cover" src="/placeholder-user.jpg" alt="User Avatar" />
                </span>
                <button className="px-4 py-2 text-sm font-medium text-indigo-600 bg-indigo-50 rounded-lg hover:bg-indigo-100 transition-colors">
                    Alterar Foto
                </button>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
                <Input label="Nome Completo" id="name" value={userName} onChange={setUserName} />
                <Input label="Email" id="email" type="email" value={userEmail} onChange={setUserEmail} />
                <Input label="Telefone" id="phone" value={userPhone} onChange={setUserPhone} />
                <div className="space-y-2">
                    <label htmlFor="timezone" className="text-sm font-medium text-gray-700">Fuso Horário</label>
                    <div className="relative">
                        <select
                            id="timezone"
                            className="appearance-none w-full h-11 rounded-lg border border-gray-300 bg-white px-3 py-2.5 text-sm text-gray-900 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
                        >
                            <option value="America/Sao_Paulo">São Paulo (GMT-3)</option>
                            <option value="America/New_York">New York (GMT-5)</option>
                            <option value="Europe/London">London (GMT+0)</option>
                        </select>
                        <ChevronDown size={16} className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 pointer-events-none" />
                    </div>
                </div>
            </div>
            <button className="w-full px-4 py-2.5 text-sm font-medium text-white bg-gradient-to-r from-indigo-600 to-indigo-500 rounded-lg hover:from-indigo-700 hover:to-indigo-600 transition-all focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                Salvar Perfil
            </button>
        </div>
    </div>
);

const Input = ({ label, id, type = 'text', value, onChange }: any) => (
    <div className="space-y-2">
        <label htmlFor={id} className="text-sm font-medium text-gray-700">{label}</label>
        <input
            id={id}
            type={type}
            className="w-full h-11 rounded-lg border border-gray-300 px-3 py-2.5 text-sm text-gray-900 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors placeholder-gray-400"
            placeholder={`Digite seu ${label.toLowerCase()}`}
            value={value}
            onChange={(e) => onChange(e.target.value)}
        />
    </div>
);

export default UserProfile;
