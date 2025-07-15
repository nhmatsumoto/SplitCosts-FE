import { useState } from 'react';

// Ícones SVG
const PanelLeftIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="lucide lucide-panel-left"
  >
    <rect width="18" height="18" x="3" y="3" rx="2"></rect>
    <path d="M9 3v18"></path>
  </svg>
);

const UserIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="lucide lucide-user h-5 w-5"
  >
    <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
    <circle cx="12" cy="7" r="4"></circle>
  </svg>
);

const ChevronDownIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="lucide lucide-chevron-down h-4 w-4 opacity-50"
    aria-hidden="true"
  >
    <path d="m6 9 6 6 6-6"></path>
  </svg>
);

const HomeIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="lucide lucide-home h-5 w-5"
  >
    <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
    <polyline points="9 22 9 12 15 12 15 22"></polyline>
  </svg>
);

const BellIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="lucide lucide-bell h-5 w-5"
  >
    <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"></path>
    <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"></path>
  </svg>
);

const ShieldIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="lucide lucide-shield h-5 w-5"
  >
    <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
  </svg>
);

const Trash2Icon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="lucide lucide-trash2 h-5 w-5 text-red-600"
  >
    <path d="M3 6h18"></path>
    <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path>
    <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path>
    <line x1="10" x2="10" y1="11" y2="17"></line>
    <line x1="14" x2="14" y1="11" y2="17"></line>
  </svg>
);

