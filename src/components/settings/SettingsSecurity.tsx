import { Shield } from 'lucide-react';

const SecuritySettings = () => (
    <div className="rounded-lg border bg-card text-card-foreground shadow-2xs">
        <div className="flex flex-col space-y-1.5 p-6">
            <div className="flex items-center space-x-2">
                <Shield size={16} />
                <h3 className="text-2xl font-semibold leading-none tracking-tight">Segurança</h3>
            </div>
            <p className="text-sm text-muted-foreground">Gerencie a segurança da sua conta</p>
        </div>
        <div className="p-6 pt-0 space-y-4">
            <Input label="Senha Atual" id="current-password" type="password" />
            <Input label="Nova Senha" id="new-password" type="password" />
            <Input label="Confirmar Nova Senha" id="confirm-password" type="password" />
            <button className="bg-primary text-primary-foreground h-10 px-4 py-2 rounded-md">Alterar Senha</button>
            <hr className="shrink-0 bg-border h-px w-full" />
            <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                    <label className="text-sm font-medium text-red-600">Autenticação de Dois Fatores</label>
                    <p className="text-sm text-muted-foreground">Adicione uma camada extra de segurança à sua conta</p>
                </div>
                <button className="border h-10 px-4 py-2 rounded-md">Configurar</button>
            </div>
        </div>
    </div>
);

const Input = ({ label, id, type }: any) => (
    <div className="space-y-2">
        <label htmlFor={id} className="text-sm font-medium">{label}</label>
        <input id={id} type={type} className="flex h-10 w-full rounded-md border px-3 py-2 text-sm" />
    </div>
);

export default SecuritySettings;
