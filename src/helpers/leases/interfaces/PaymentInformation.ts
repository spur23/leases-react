import { PaymentFrequency } from "../enums";

export interface PaymentInformation {
  payment: number;
  frequency: PaymentFrequency;
  startDate: string;
  endDate: string;
  payments: number;
}