const Settings = () => {
  // Estados para os toggles de notificação
  const [emailNotifications, setEmailNotifications] = useState(true);
  const [budgetAlerts, setBudgetAlerts] = useState(true);
  const [billReminders, setBillReminders] = useState(true);
  const [weeklyReports, setWeeklyReports] = useState(false);

  // Exemplo de estados para os campos de input (para demonstração)
  const [userName, setUserName] = useState<string>('João Silva');
  const [userEmail, setUserEmail] = useState<string>('joao@email.com');
  const [userPhone, setUserPhone] = useState<string>('(11) 99999-9999');
  const [residenceName, setResidenceName] = useState<string>('Casa Principal');
  const [address, setAddress] = useState<string>('Rua das Flores, 123 - Centro - São Paulo, SP');

  return (
    <div className="p-6">
      <div className="flex items-center space-x-2 mb-6">
        <button
          className="ring-offset-background focus-visible:outline-hidden focus-visible:ring-ring inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 hover:bg-accent hover:text-accent-foreground h-7 w-7"
          data-sidebar="trigger"
        >
          <PanelLeftIcon />
          <span className="sr-only">Toggle Sidebar</span>
        </button>
        <h2 className="text-3xl font-bold tracking-tight">Configurações</h2>
      </div>

      <div className="grid gap-6">
        {/* Perfil do Usuário */}
        <div className="rounded-lg border bg-card text-card-foreground shadow-2xs">
          <div className="flex flex-col space-y-1.5 p-6">
            <div className="flex items-center space-x-2">
              <UserIcon />
              <h3 className="text-2xl font-semibold leading-none tracking-tight">Perfil do Usuário</h3>
            </div>
            <p className="text-sm text-muted-foreground">Gerencie suas informações pessoais</p>
          </div>
          <div className="p-6 pt-0 space-y-4">
            <div className="flex items-center space-x-4">
              <span className="relative flex shrink-0 overflow-hidden rounded-full h-20 w-20">
                <img className="aspect-square h-full w-full" src="/placeholder-user.jpg" alt="User Avatar" />
              </span>
              <button className="ring-offset-background focus-visible:outline-hidden focus-visible:ring-ring inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 border-input bg-background hover:bg-accent hover:text-accent-foreground border h-10 px-4 py-2">
                Alterar Foto
              </button>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-2">
                <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70" htmlFor="name">
                  Nome Completo
                </label>
                <input
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  id="name"
                  value={userName}
                  onChange={(e) => setUserName(e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70" htmlFor="email">
                  Email
                </label>
                <input
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  id="email"
                  type="email"
                  value={userEmail}
                  onChange={(e) => setUserEmail(e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70" htmlFor="phone">
                  Telefone
                </label>
                <input
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  id="phone"
                  value={userPhone}
                  onChange={(e) => setUserPhone(e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70" htmlFor="timezone">
                  Fuso Horário
                </label>
                <button
                  type="button"
                  role="combobox"
                  aria-controls="radix-_r_39_"
                  aria-expanded={false}
                  aria-autocomplete="none"
                  dir="ltr"
                  data-state="closed"
                  className="flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-hidden focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1"
                >
                  <span style={{ pointerEvents: 'none' }}>São Paulo (GMT-3)</span>
                  <ChevronDownIcon />
                </button>
              </div>
            </div>
            <button className="ring-offset-background focus-visible:outline-hidden focus-visible:ring-ring inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2">
              Salvar Perfil
            </button>
          </div>
        </div>

        {/* Configurações da Residência */}
        <div className="rounded-lg border bg-card text-card-foreground shadow-2xs">
          <div className="flex flex-col space-y-1.5 p-6">
            <div className="flex items-center space-x-2">
              <HomeIcon />
              <h3 className="text-2xl font-semibold leading-none tracking-tight">Configurações da Residência</h3>
            </div>
            <p className="text-sm text-muted-foreground">Gerencie as informações da sua residência</p>
          </div>
          <div className="p-6 pt-0 space-y-4">
            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-2">
                <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70" htmlFor="residence-name">
                  Nome da Residência
                </label>
                <input
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  id="residence-name"
                  value={residenceName}
                  onChange={(e) => setResidenceName(e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70" htmlFor="currency">
                  Moeda
                </label>
                <button
                  type="button"
                  role="combobox"
                  aria-controls="radix-_r_3a_"
                  aria-expanded={false}
                  aria-autocomplete="none"
                  dir="ltr"
                  data-state="closed"
                  className="flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-hidden focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1"
                >
                  <span style={{ pointerEvents: 'none' }}>Real Brasileiro (R$)</span>
                  <ChevronDownIcon />
                </button>
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70" htmlFor="address">
                Endereço
              </label>
              <textarea
                className="flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                id="address"
                placeholder="Endereço completo da residência"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              ></textarea>
            </div>
            <button className="ring-offset-background focus-visible:outline-hidden focus-visible:ring-ring inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2">
              Salvar Configurações
            </button>
          </div>
        </div>

        {/* Notificações */}
        <div className="rounded-lg border bg-card text-card-foreground shadow-2xs">
          <div className="flex flex-col space-y-1.5 p-6">
            <div className="flex items-center space-x-2">
              <BellIcon />
              <h3 className="text-2xl font-semibold leading-none tracking-tight">Notificações</h3>
            </div>
            <p className="text-sm text-muted-foreground">Configure como você deseja receber notificações</p>
          </div>
          <div className="p-6 pt-0 space-y-4">
            {/* Notificações por Email */}
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Notificações por Email</label>
                <p className="text-sm text-muted-foreground">Receba resumos mensais e alertas importantes</p>
              </div>
              <button
                type="button"
                role="switch"
                aria-checked={emailNotifications}
                data-state={emailNotifications ? 'checked' : 'unchecked'}
                value="on"
                className="peer inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=unchecked]:bg-input"
                onClick={() => setEmailNotifications(!emailNotifications)}
              >
                <span
                  data-state={emailNotifications ? 'checked' : 'unchecked'}
                  className="pointer-events-none block h-5 w-5 rounded-full bg-background shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0"
                ></span>
              </button>
            </div>
            <hr className="shrink-0 bg-border h-px w-full" /> {/* Substituindo div[data-orientation="horizontal"] */}

            {/* Alertas de Orçamento */}
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Alertas de Orçamento</label>
                <p className="text-sm text-muted-foreground">Seja notificado quando ultrapassar limites de gastos</p>
              </div>
              <button
                type="button"
                role="switch"
                aria-checked={budgetAlerts}
                data-state={budgetAlerts ? 'checked' : 'unchecked'}
                value="on"
                className="peer inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=unchecked]:bg-input"
                onClick={() => setBudgetAlerts(!budgetAlerts)}
              >
                <span
                  data-state={budgetAlerts ? 'checked' : 'unchecked'}
                  className="pointer-events-none block h-5 w-5 rounded-full bg-background shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0"
                ></span>
              </button>
            </div>
            <hr className="shrink-0 bg-border h-px w-full" />

            {/* Lembretes de Contas */}
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Lembretes de Contas</label>
                <p className="text-sm text-muted-foreground">Receba lembretes de contas próximas do vencimento</p>
              </div>
              <button
                type="button"
                role="switch"
                aria-checked={billReminders}
                data-state={billReminders ? 'checked' : 'unchecked'}
                value="on"
                className="peer inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=unchecked]:bg-input"
                onClick={() => setBillReminders(!billReminders)}
              >
                <span
                  data-state={billReminders ? 'checked' : 'unchecked'}
                  className="pointer-events-none block h-5 w-5 rounded-full bg-background shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0"
                ></span>
              </button>
            </div>
            <hr className="shrink-0 bg-border h-px w-full" />

            {/* Relatórios Semanais */}
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Relatórios Semanais</label>
                <p className="text-sm text-muted-foreground">Resumo semanal das suas finanças</p>
              </div>
              <button
                type="button"
                role="switch"
                aria-checked={weeklyReports}
                data-state={weeklyReports ? 'checked' : 'unchecked'}
                value="on"
                className="peer inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=unchecked]:bg-input"
                onClick={() => setWeeklyReports(!weeklyReports)}
              >
                <span
                  data-state={weeklyReports ? 'checked' : 'unchecked'}
                  className="pointer-events-none block h-5 w-5 rounded-full bg-background shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0"
                ></span>
              </button>
            </div>
          </div>
        </div>

        {/* Segurança */}
        <div className="rounded-lg border bg-card text-card-foreground shadow-2xs">
          <div className="flex flex-col space-y-1.5 p-6">
            <div className="flex items-center space-x-2">
              <ShieldIcon />
              <h3 className="text-2xl font-semibold leading-none tracking-tight">Segurança</h3>
            </div>
            <p className="text-sm text-muted-foreground">Gerencie a segurança da sua conta</p>
          </div>
          <div className="p-6 pt-0 space-y-4">
            <div className="space-y-2">
              <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70" htmlFor="current-password">
                Senha Atual
              </label>
              <input
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                id="current-password"
                type="password"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70" htmlFor="new-password">
                Nova Senha
              </label>
              <input
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                id="new-password"
                type="password"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70" htmlFor="confirm-password">
                Confirmar Nova Senha
              </label>
              <input
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                id="confirm-password"
                type="password"
              />
            </div>
            <button className="ring-offset-background focus-visible:outline-hidden focus-visible:ring-ring inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2">
              Alterar Senha
            </button>
            <hr className="shrink-0 bg-border h-px w-full" />
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Autenticação de Dois Fatores</label>
                <p className="text-sm text-muted-foreground">Adicione uma camada extra de segurança à sua conta</p>
              </div>
              <button className="ring-offset-background focus-visible:outline-hidden focus-visible:ring-ring inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 border-input bg-background hover:bg-accent hover:text-accent-foreground border h-10 px-4 py-2">
                Configurar
              </button>
            </div>
          </div>
        </div>

        {/* Zona de Perigo */}
        <div className="rounded-lg border bg-card text-card-foreground shadow-2xs border-red-200">
          <div className="flex flex-col space-y-1.5 p-6">
            <div className="flex items-center space-x-2">
              <Trash2Icon />
              <h3 className="text-2xl font-semibold leading-none tracking-tight text-red-600">Zona de Perigo</h3>
            </div>
            <p className="text-sm text-muted-foreground">Ações irreversíveis que afetam sua conta</p>
          </div>
          <div className="p-6 pt-0 space-y-4">
            <div className="flex items-center justify-between p-4 border border-red-200 rounded-lg">
              <div className="space-y-0.5">
                <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-red-600">Excluir Residência</label>
                <p className="text-sm text-muted-foreground">Remove permanentemente esta residência e todos os dados associados</p>
              </div>
              <button className="ring-offset-background focus-visible:outline-hidden focus-visible:ring-ring inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-destructive text-destructive-foreground hover:bg-destructive/90 h-10 px-4 py-2">
                Excluir
              </button>
            </div>
            <div className="flex items-center justify-between p-4 border border-red-200 rounded-lg">
              <div className="space-y-0.5">
                <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-red-600">Excluir Conta</label>
                <p className="text-sm text-muted-foreground">Remove permanentemente sua conta e todos os dados</p>
              </div>
              <button className="ring-offset-background focus-visible:outline-hidden focus-visible:ring-ring inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-destructive text-destructive-foreground hover:bg-destructive/90 h-10 px-4 py-2">
                Excluir Conta
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;