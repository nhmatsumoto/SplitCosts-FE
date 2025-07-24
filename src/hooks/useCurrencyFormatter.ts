import { useCurrencyStore } from "../store/currencyStore";

export const useCurrencyFormatter = () => {
  const { locale, currency } = useCurrencyStore();

  const formatCurrency = (value: number): string => {
    return value.toLocaleString(locale, {
      style: "currency",
      currency,
    });
  };

  return { formatCurrency };
};