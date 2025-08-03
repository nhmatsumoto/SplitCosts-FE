import { useState } from "react";
import { useCurrencyStore } from "../../store/currencyStore";
import { ChevronDown, DollarSign, JapaneseYen } from "lucide-react";

const options = [
    { label: "Japanese (JPY)", locale: "ja-JP", currency: "JPY", icon: <JapaneseYen className="w-4 h-4" /> },
    { label: "Portuguese (BRL)", locale: "pt-BR", currency: "BRL", icon: <DollarSign className="w-4 h-4" /> },
    { label: "English (USD)", locale: "en-US", currency: "USD", icon: <DollarSign className="w-4 h-4" /> },
];

const CurrencySettings = () => {
    const setLocale = useCurrencyStore((state) => state.setLocale);
    const setCurrency = useCurrencyStore((state) => state.setCurrency);
    const currency = useCurrencyStore((state) => state.currency);

    const [open, setOpen] = useState(false);

    const selected = options.find((o) => o.currency === currency) || options[0];

    const onSelect = (option: typeof options[0]) => {
        setLocale(option.locale);
        setCurrency(option.currency);
        setOpen(false);
    };

    return (
        <div className="rounded-xl border border-gray-100 bg-white shadow-lg transition-shadow hover:shadow-xl">
            <div className="p-6 border-b border-gray-100">
                <div className="flex items-center space-x-3">
                    {selected.icon}
                    <h3 className="text-2xl font-bold text-gray-900 tracking-tight">Configurações de Moeda</h3>
                </div>
                <p className="mt-1 text-sm text-gray-500">Escolha a moeda padrão para suas transações</p>
            </div>
            <div className="p-6">
                <div className="space-y-2">
                    <label htmlFor="currency" className="text-sm font-medium text-gray-700">Moeda</label>
                    <div className="relative">
                        <button
                            id="currency"
                            type="button"
                            onClick={() => setOpen(!open)}
                            className="appearance-none w-full h-11 rounded-lg border border-gray-300 bg-white px-3 py-2.5 text-left text-sm text-gray-900 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors flex items-center justify-between"
                        >
                            {selected.label}
                            <ChevronDown size={16} className="text-gray-500 pointer-events-none" />
                        </button>

                        {open && (
                            <div className="absolute z-10 mt-1 w-full rounded-md bg-white border border-gray-300 shadow-lg max-h-60 overflow-auto">
                                {options.map((option) => (
                                    <button
                                        key={option.currency}
                                        onClick={() => onSelect(option)}
                                        className={`w-full text-left px-3 py-2 text-sm text-gray-900 hover:bg-indigo-100 ${option.currency === currency ? "bg-indigo-200 font-semibold" : ""
                                            }`}
                                        type="button"
                                    >
                                        <span className="inline-flex items-center gap-2">{option.icon}{option.label}</span>
                                    </button>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CurrencySettings;
