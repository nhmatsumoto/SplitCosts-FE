import { useState } from 'react';
import MoneyInput from '../MoneyInput';

interface ExpenseFormProps {
  onSubmit: (data: CreateExpenseInput) => void;

  // Dropdowns a serem carregados externamente
  expenseTypes: { value: string; label: string }[];
  categories: { value: string; label: string }[];
  residences: { value: string; label: string }[];
  users: { value: string; label: string }[]; // para RegisteredBy, PaidBy e SharedWith
}

interface CreateExpenseInput {
  type: string;
  category: string;
  amount: number;
  date: string;
  description: string;
  residenceId: string;
  registeredByUserId: string;
  paidByUserId: string;
  isSharedAmongMembers: boolean;
  sharedWithUserIds?: string[];
}

const ExpenseForm = ({
  onSubmit,
  expenseTypes,
  categories,
  residences,
  users,
}: ExpenseFormProps) => {
  const [form, setForm] = useState<CreateExpenseInput>({
    type: '',
    category: '',
    amount: 0,
    date: '',
    description: '',
    residenceId: '',
    registeredByUserId: '',
    paidByUserId: '',
    isSharedAmongMembers: false,
    sharedWithUserIds: [],
  });

  const handleChange = (field: keyof CreateExpenseInput, value: any) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const toggleSharedUser = (userId: string) => {
    setForm((prev) => {
      const current = new Set(prev.sharedWithUserIds || []);
      current.has(userId) ? current.delete(userId) : current.add(userId);
      return { ...prev, sharedWithUserIds: Array.from(current) };
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(form);
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">

      {/* Tipo da despesa */}
      <select
        value={form.type}
        onChange={(e) => handleChange('type', e.target.value)}
        className="border border-gray-300 rounded px-3 py-2"
        required
      >
        <option value="">Selecione o tipo</option>
        {expenseTypes.map((t) => (
          <option key={t.value} value={t.value}>{t.label}</option>
        ))}
      </select>

      {/* Categoria */}
      <select
        value={form.category}
        onChange={(e) => handleChange('category', e.target.value)}
        className="border border-gray-300 rounded px-3 py-2"
        required
      >
        <option value="">Selecione a categoria</option>
        {categories.map((c) => (
          <option key={c.value} value={c.value}>{c.label}</option>
        ))}
      </select>

      {/* Valor */}
      <MoneyInput
        value={form.amount}
        onChange={(val) => handleChange('amount', val ?? 0)}
        placeholder="Valor"
      />

      {/* Data */}
      <input
        type="date"
        value={form.date}
        onChange={(e) => handleChange('date', e.target.value)}
        className="border border-gray-300 rounded px-3 py-2"
        required
      />

      {/* Descrição */}
      <input
        type="text"
        value={form.description}
        onChange={(e) => handleChange('description', e.target.value)}
        placeholder="Descrição"
        className="border border-gray-300 rounded px-3 py-2"
        required
      />

      {/* Residência */}
      <select
        value={form.residenceId}
        onChange={(e) => handleChange('residenceId', e.target.value)}
        className="border border-gray-300 rounded px-3 py-2"
        required
      >
        <option value="">Residência</option>
        {residences.map((r) => (
          <option key={r.value} value={r.value}>{r.label}</option>
        ))}
      </select>

      {/* Registrado por */}
      <select
        value={form.registeredByUserId}
        onChange={(e) => handleChange('registeredByUserId', e.target.value)}
        className="border border-gray-300 rounded px-3 py-2"
        required
      >
        <option value="">Registrado por</option>
        {users.map((u) => (
          <option key={u.value} value={u.value}>{u.label}</option>
        ))}
      </select>

      {/* Pago por */}
      <select
        value={form.paidByUserId}
        onChange={(e) => handleChange('paidByUserId', e.target.value)}
        className="border border-gray-300 rounded px-3 py-2"
        required
      >
        <option value="">Pago por</option>
        {users.map((u) => (
          <option key={u.value} value={u.value}>{u.label}</option>
        ))}
      </select>

      {/* Compartilhado */}
      <label className="flex items-center gap-2">
        <input
          type="checkbox"
          checked={form.isSharedAmongMembers}
          onChange={(e) => handleChange('isSharedAmongMembers', e.target.checked)}
        />
        Dividir com membros
      </label>

      {/* Lista de membros (checkboxes) */}
      {form.isSharedAmongMembers && (
        <div className="flex flex-col gap-1">
          <span className="text-sm font-semibold">Membros:</span>
          {users.map((u) => (
            <label key={u.value} className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={form.sharedWithUserIds?.includes(u.value)}
                onChange={() => toggleSharedUser(u.value)}
              />
              {u.label}
            </label>
          ))}
        </div>
      )}

      <button
        type="submit"
        className="bg-red-600 text-white py-2 rounded hover:bg-red-700 transition"
      >
        Adicionar Despesa
      </button>
    </form>
  );
};

export default ExpenseForm;
