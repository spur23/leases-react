import { Payments } from '../helpers/leases';

export interface GeneratedLease {
  lease: string;
  description: string;
  classification: string;
  interestRate: number;
  totalPayments: number;
  quantityOfPayments: number;
  presentValue: number;
  prepaid: boolean;
  startDate: string;
  endDate: string;
  payments: Payments[];
  asset: any[];
  liability: any[];
}
