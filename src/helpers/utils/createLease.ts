import { formatDate } from '.';
import {
  Lease,
  LeaseClassification,
  Payment,
  PaymentFrequency,
  Payments
} from '../leases';

const generatePaymentStream = (payments) => {
  const paymentStream = payments.map((el) => {
    const { amount, frequency, startDate, endDate } = el;
    const stDate = formatDate(startDate);
    const edDate = formatDate(endDate);

    return new Payment({
      payment: amount,
      frequency:
        frequency === 'monthly'
          ? PaymentFrequency.Monthly
          : frequency === 'quarterly'
          ? PaymentFrequency.Quarterly
          : frequency === 'semiannual'
          ? PaymentFrequency.SemiAnnual
          : PaymentFrequency.Annual,
      startDate: stDate,
      endDate: edDate
    });
  });

  return paymentStream;
};

export const createLease = (payments, leaseInfo) => {
  const { name, description, interestRate } = leaseInfo;

  const paymentStream = generatePaymentStream(payments);

  const leasePayments = new Payments(paymentStream);

  const lease = new Lease();

  const leaseClassification =
    leaseInfo.classification === 'operating'
      ? LeaseClassification.OPERATING
      : LeaseClassification.FINANCE;

  const prepaid = leaseInfo.prepaid === 'true' ? true : false;

  lease.setProperties(
    name,
    description,
    leaseClassification,
    interestRate,
    leasePayments,
    prepaid
  );

  return lease;
};
