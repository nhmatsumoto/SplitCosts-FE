import { Bell } from 'lucide-react';

interface Props {
    emailNotifications: boolean;
    setEmailNotifications: (value: boolean) => void;
    budgetAlerts: boolean;
    setBudgetAlerts: (value: boolean) => void;
    billReminders: boolean;
    setBillReminders: (value: boolean) => void;
    weeklyReports: boolean;
    setWeeklyReports: (value: boolean) => void;
}

const SettingsNotification = ({
    emailNotifications,
    setEmailNotifications,
    budgetAlerts,
    setBudgetAlerts,
    billReminders,
    setBillReminders,
    weeklyReports,
    setWeeklyReports,
}: Props) => (
    <div className="rounded-xl border border-gray-100 bg-white shadow-lg transition-shadow hover:shadow-xl w-full">
        <div className="p-6 border-b border-gray-100">
            <div className="flex items-center space-x-3">
                <Bell size={20} className="text-indigo-600" />
                <h3 className="text-2xl font-bold text-gray-900 tracking-tight">Notificações</h3>
            </div>
            <p className="mt-1 text-sm text-gray-500">Configure como você deseja receber notificações</p>
        </div>
        <div className="p-6 space-y-6">
            <Switch
                label="Notificações por Email"
                description="Receba resumos mensais e alertas importantes"
                checked={emailNotifications}
                onChange={setEmailNotifications}
            />
            <Switch
                label="Alertas de Orçamento"
                description="Seja notificado quando ultrapassar limites de gastos"
                checked={budgetAlerts}
                onChange={setBudgetAlerts}
            />
            <Switch
                label="Lembretes de Contas"
                description="Receba lembretes de contas próximas do vencimento"
                checked={billReminders}
                onChange={setBillReminders}
            />
            <Switch
                label="Relatórios Semanais"
                description="Resumo semanal das suas finanças"
                checked={weeklyReports}
                onChange={setWeeklyReports}
            />


            <div className="flex justify-end">
                <button className="px-4 py-2 text-sm font-medium text-white bg-indigo-600 rounded-lg hover:bg-indigo-700 transition-colors focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                    Salvar Configurações
                </button>
            </div>

        </div>
    </div>
);

interface SwitchProps {
    label: string;
    description: string;
    checked: boolean;
    onChange: (value: boolean) => void;
}

const Switch = ({ label, description, checked, onChange }: SwitchProps) => (
    <div className="flex items-center justify-between py-2">
        <div className="space-y-1">
            <label className="text-sm font-medium text-gray-700">{label}</label>
            <p className="text-sm text-gray-500">{description}</p>
        </div>
        <button
            role="switch"
            aria-checked={checked}
            className={`relative inline-flex h-6 w-11 items-center rounded-full border border-gray-300 transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 ${checked ? 'bg-indigo-600' : 'bg-gray-200'
                }`}
            onClick={() => onChange(!checked)}
        >
            <span
                className={`inline-block h-5 w-5 rounded-full bg-white shadow-md transform transition-transform duration-200 ease-in-out ${checked ? 'translate-x-5' : 'translate-x-0'
                    }`}
            />
        </button>
    </div>
);

export default SettingsNotification;
