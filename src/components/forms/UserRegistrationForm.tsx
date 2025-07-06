import { useState } from 'react';

interface CreateApplicationUserInput {
  username: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
}

interface Props {
  onSubmit: (data: CreateApplicationUserInput) => void;
}

const UserRegistrationForm = ({ onSubmit }: Props) => {
  const [form, setForm] = useState<CreateApplicationUserInput>({
    username: '',
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (field: keyof CreateApplicationUserInput, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.username || !form.email || !form.password || !form.confirmPassword) {
      alert('Preencha todos os campos obrigatórios.');
      return;
    }

    if (form.password !== form.confirmPassword) {
      alert('As senhas não coincidem.');
      return;
    }

    onSubmit(form);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md bg-white border border-gray-200 shadow-sm p-8 rounded-2xl flex flex-col gap-5"
      >
        <h2 className="text-2xl font-semibold text-center text-blue-700">Cadastro de Usuário</h2>

        <input
          type="text"
          placeholder="Nome de usuário"
          value={form.username}
          onChange={(e) => handleChange('username', e.target.value)}
          className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-300"
          required
        />

        <input
          type="text"
          placeholder="Nome"
          value={form.firstName}
          onChange={(e) => handleChange('firstName', e.target.value)}
          className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-300"
        />

        <input
          type="text"
          placeholder="Sobrenome"
          value={form.lastName}
          onChange={(e) => handleChange('lastName', e.target.value)}
          className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-300"
        />

        <input
          type="email"
          placeholder="E-mail"
          value={form.email}
          onChange={(e) => handleChange('email', e.target.value)}
          className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-300"
          required
        />

        <input
          type="password"
          placeholder="Senha"
          value={form.password}
          onChange={(e) => handleChange('password', e.target.value)}
          className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-300"
          required
        />

        <input
          type="password"
          placeholder="Confirmar Senha"
          value={form.confirmPassword}
          onChange={(e) => handleChange('confirmPassword', e.target.value)}
          className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-300"
          required
        />

        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 rounded-lg transition"
        >
          Cadastrar
        </button>
      </form>
    </div>
  );
};

export default UserRegistrationForm;
