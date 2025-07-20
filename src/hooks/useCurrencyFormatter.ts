export const formatCurrency = (
  value: number,
  options: { locale?: string; currency?: string } = {}
): string => {
  const { locale = "ja-JP", currency = "JPY" } = options;
  return value.toLocaleString(locale, {
    style: "currency",
    currency,
  });
};
