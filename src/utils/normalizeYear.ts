export type YearValue = string | number | Date | null | undefined;

export const normalizeYear = (value: YearValue): number | null => {
  if (value instanceof Date) {
    return value.getFullYear();
  }

  if (typeof value === 'number' && Number.isFinite(value)) {
    return value;
  }

  if (typeof value === 'string' && value.trim()) {
    const numericYear = Number(value);
    if (!Number.isNaN(numericYear)) {
      return numericYear;
    }

    const parsedDate = new Date(value);
    if (!Number.isNaN(parsedDate.getTime())) {
      return parsedDate.getFullYear();
    }
  }

  return null;
};
