import { useState } from 'react';
import { getNextDay } from '../helpers/utils';

export const usePayments = () => {
  const [payments, setPayments] = useState([
    { startDate: '', endDate: '', frequency: 'monthly', amount: 0, min: '' }
  ]);

  const onChangePayments = (updatedPayments: []): void => {
    setPayments(updatedPayments);
  };

  const onClickAddPayment = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ): void => {
    e.preventDefault();
    const arr = [...payments];
    const priorEndDate = arr[arr.length - 1].endDate;
    const newStartDate = getNextDay(priorEndDate);
    arr.push({
      startDate: newStartDate,
      endDate: '',
      frequency: 'monthly',
      amount: 0,
      min: newStartDate
    });

    setPayments(arr);
  };

  const onClickDeletePayment = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ): void => {
    e.preventDefault();

    if (payments.length === 1) return;

    const arr = [...payments];

    arr.pop();

    setPayments(arr);
  };

  return [payments, onChangePayments, onClickAddPayment, onClickDeletePayment];
};
