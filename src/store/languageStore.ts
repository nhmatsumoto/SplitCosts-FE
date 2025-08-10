import { create } from 'zustand';
import i18n from '../i18n/i18n';

interface LanguageState {
    currentLanguage: string;
    setLanguage: (lang: string) => void;
}

const SUPPORTED_LANGUAGES: Record<string, string> = {
    en: 'en',
    pt: 'pt',
    jp: 'jp',
};

const normalizeLang = (lang: string): string => {
    const code = lang.slice(0, 2).toLowerCase();
    return SUPPORTED_LANGUAGES[code] || 'en';
};

const getCookie = (name: string): string | null => {
    const match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
    return match ? decodeURIComponent(match[2]) : null;
};

const useLanguageStore = create<LanguageState>((set) => {
    const cookieLang = getCookie('lang');
    const initialLang = normalizeLang(cookieLang || i18n.language || 'en');

    i18n.changeLanguage(initialLang);

    return {
        currentLanguage: initialLang,
        setLanguage: (lang: string) => {
            document.cookie = `lang=${lang}; path=/; max-age=31536000`;
            i18n.changeLanguage(lang);
            set({ currentLanguage: lang });
        },
    };
});

export default useLanguageStore;