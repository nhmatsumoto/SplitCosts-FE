import { create } from "zustand";

type CurrencyState = {
  locale: string;
  currency: string;
  setLocale: (locale: string) => void;
  setCurrency: (currency: string) => void;
};

export const useCurrencyStore = create<CurrencyState>((set) => ({
  locale: "ja-JP",
  currency: "JPY",
  setLocale: (locale) => set({ locale }),
  setCurrency: (currency) => set({ currency }),
}));