export const formatDate = (value: string) => {
  const dateArr = value.split('-');

  return `${dateArr[1]}/${dateArr[2]}/${dateArr[0]}`;
};
