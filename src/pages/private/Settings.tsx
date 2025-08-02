import { useState } from 'react';
import axios from 'axios';
import { DollarSign, Globe, ChevronDown } from 'lucide-react';
import UserProfile from '../../components/UserProfile';
import ResidenceSettings from '../../components/settings/SettingsResidence';
import NotificationSettings from '../../components/settings/SettingsNotification';
import DangerZone from '../../components/settings/DangerZone';
import SecuritySettings from '../../components/settings/SecuritySettings';
import Header from '../../components/layout/Header';


interface CurrencySettingsProps {
    currency: string;
    setCurrency: (value: string) => void;
}

const CurrencySettings = ({ currency, setCurrency }: CurrencySettingsProps) => (
    <div className="rounded-xl border border-gray-100 bg-white shadow-lg transition-shadow hover:shadow-xl">
        <div className="p-6 border-b border-gray-100">
            <div className="flex items-center space-x-3">
                <DollarSign size={20} className="text-indigo-600" />
                <h3 className="text-2xl font-bold text-gray-900 tracking-tight">Configurações de Moeda</h3>
            </div>
            <p className="mt-1 text-sm text-gray-500">Escolha a moeda padrão para suas transações</p>
        </div>
        <div className="p-6">
            <div className="space-y-2">
                <label htmlFor="currency" className="text-sm font-medium text-gray-700">Moeda</label>
                <div className="relative">
                    <select
                        id="currency"
                        value={currency}
                        onChange={(e) => setCurrency(e.target.value)}
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
    </div>
);

interface LanguageSelectorProps {
    language: string;
    setLanguage: (value: string) => void;
}

const LanguageSelector = ({ language, setLanguage }: LanguageSelectorProps) => (
    <div className="rounded-xl border border-gray-100 bg-white shadow-lg transition-shadow hover:shadow-xl">
        <div className="p-6 border-b border-gray-100">
            <div className="flex items-center space-x-3">
                <Globe size={20} className="text-indigo-600" />
                <h3 className="text-2xl font-bold text-gray-900 tracking-tight">Idioma</h3>
            </div>
            <p className="mt-1 text-sm text-gray-500">Selecione o idioma da sua preferência</p>
        </div>
        <div className="p-6">
            <div className="space-y-2">
                <label htmlFor="language" className="text-sm font-medium text-gray-700">Idioma</label>
                <div className="relative">
                    <select
                        id="language"
                        value={language}
                        onChange={(e) => setLanguage(e.target.value)}
                        className="appearance-none w-full h-11 rounded-lg border border-gray-300 bg-white px-3 py-2.5 text-sm text-gray-900 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
                    >
                        <option value="pt-BR">Português (Brasil)</option>
                        <option value="en-US">English (United States)</option>
                        <option value="es-ES">Español (España)</option>
                    </select>
                    <ChevronDown size={16} className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 pointer-events-none" />
                </div>
            </div>
        </div>
    </div>
);

