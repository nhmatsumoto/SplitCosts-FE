import { useState, useEffect } from 'react';

interface MoneyInputProps {
  value: number | null;
  onChange: (value: number | null) => void;
  placeholder?: string;
}

const formatter = new Intl.NumberFormat('ja-JP', {
  style: 'currency',
  currency: 'JPY',
  minimumFractionDigits: 0,
  maximumFractionDigits: 0,
});

const MoneyInput = ({ value, onChange, placeholder }: MoneyInputProps) => {
  const [displayValue, setDisplayValue] = useState('');

  useEffect(() => {
    if (value === null || isNaN(value)) {
      setDisplayValue('');
    } else {
      setDisplayValue(formatter.format(value));
    }
  }, [value]);

  const parseValue = (val: string) => {
    // Remove tudo que não for dígito (nenhum decimal no iene)
    const cleaned = val.replace(/[^\d]/g, '');
    const parsed = parseInt(cleaned, 10);
    return isNaN(parsed) ? null : parsed;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const input = e.target.value;
    setDisplayValue(input);

    const numericValue = parseValue(input);
    onChange(numericValue);
  };

  const handleBlur = () => {
    if (value !== null && !isNaN(value)) {
      setDisplayValue(formatter.format(value));
    } else {
      setDisplayValue('');
    }
  };

  return (
    <input
      type="text"
      inputMode="numeric"
      pattern="[0-9]*"
      value={displayValue}
      onChange={handleChange}
      onBlur={handleBlur}
      placeholder={placeholder}
      className="border border-gray-300 rounded px-3 py-2"
    />
  );
};

export default MoneyInput;
