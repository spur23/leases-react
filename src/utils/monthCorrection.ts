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
