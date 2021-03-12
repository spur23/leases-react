import { roundNumber } from ".";
import { LiabilityMonthly } from "../classes/Liability/LiabilityMonthly";
import { PaymentStream } from "../interfaces";
import { discountRate } from "../../utils";

/**
 *Calculates liability monthly schedule.
 */
const generateLiability = (
  paymentStream: PaymentStream[],
  startingBalance: number,
  interestRate: number,
  prepaid: boolean
) => {
  let result = [];
  const payments = [...paymentStream];

  for (let i = 0; i < payments.length; i++) {
    const date = new Date(payments[i].month);
    const { payment } = payments[i];

    const correctedInterestRate = discountRate(interestRate);

    result.push(
      calculateLiability(
        startingBalance,
        payment,
        correctedInterestRate,
        date,
        prepaid,
        i,
        payments.length,
        result
      )
    );
  }

  result = calculateSTLTBalances(result);

  return result;
};

const calculateLiability = (
  startingBalance: number,
  payment: number,
  interestRate: number,
  date: Date,
  prepaid: boolean,
  index: number,
  paymentsLength: number,
  schedule: any[]
) => {
  if (index === 0) {
    const principal = payment;
    const interestPayment = 0;

    if (prepaid) {
      const interestExpense = (startingBalance - payment) * interestRate;

      const endingBalance = endBalance(
        startingBalance,
        interestExpense,
        principal,
        interestPayment
      );

      return new LiabilityMonthly(
        date,
        payment,
        roundNumber(startingBalance, 2),
        interestRate,
        roundNumber(interestExpense, 2),
        roundNumber(endingBalance, 2),
        prepaid
      );
    } else {
      const interestExpense = startingBalance * interestRate;
      const endingBalance = endBalance(
        startingBalance,
        interestExpense,
        principal,
        interestPayment
      );

      return new LiabilityMonthly(
        date,
        payment,
        roundNumber(startingBalance, 2),
        interestRate,
        roundNumber(interestExpense, 2),
        roundNumber(endingBalance, 2),
        prepaid
      );
    }
  } else {
    // get prior month ending balance and interest expense for
    // current months beginning balance and interest payment
    const { interestExpense, endingBalance } = schedule[
      index - 1
    ].getMonthlyData();

    if (prepaid) {
      let currentMonthInterestExpense =
        (endingBalance - payment) * interestRate;

      let principal = payment - interestExpense;
      let interestPayment = interestExpense;

      if (payment === 0) {
        principal = 0;
        interestPayment = 0;
      }

      if (index === paymentsLength - 1) {
        currentMonthInterestExpense = 0;
      }

      const currentMonthEndingBalance = endBalance(
        endingBalance,
        currentMonthInterestExpense,
        principal,
        interestPayment
      );

      return new LiabilityMonthly(
        date,
        payment,
        roundNumber(endingBalance, 2),
        interestRate,
        roundNumber(currentMonthInterestExpense, 2),
        roundNumber(currentMonthEndingBalance, 2),
        prepaid
      );
    } else {
      const currentMonthInterestExpense = endingBalance * interestRate;

      const principal = payment;

      const interestPayment = 0;

      const currentMonthEndingBalance =
        endingBalance +
        currentMonthInterestExpense -
        principal -
        interestPayment;

      return new LiabilityMonthly(
        date,
        payment,
        roundNumber(endingBalance, 2),
        interestRate,
        roundNumber(currentMonthInterestExpense, 2),
        roundNumber(currentMonthEndingBalance, 2),
        prepaid
      );
    }
  }
};

/**
 * Calculate the ending balance for the month
 * @param beginningBalance
 * @param interestExpense
 * @param principal
 * @param interestPayment
 * @returns
 */
const endBalance = (
  beginningBalance: number,
  interestExpense: number,
  principal: number,
  interestPayment: number
): number => beginningBalance + interestExpense - principal - interestPayment;

/**
 * Calculates the ST and LT balances for the liability schedule
 * @param liabilitySchedule
 * @returns
 */
const calculateSTLTBalances = (liabilitySchedule) => {
  let result = [...liabilitySchedule];
  let stBalance = 0;
  let ltBalance = 0;

  result.sort(
    (a, b) => new Date(a.date).valueOf() - new Date(b.date).valueOf()
  );

  for (let i = 0; i < result.length; i++) {
    // long term balance is equal to the ending balance 12 months out excluding month 1
    // outside of that lt balance is equal to 0
    if (result[i + 11]) {
      ltBalance = result[i + 11].endingBalance;
    } else {
      ltBalance = 0;
    }

    stBalance = result[i].endingBalance - ltBalance;

    if (i < result.length - 12) {
      result[i].shortTermBalance = stBalance;
      result[i].longTermBalance = ltBalance;
    } else {
      result[i].shortTermBalance = result[i].endingBalance;
      result[i].longTermBalance = 0;
    }
  }

  return result;
};

export default generateLiability;
