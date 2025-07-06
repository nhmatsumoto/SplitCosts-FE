import { useState } from 'react';
import { ArrowDownCircle, ArrowUpCircle, DollarSign, HouseIcon, UserIcon } from 'lucide-react';
import Modal from './Modal';
import IncomeForm from './forms/IncomeForm';
import ExpenseForm from './forms/ExpenseForm';
import ActionCard from './ActionCard';
import DashboardCharts from './DashboardCharts';

export const DashboardActions = () => {
  const [modalType, setModalType] = useState<'income' | 'expense' | 'inviteUser' | null>(null);

  const closeModal = () => setModalType(null);

  const handleIncomeSubmit = (data: { description: string; amount: number }) => {
    console.log('Income submitted:', data);
    closeModal();
  };

  const handleExpenseSubmit = (data: any) => {
    console.log('Expense submitted:', data);
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
    { value: 'user-2', label: 'Yuki' },
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-6">
        <ActionCard
            title="Add Income"
            icon={ArrowDownCircle}
            color="green"
            onClick={() => setModalType('income')}
        />
        <ActionCard
            title="Add Expense"
            icon={ArrowUpCircle}
            color="red"
            onClick={() => setModalType('expense')}
        />
        <ActionCard
            title="Residence"
            icon={HouseIcon}
            color="blue"
            onClick={() => setModalType('expense')}
        />
        <ActionCard
            title="Invite User"
            icon={UserIcon}
            color="purple"
            onClick={() => setModalType('expense')}
        />
         <ActionCard
            title="Investments"
            icon={DollarSign}
            color="yellow"
            onClick={() => setModalType('expense')}
        />
        </div>


        <DashboardCharts />

        <Modal isOpen={modalType === 'income'} onClose={closeModal} title="Add Income">
            <IncomeForm onSubmit={handleIncomeSubmit} />
        </Modal>

        <Modal isOpen={modalType === 'expense'} onClose={closeModal} title="Add Expense">
            <ExpenseForm
            onSubmit={handleExpenseSubmit}
            expenseTypes={expenseTypes}
            categories={categories}
            residences={residences}
            users={users}
            />
        </Modal>

        <Modal isOpen={modalType === 'inviteUser'} onClose={closeModal} title="Add Income">
            <IncomeForm onSubmit={handleIncomeSubmit} />
        </Modal>
    </div>
  );
};

export default DashboardActions;
