import { useState } from "react";
import { useCurrencyStore } from "../../store/currencyStore";
import { ChevronDown, Globe, DollarSign, JapaneseYen } from "lucide-react";

const options = [
  { label: "Japanese (JPY)", locale: "ja-JP", currency: "JPY", icon: <JapaneseYen className="w-4 h-4" /> },
  { label: "Portuguese (BRL)", locale: "pt-BR", currency: "BRL", icon: <DollarSign className="w-4 h-4" /> },
  { label: "English (USD)", locale: "en-US", currency: "USD", icon: <DollarSign className="w-4 h-4" /> },
];

const CurrencySettings = () => {
  const setLocale = useCurrencyStore((state) => state.setLocale);
  const setCurrency = useCurrencyStore((state) => state.setCurrency);
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(options[0]);

  const onSelect = (option: typeof options[0]) => {
    setSelected(option);
    setLocale(option.locale);
    setCurrency(option.currency);
    setOpen(false);
  };

  return (
    <div className="relative inline-block text-left">
      <button
        onClick={() => setOpen(!open)}
        className="inline-flex items-center rounded-md border border-gray-300 bg-white px-3 py-1.5 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500"
      >
        <span className="mr-2 flex items-center gap-1">
          {selected.icon}
          {selected.label}
        </span>
        <ChevronDown className="w-4 h-4" />
      </button>

      {open && (
        <div className="absolute z-10 mt-1 w-48 origin-top-right rounded-md bg-white border border-gray-200 shadow-lg focus:outline-none">
          {options.map((option) => (
            <button
              key={option.locale}
              onClick={() => onSelect(option)}
              className={`flex items-center gap-2 w-full px-3 py-2 text-sm text-gray-700 hover:bg-indigo-100 focus:bg-indigo-100 ${
                selected.locale === option.locale ? "bg-indigo-200 font-semibold" : ""
              }`}
            >
              {option.icon}
              {option.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default CurrencySettings;
