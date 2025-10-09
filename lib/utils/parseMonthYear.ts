export function parseMonthYear(value: string): Date | null {
  if (!/^\d{2}\/\d{2}$/.test(value)) {
    console.error("Formato inválido, use mm/yy");
    return null;
  }

  const [monthStr, yearStr] = value.split("/");
  const month = parseInt(monthStr, 10);
  const year = 2000 + parseInt(yearStr, 10);

  if (month < 1 || month > 12) {
    console.error("Mês inválido");
    return null;
  }

  return new Date(year, month - 1, 1);
}
