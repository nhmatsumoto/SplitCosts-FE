import { Shield } from 'lucide-react';

interface Props {
    currentPassword: string;
    setCurrentPassword: (value: string) => void;
    newPassword: string;
    setNewPassword: (value: string) => void;
    confirmPassword: string;
    setConfirmPassword: (value: string) => void;
    onChangePassword?: () => void;
    onConfigure2FA?: () => void;
}

const SecuritySettings = ({
    currentPassword,
    setCurrentPassword,
    newPassword,
    setNewPassword,
    confirmPassword,
    setConfirmPassword,
    onChangePassword,
    onConfigure2FA,
}: Props) => (
    <div className="rounded-xl border border-gray-100 bg-white shadow-lg transition-shadow hover:shadow-xl max-w-2xl mx-auto">
        <div className="p-6 border-b border-gray-100">
            <div className="flex items-center space-x-3">
                <Shield size={20} className="text-indigo-600" />
                <h3 className="text-2xl font-bold text-gray-900 tracking-tight">Segurança</h3>
            </div>
            <p className="mt-1 text-sm text-gray-500">Gerencie a segurança da sua conta</p>
        </div>
        <div className="p-6 space-y-6">
            <div className="grid gap-4 md:grid-cols-2">
                <Input
                    label="Senha Atual"
                    id="current-password"
                    type="password"
                    value={currentPassword}
                    onChange={setCurrentPassword}
                />
                <Input
                    label="Nova Senha"
                    id="new-password"
                    type="password"
                    value={newPassword}
                    onChange={setNewPassword}
                />
                <Input
                    label="Confirmar Nova Senha"
                    id="confirm-password"
                    type="password"
                    value={confirmPassword}
                    onChange={setConfirmPassword}
                    className="md:col-span-2"
                />
            </div>
            <button
                className="w-full px-4 py-2.5 text-sm font-medium text-white bg-gradient-to-r from-indigo-600 to-indigo-500 rounded-lg hover:from-indigo-700 hover:to-indigo-600 transition-all focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                onClick={onChangePassword}
            >
                Alterar Senha
            </button>
            <hr className="border-gray-200" />
            <div className="flex items-center justify-between">
                <div className="space-y-1">
                    <label className="text-sm font-medium text-red-600">Autenticação de Dois Fatores</label>
                    <p className="text-sm text-gray-500">Adicione uma camada extra de segurança à sua conta</p>
                </div>
                <button
                    className="px-4 py-2 text-sm font-medium text-indigo-600 bg-indigo-50 rounded-lg hover:bg-indigo-100 transition-colors"
                    onClick={onConfigure2FA}
                >
                    Configurar
                </button>
            </div>
        </div>
    </div>
);

interface InputProps {
    label: string;
    id: string;
    type?: string;
    value: string;
    onChange: (value: string) => void;
    className?: string;
}

const Input = ({ label, id, type = 'text', value, onChange, className }: InputProps) => (
    <div className={`space-y-2 ${className || ''}`}>
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

export default SecuritySettings;
