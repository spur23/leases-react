import { PaymentFrequency } from "../enums";

export interface PaymentValues {
  payment: number;
  frequency: PaymentFrequency;
  startDate: string;
  endDate: string;
}
