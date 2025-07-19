import { useState } from 'react';
import UserProfile from '../../components/UserProfile';
import ResidenceSettings from '../../components/ResidenceSettings';
import NotificationSettings from '../../components/NotificationSettings';
import SecuritySettings from '../../components/SecuritySettings';
import DangerZone from '../../components/DangerZone';

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
      <div className="flex items-center justify-between space-y-2">
        <div className="flex items-center space-x-2">
          <h2 className="text-3xl font-bold tracking-tight">Configurações</h2>
        </div>
      </div>
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
