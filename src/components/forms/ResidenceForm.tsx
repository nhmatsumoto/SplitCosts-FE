import { useState } from 'react';

export interface CreateResidenceInput {
    name: string;
    street: string;
    number: string;
    city: string;
    state: string;
    zipCode: string;
    country: string;
}

interface Props {
    onSubmit: (data: CreateResidenceInput) => void;
}

const ResidenceForm = ({ onSubmit }: Props) => {
    const [form, setForm] = useState<CreateResidenceInput>({
        name: '',
        street: '',
        number: '',
        city: '',
        state: '',
        zipCode: '',
        country: '',
    });

    const handleChange = (field: keyof CreateResidenceInput, value: string) => {
        setForm((prev) => ({ ...prev, [field]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.name || !form.street || !form.number || !form.city) {
        alert('Preencha todos os campos obrigatórios.');
        return;
    }

    onSubmit(form);
    setForm({
        name: '',
        street: '',
        number: '',
        city: '',
        state: '',
        zipCode: '',
        country: '',
    });
  };

  return (
    <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-4"
    >
     
        <input
            type="text"
            placeholder="Nome da residência"
            value={form.name}
            onChange={(e) => handleChange('name', e.target.value)}
            className="border border-gray-300 rounded px-3 py-2"
            required
        />

        <input
            type="text"
            placeholder="Rua"
            value={form.street}
            onChange={(e) => handleChange('street', e.target.value)}
            className="border border-gray-300 rounded px-3 py-2"
            required
        />

        <input
            type="text"
            placeholder="Número"
            value={form.number}
            onChange={(e) => handleChange('number', e.target.value)}
            className="border border-gray-300 rounded px-3 py-2"
            required
        />

        <input
            type="text"
            placeholder="Cidade"
            value={form.city}
            onChange={(e) => handleChange('city', e.target.value)}
            className="border border-gray-300 rounded px-3 py-2"
            required
        />

        <input
            type="text"
            placeholder="Estado"
            value={form.state}
            onChange={(e) => handleChange('state', e.target.value)}
            className="border border-gray-300 rounded px-3 py-2"
        />

        <input
            type="text"
            placeholder="CEP"
            value={form.zipCode}
            onChange={(e) => handleChange('zipCode', e.target.value)}
            className="border border-gray-300 rounded px-3 py-2"
        />

        <input
            type="text"
            placeholder="País"
            value={form.country}
            onChange={(e) => handleChange('country', e.target.value)}
            className="border border-gray-300 rounded px-3 py-2"
        />

        <button
            type="submit"
            className="bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
        >
            Salvar Residência
        </button>
    </form>
  );
};

export default ResidenceForm;
