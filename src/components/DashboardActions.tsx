import { useState } from 'react';
import {
  DollarSign,
  TrendingUp,
  TrendingDown,
  Users,
} from 'lucide-react';

import Modal from './Modal';
import IncomeForm from './forms/IncomeForm';
import ExpenseForm from './forms/ExpenseForm';
import InviteUserForm from './forms/InviteUserForm';
import ResidenceForm from './forms/ResidenceForm';
import ModalLarge from './ModalLarge';
import DataTable from './DataTable';
import ExpensesByCategory from './ExpensesByCategory';
import RecentTransactions from './RecentTransactions';

export const DashboardActions = () => {
  const [modalType, setModalType] = useState<
    'income' | 'expense' | 'inviteUser' | 'residence' | 'investment' | null
  >(null);

  const [showIncomeForm, setShowIncomeForm] = useState(false);

  const closeModal = () => {
    setModalType(null);
    setShowIncomeForm(false);
  };

  const handleIncomeSubmit = (data: { description: string; amount: number }) => {
    console.log('Income submitted:', data);
    setShowIncomeForm(false);
    closeModal();
  };

  const handleExpenseSubmit = (data: any) => {
    console.log('Expense submitted:', data);
    closeModal();
  };

  const handleInviteSubmit = (email: string) => {
    console.log('Invite sent to:', email);
    closeModal();
  };

  const handleResidenceSubmit = (data: any) => {
    console.log('Residence created:', data);
    closeModal();
  };

  const expenseTypes = [
    { value: 'FIXED', label: 'Fixa' },
    { value: 'VARIABLE', label: 'Variável' },
  ];

  const categories = [
    { value: 'FOOD', label: 'Alimentação' },
    { value: 'UTILITIES', label: 'Contas' },
  ];

  const residences = [{ value: 'abc-123', label: 'Residência 1' }];
  const users = [
    { value: 'user-1', label: 'Hiro' },
    { value: 'user-2', label: 'Naoko' },
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-8 space-y-8">
      {/* Métricas (cards) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="rounded-lg border bg-white shadow-sm">
          <div className="p-6 flex items-center justify-between pb-2">
            <h3 className="text-sm font-medium tracking-tight">Receita Total</h3>
            <TrendingUp className="h-4 w-4 text-green-600" />
          </div>
          <div className="p-6 pt-0">
            <div className="text-2xl font-bold text-green-600">R$ 5.800,00</div>
            <p className="text-xs text-gray-500">+12% em relação ao mês anterior</p>
          </div>
        </div>

        <div className="rounded-lg border bg-white shadow-sm">
          <div className="p-6 flex items-center justify-between pb-2">
            <h3 className="text-sm font-medium tracking-tight">Despesas Totais</h3>
            <TrendingDown className="h-4 w-4 text-red-600" />
          </div>
          <div className="p-6 pt-0">
            <div className="text-2xl font-bold text-red-600">R$ 3.000,00</div>
            <p className="text-xs text-gray-500">+5% em relação ao mês anterior</p>
          </div>
        </div>

        <div className="rounded-lg border bg-white shadow-sm">
          <div className="p-6 flex items-center justify-between pb-2">
            <h3 className="text-sm font-medium tracking-tight">Saldo Atual</h3>
            <DollarSign className="h-4 w-4 text-blue-600" />
          </div>
          <div className="p-6 pt-0">
            <div className="text-2xl font-bold text-blue-600">R$ 2.800,00</div>
            <p className="text-xs text-gray-500">Disponível para gastos</p>
          </div>
        </div>

        <div className="rounded-lg border bg-white shadow-sm">
          <div className="p-6 flex items-center justify-between pb-2">
            <h3 className="text-sm font-medium tracking-tight">Membros Ativos</h3>
            <Users className="h-4 w-4 text-purple-600" />
          </div>
          <div className="p-6 pt-0">
            <div className="text-2xl font-bold">3</div>
            <p className="text-xs text-gray-500">Pessoas na residência</p>
          </div>
        </div>
      </div>

        <ExpensesByCategory />
        <RecentTransactions />
      {/* <DashboardCharts /> */}

      <ModalLarge
        isOpen={modalType === 'income'}
        onClose={closeModal}
        title="Add Income"
      >
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-semibold">Lista de Entradas</h3>
          <button
            onClick={() => setShowIncomeForm(!showIncomeForm)}
            className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition"
          >
            {showIncomeForm ? 'Fechar Formulário' : 'Nova Entrada'}
          </button>
        </div>

        {showIncomeForm && (
          <div className="mb-6">
            <IncomeForm onSubmit={handleIncomeSubmit} />
          </div>
        )}

        <DataTable />
      </ModalLarge>

      <Modal isOpen={modalType === 'expense'} onClose={closeModal} title="Add Expense">
        <ExpenseForm
          onSubmit={handleExpenseSubmit}
          expenseTypes={expenseTypes}
          categories={categories}
          residences={residences}
          users={users}
        />
      </Modal>

      <Modal isOpen={modalType === 'inviteUser'} onClose={closeModal} title="Invite User">
        <InviteUserForm onSubmit={handleInviteSubmit} />
      </Modal>

      <Modal isOpen={modalType === 'residence'} onClose={closeModal} title="Residência">
        <ResidenceForm onSubmit={handleResidenceSubmit} />
      </Modal>

      <Modal isOpen={modalType === 'investment'} onClose={closeModal} title="Investimentos">
        <div className="text-center text-gray-600">Em breve...</div>
      </Modal>
    </div>
  );
};

export default DashboardActions;
