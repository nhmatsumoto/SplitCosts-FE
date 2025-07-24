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

const NotificationSettings = ({
    emailNotifications,
    setEmailNotifications,
    budgetAlerts,
    setBudgetAlerts,
    billReminders,
    setBillReminders,
    weeklyReports,
    setWeeklyReports,
}: Props) => {
    return (
        <div className="rounded-lg border bg-card text-card-foreground shadow-2xs">
            <div className="flex flex-col space-y-1.5 p-6">
                <div className="flex items-center space-x-2">
                    <Bell size={16} />
                    <h3 className="text-2xl font-semibold leading-none tracking-tight">Notificações</h3>
                </div>
                <p className="text-sm text-muted-foreground">Configure como você deseja receber notificações</p>
            </div>
            <div className="p-6 pt-0 space-y-4">
                <Switch label="Notificações por Email" description="Receba resumos mensais e alertas importantes" checked={emailNotifications} onChange={setEmailNotifications} />
                <Switch label="Alertas de Orçamento" description="Seja notificado quando ultrapassar limites de gastos" checked={budgetAlerts} onChange={setBudgetAlerts} />
                <Switch label="Lembretes de Contas" description="Receba lembretes de contas próximas do vencimento" checked={billReminders} onChange={setBillReminders} />
                <Switch label="Relatórios Semanais" description="Resumo semanal das suas finanças" checked={weeklyReports} onChange={setWeeklyReports} />
            </div>
        </div>
    );
};

const Switch = ({ label, description, checked, onChange }: any) => (
    <div className="flex items-center justify-between">
        <div className="space-y-0.5">
            <label className="text-sm font-medium">{label}</label>
            <p className="text-sm text-muted-foreground">{description}</p>
        </div>
        <button
            role="switch"
            aria-checked={checked}
            className={`peer inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full border-2 transition-colors ${checked ? 'bg-primary' : 'bg-input'}`}
            onClick={() => onChange(!checked)}
        >
            <span className={`block h-5 w-5 rounded-full bg-background shadow-lg transition-transform ${checked ? 'translate-x-5' : 'translate-x-0'}`} />
        </button>
    </div>
);

export default NotificationSettings;