const Settings = () => {
    const [emailNotifications, setEmailNotifications] = useState(true);
    const [budgetAlerts, setBudgetAlerts] = useState(true);
    const [billReminders, setBillReminders] = useState(true);
    const [weeklyReports, setWeeklyReports] = useState(false);
    const [userName, setUserName] = useState<string>('João Silva');
    const [userEmail, setUserEmail] = useState<string>('joao@email.com');
    const [userPhone, setUserPhone] = useState<string>('(11) 99999-9999');
    const [residenceName, setResidenceName] = useState<string>('Casa Principal');
    const [address, setAddress] = useState<string>('Rua das Flores, 123 - Centro - São Paulo, SP');
    const [currentPassword, setCurrentPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [currency, setCurrency] = useState('BRL');
    const [language, setLanguage] = useState('pt-BR');
    const [error, setError] = useState<string | null>(null);
    const [success, setSuccess] = useState<string | null>(null);

    const handleChangePassword = async () => {
        if (newPassword !== confirmPassword) {
            setError('As senhas não coincidem!');
            return;
        }
        try {
            setError(null);
            setSuccess(null);
            await axios.put(
                '/api/users/change-password',
                { currentPassword, newPassword },
                { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } }
            );
            setSuccess('Senha alterada com sucesso!');
            setCurrentPassword('');
            setNewPassword('');
            setConfirmPassword('');
        } catch (error: any) {
            setError(error.response?.data?.message || 'Erro ao alterar senha.');
        }
    };

    const handleConfigure2FA = async () => {
        try {
            setError(null);
            setSuccess(null);
            await axios.post(
                '/api/auth/2fa/setup',
                {},
                { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } }
            );
            setSuccess('2FA configurado com sucesso! Verifique seu aplicativo de autenticação.');
        } catch (error: any) {
            setError(error.response?.data?.message || 'Erro ao configurar 2FA.');
        }
    };

    const handleDeleteResidence = async () => {
        if (window.confirm('Tem certeza que deseja excluir a residência? Esta ação é irreversível.')) {
            try {
                setError(null);
                setSuccess(null);
                await axios.delete('/api/residences', {
                    headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
                });
                setSuccess('Residência excluída com sucesso!');
            } catch (error: any) {
                setError(error.response?.data?.message || 'Erro ao excluir residência.');
            }
        }
    };

    const handleDeleteAccount = async () => {
        if (window.confirm('Tem certeza que deseja excluir sua conta? Esta ação é irreversível.')) {
            try {
                setError(null);
                setSuccess(null);
                await axios.delete('/api/users/account', {
                    headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
                });
                setSuccess('Conta excluída com sucesso!');
            } catch (error: any) {
                setError(error.response?.data?.message || 'Erro ao excluir conta.');
            }
        }
    };

    const handleSaveAll = async () => {
        try {
            setError(null);
            setSuccess(null);
            await Promise.all([
                axios.put(
                    '/api/users/profile',
                    { name: userName, email: userEmail, phone: userPhone },
                    { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } }
                ),
                axios.put(
                    '/api/residences/settings',
                    { residenceName, address },
                    { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } }
                ),
                axios.put(
                    '/api/notifications/settings',
                    { emailNotifications, budgetAlerts, billReminders, weeklyReports },
                    { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } }
                ),
                axios.put(
                    '/api/settings/preferences',
                    { currency, language },
                    { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } }
                ),
            ]);
            setSuccess('Configurações salvas com sucesso!');
        } catch (error: any) {
            setError(error.response?.data?.message || 'Erro ao salvar configurações.');
        }
    };

    return (
        <div className="max-w-2xl mx-auto space-y-8">
            <Header
                title="Configurações"
                description="Gerencie suas configurações pessoais, da residência e de segurança"
                onButtonClick={handleSaveAll}
                buttonClassName="px-4 py-2 text-sm font-medium text-white bg-gradient-to-r from-indigo-600 to-indigo-500 rounded-lg hover:from-indigo-700 hover:to-indigo-600 transition-all focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            />
            {error && (
                <div className="p-4 bg-red-50 text-red-700 rounded-lg text-sm">
                    {error}
                </div>
            )}
            {success && (
                <div className="p-4 bg-green-50 text-green-700 rounded-lg text-sm">
                    {success}
                </div>
            )}
            <div className="space-y-6">
                <UserProfile
                    userName={userName}
                    setUserName={setUserName}
                    userEmail={userEmail}
                    setUserEmail={setUserEmail}
                    userPhone={userPhone}
                    setUserPhone={setUserPhone}
                />
                <ResidenceSettings
                    residenceName={residenceName}
                    setResidenceName={setResidenceName}
                    address={address}
                    setAddress={setAddress}
                />
                <NotificationSettings
                    emailNotifications={emailNotifications}
                    setEmailNotifications={setEmailNotifications}
                    budgetAlerts={budgetAlerts}
                    setBudgetAlerts={setBudgetAlerts}
                    billReminders={billReminders}
                    setBillReminders={setBillReminders}
                    weeklyReports={weeklyReports}
                    setWeeklyReports={setWeeklyReports}
                />
                <SecuritySettings
                    currentPassword={currentPassword}
                    setCurrentPassword={setCurrentPassword}
                    newPassword={newPassword}
                    setNewPassword={setNewPassword}
                    confirmPassword={confirmPassword}
                    setConfirmPassword={setConfirmPassword}
                    onChangePassword={handleChangePassword}
                    onConfigure2FA={handleConfigure2FA}
                />
                <CurrencySettings
                    currency={currency}
                    setCurrency={setCurrency}
                />
                <LanguageSelector
                    language={language}
                    setLanguage={setLanguage}
                />
                <DangerZone
                    onDeleteResidence={handleDeleteResidence}
                    onDeleteAccount={handleDeleteAccount}
                />
            </div>
        </div>
    );
};

export default Settings;
