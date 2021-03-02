import { monthCorrection } from '.';

/**
 * takes a date as string returns the first day of the month
 * @param value
 */
export const getFirstDay = (value: string): string => {
  const newDate = new Date(value);

  const month = monthCorrection(newDate.getMonth());

  const day = '01';
  const year = newDate.getFullYear();

  const updatedDate = `${year}-${month}-${day}`;

  return updatedDate;
};
