import { monthCorrection } from '.';

/**
 * takes a date as string returns the first day of the month
 * @param value
 */
export const getFirstDay = (value: string): string => {
  const dateArr = value.split('-');
  const newDate = new Date(
    Number(dateArr[0]),
    Number(dateArr[1]) - 1,
    Number(dateArr[2])
  );

  const month = monthCorrection(newDate.getMonth());

  const day = '01';
  const year = newDate.getFullYear();

  const updatedDate = `${year}-${month}-${day}`;

  return updatedDate;
};
