import { discountRate } from './index';

export const calculatePresentValue = (
  payments,
  interestRate: number,
  prepaid: boolean
): number => {
  const paymentStream = payments.map((month) => {
    return { payment: month.payment, frequency: month.frequency };
  });

  const reducerFunction = calcPresentValue(interestRate, prepaid);

  return paymentStream.reduce(reducerFunction, 0);
};

/**
 * Generates the reducer function for PV calculation
 * @param interestRate
 * @returns
 */
const calcPresentValue = (interestRate: number, prepaid: boolean) => {
  return (
    accumulator: number,
    currentValue: { payment: number; frequency: string },
    index: number
  ) => {
    const { payment } = currentValue;

    const rateOfReturn = discountRate(interestRate);

    if (prepaid) {
      if (index === 0) return payment;

      return accumulator + payment / Math.pow(1 + rateOfReturn, index);
    } else {
      return accumulator + payment / Math.pow(1 + rateOfReturn, index + 1);
    }
  };
};
