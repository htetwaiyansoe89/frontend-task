export function creditCardNumberFormatter(value: string): string {
  // Remove non-numeric characters
  const cleaned = value.replace(/\D/g, '');

  // Add spaces every 4 digits
  const formatted = cleaned.replace(/(\d{4})(?=\d)/g, '$1 ');

  // Limit to 16 digits (or 19 with spaces)
  return formatted.slice(0, 19);
}

export function expirationDateFormatter(value: string): string {
  // Remove non-numeric characters
  const cleaned = value.replace(/\D/g, '');

  // Add a slash after the first two digits (if present)
  const formatted = cleaned.replace(/(\d{2})(?=\d)/g, '$1/');

  // Limit to 5 characters (MM/YY)
  return formatted.slice(0, 5);
}