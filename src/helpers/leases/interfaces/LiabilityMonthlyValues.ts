export interface LiabilityMonthlyValues {
  date: Date;
  beginningBalance: number;
  payment: number;
  interestExpense: number;
  endingBalance: number;
  shortTermBalance: number;
  longTermBalance: number;
}
