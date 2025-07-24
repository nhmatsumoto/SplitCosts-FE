import { type ChangeEvent } from 'react';
import { Globe } from 'lucide-react';
import useLanguageStore from '../store/languageStore';

const LanguageSelector = () => {
    const { currentLanguage, setLanguage } = useLanguageStore();

    const handleLanguageChange = (e: ChangeEvent<HTMLSelectElement>) => {
        setLanguage(e.target.value);
    };

    return (
        <div className="language-selector flex items-center gap-2">
            <Globe size={18} />
            <select
                id="language-select"
                value={currentLanguage}
                onChange={handleLanguageChange}
                className="ml-2 p-1 border rounded bg-white text-black"
            >
                <option value="en">English</option>
                <option value="pt">Português</option>
                <option value="jp">Japonês</option>
            </select>
        </div>
    );
};

export default LanguageSelector;
