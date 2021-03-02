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
