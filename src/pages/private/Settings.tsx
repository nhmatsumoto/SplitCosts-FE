import { useState } from 'react';
import UserProfile from '../../components/UserProfile';
import ResidenceSettings from '../../components/settings/SettingsResidence';
import NotificationSettings from '../../components/settings/SettingsNotification';
import SecuritySettings from '../../components/settings/SettingsSecurity';
import DangerZone from '../../components/DangerZone';
import Header from '../../components/members/Header';

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

    return (
        <main className="space-y-6">
            <Header title="Settings" />

            <div className="grid gap-6">
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
                <SecuritySettings />
                <DangerZone />
            </div>
        </main>
    );
};

export default Settings;
