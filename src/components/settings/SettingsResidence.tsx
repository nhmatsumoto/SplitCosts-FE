import { Home, ChevronDown } from 'lucide-react';

interface Props {
    residenceName: string;
    setResidenceName: (value: string) => void;
    address: string;
    setAddress: (value: string) => void;
}

const SettingsResidence = ({ residenceName, setResidenceName, address, setAddress }: Props) => (
    <div className="rounded-xl border border-gray-100 bg-white shadow-lg transition-shadow hover:shadow-xl max-w-2xl mx-auto">
        <div className="p-6 border-b border-gray-100">
            <div className="flex items-center space-x-3">
                <Home size={20} className="text-indigo-600" />
                <h3 className="text-2xl font-bold text-gray-900 tracking-tight">Configurações da Residência</h3>
            </div>
            <p className="mt-1 text-sm text-gray-500">Gerencie as informações da sua residência</p>
        </div>
        <div className="p-6 space-y-6">
            <div className="grid gap-4 md:grid-cols-2">
                <Input label="Nome da Residência" id="residence-name" value={residenceName} onChange={setResidenceName} />
                <div className="space-y-2">
                    <label htmlFor="currency" className="text-sm font-medium text-gray-700">Moeda</label>
                    <div className="relative">
                        <select
                            id="currency"
                            className="appearance-none w-full h-11 rounded-lg border border-gray-300 bg-white px-3 py-2.5 text-sm text-gray-900 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
                        >
                            <option value="BRL">Real Brasileiro (R$)</option>
                            <option value="USD">Dólar Americano (US$)</option>
                            <option value="EUR">Euro (€)</option>
                        </select>
                        <ChevronDown size={16} className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 pointer-events-none" />
                    </div>
                </div>
            </div>
            <div className="space-y-2">
                <label htmlFor="address" className="text-sm font-medium text-gray-700">Endereço</label>
                <textarea
                    id="address"
                    className="w-full min-h-[100px] rounded-lg border border-gray-300 px-3 py-2.5 text-sm text-gray-900 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors placeholder-gray-400"
                    placeholder="Digite o endereço completo da residência"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                />
            </div>
            <button className="w-full px-4 py-2.5 text-sm font-medium text-white bg-gradient-to-r from-indigo-600 to-indigo-500 rounded-lg hover:from-indigo-700 hover:to-indigo-600 transition-all focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                Salvar Configurações
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
            placeholder={`Digite ${label.toLowerCase()}`}
            value={value}
            onChange={(e) => onChange(e.target.value)}
        />
    </div>
);

export default SettingsResidence;
