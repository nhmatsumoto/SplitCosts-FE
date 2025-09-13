import { type ChangeEvent } from 'react';
import { Globe } from 'lucide-react';
import useLanguageStore from '../store/languageStore';

const LanguageSelector = () => {
    const { currentLanguage, setLanguage } = useLanguageStore();

    const handleLanguageChange = (e: ChangeEvent<HTMLSelectElement>) => {
        setLanguage(e.target.value);
    };

    return (
        <div className="flex items-center gap-2">
            <Globe
                size={18}
                className="text-gray-600 group-hover:text-gray-800 transition-colors"
            />
            <select
                id="language-select"
                value={currentLanguage}
                onChange={handleLanguageChange}
                className="rounded-lg border border-gray-300 bg-white px-3 py-1.5 text-sm font-medium text-gray-700 shadow-sm transition-all hover:border-gray-400 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-1"
            >
                <option value="en">English</option>
                <option value="pt">Português</option>
                <option value="jp">日本語</option>
            </select>
        </div>
    );
};

export default LanguageSelector;
