import { LiabilityMonthlyValues } from '../../interfaces';

export class LiabilityMonthly {
  shortTermBalance?: number;
  longTermBalance?: number;

  constructor(
    public date: Date,
    public payment: number,
    public beginningBalance: number,
    public interestRate: number,
    public interestExpense: number,
    public endingBalance: number,
    public prepaid?: boolean
  ) {
    this.date = date;
    this.beginningBalance = beginningBalance;
    this.interestRate = interestRate;
    this.interestExpense = interestExpense;
    this.payment = payment;
    this.endingBalance = endingBalance;
  }

  getMonthlyData(): LiabilityMonthlyValues {
    return {
      date: this.date,
      beginningBalance: this.beginningBalance,
      payment: this.payment,
      interestExpense: this.interestExpense,
      endingBalance: this.endingBalance,
      shortTermBalance: this.shortTermBalance,
      longTermBalance: this.longTermBalance
    };
  }
}
