import { create } from 'zustand';
import i18n from '../i18n/i18n';

interface LanguageState {
  currentLanguage: string;
  setLanguage: (lang: string) => void;
}

const useLanguageStore = create<LanguageState>((set) => ({
  currentLanguage: i18n.language || 'en',
  setLanguage: (lang: string) => {
    i18n.changeLanguage(lang);
    set({ currentLanguage: lang });
  },
}));

export default useLanguageStore;