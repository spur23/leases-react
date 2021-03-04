import { monthCorrection } from '.';

/**
 * takes a date as string returns last day of the month
 * @param value
 */
export const getLastDay = (value: string): string => {
  const date = new Date(value);

  const newDate = new Date(date.getFullYear(), date.getMonth() + 1, 1);

  newDate.setDate(newDate.getDate() - 1);

  const month = monthCorrection(newDate.getMonth());

  return `${newDate.getFullYear()}-${month}-${newDate.getDate()}`;
};
