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

  return `${year}-${month}-${day}`;
};

/**
 * takes a date as string returns last day of the month
 * @param value
 */
export const getLastDay = (value: string): string => {
  const dateArr = value.split('-');
  const date = new Date(
    Number(dateArr[0]),
    Number(dateArr[1]) - 1,
    Number(dateArr[2])
  );

  const newDate = new Date(date.getFullYear(), date.getMonth() + 1, 1);

  newDate.setDate(newDate.getDate() - 1);

  const month = monthCorrection(newDate.getMonth());
  const year = newDate.getFullYear();
  const day = newDate.getDate();

  return `${year}-${month}-${day}`;
};

export const getNextDay = (value: string): string => {
  const date = new Date(value);
  const day = '01';
  const newDate = new Date(date.getFullYear(), date.getMonth() + 1, 1);
  const month = monthCorrection(newDate.getMonth());
  return `${newDate.getFullYear()}-${month}-${day}`;
};

/**
 * corrects the month to two digits
 * @param month
 */
export const monthCorrection = (month: number | string): string => {
  const monthNumber = Number(month);

  const correctedMonth =
    monthNumber + 1 < 10 ? `0${monthNumber + 1}` : monthNumber + 1;

  return correctedMonth.toString();
};

/**
 * Checks if the start date is after the end date
 * @param startDate
 * @param endDate
 */
export const checkDateIsAfter = (
  startDate: string,
  endDate: string
): boolean => {
  const start = new Date(startDate);
  const end = new Date(endDate);

  return end.valueOf() > start.valueOf();
};
