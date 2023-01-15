type styleCurrency = "en-US" | "en-GB" | "en-IN" | "en-DE";
export function formatCurrency(
  style: styleCurrency = "en-US",
  currency: string = "currency",
  price: number
): string {
  return new Intl.NumberFormat(style, { currency, price });
}
