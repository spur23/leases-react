export const capitalizeFirstLetter = (word: string) =>
  word[0].toUpperCase() + word.substring(1);

export const formatDate = (value: string) => {
  const dateArr = value.split('-');

  return `${dateArr[1]}/${dateArr[2]}/${dateArr[0]}`;
};

export const formatNumberDecimal = (value: number): string =>
  value.toLocaleString('en-US', {
    maximumFractionDigits: 2,
    style: 'decimal'
  });

export const formatNumberPercent = (value: number): string =>
  value.toLocaleString('en-US', {
    maximumFractionDigits: 2,
    style: 'percent'
  });
