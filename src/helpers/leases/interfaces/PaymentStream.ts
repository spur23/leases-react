import { PaymentFrequency } from "../enums";

export interface PaymentStream {
  month: string;
  payment: number;
  frequency: PaymentFrequency;
}
