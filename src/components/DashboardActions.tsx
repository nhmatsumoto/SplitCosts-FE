import { useState } from 'react';
import {
  ArrowDownCircle,
  ArrowUpCircle,
  DollarSign,
  Earth,
  HouseIcon,
  UserIcon,
} from 'lucide-react';

import Modal from './Modal';
import IncomeForm from './forms/IncomeForm';
import ExpenseForm from './forms/ExpenseForm';
import InviteUserForm from './forms/InviteUserForm';
import ActionCard from './ActionCard';
import DashboardCharts from './DashboardCharts';
import ResidenceForm from './forms/ResidenceForm';
import ModalLarge from './ModalLarge';
import DataTable from './DataTable';

export const DashboardActions = () => {
  const [modalType, setModalType] = useState<
    'income' | 'expense' | 'inviteUser' | 'residence' | 'investment' | null
  >(null);

  // Controle local para mostrar/ocultar formulário dentro do modal de Income
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
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-6">
        <ActionCard
          title="Incomes"
          icon={ArrowDownCircle}
          color="green"
          onClick={() => setModalType('income')}
        />
        <ActionCard
          title="Expenses"
          icon={ArrowUpCircle}
          color="red"
          onClick={() => setModalType('expense')}
        />
        <ActionCard
          title="Residence"
          icon={HouseIcon}
          color="blue"
          onClick={() => setModalType('residence')}
        />
        <ActionCard
          title="Invite"
          icon={UserIcon}
          color="purple"
          onClick={() => setModalType('inviteUser')}
        />
        <ActionCard
          title="Investments"
          icon={DollarSign}
          color="yellow"
          onClick={() => setModalType('investment')}
        />
        <ActionCard
          title="Objectives"
          icon={Earth}
          color="purple"
          onClick={() => setModalType('investment')}
        />
      </div>

      <DashboardCharts />

      {/* Modal Income com botão para alternar formulário */}
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
