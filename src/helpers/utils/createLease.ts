import { formatDate } from ".";
import {
  Lease,
  LeaseClassification,
  Payment,
  PaymentFrequency,
  Payments,
} from "../leases";
import { LeaseType } from "../../hooks/useForm";

export const generatePaymentStream = (payments): Payments => {
  const paymentStream = payments.map((el) => {
    const { amount, frequency, startDate, endDate } = el;
    const stDate = formatDate(startDate);
    const edDate = formatDate(endDate);

    return new Payment({
      payment: amount,
      frequency:
        frequency === "monthly"
          ? PaymentFrequency.Monthly
          : frequency === "quarterly"
          ? PaymentFrequency.Quarterly
          : frequency === "semiAnnual"
          ? PaymentFrequency.SemiAnnual
          : PaymentFrequency.Annual,
      startDate: stDate,
      endDate: edDate,
    });
  });

  return new Payments(paymentStream);
};

export const createLease = (payments, leaseInfo: LeaseType) => {
  const {
    name,
    description,
    interestRate,
    deferredRent,
    leaseIncentive,
    initialDirectCosts,
    economicLife,
  } = leaseInfo;

  const leasePayments = generatePaymentStream(payments);

  const lease = new Lease();

  const leaseClassification =
    leaseInfo.classification === "operating"
      ? LeaseClassification.OPERATING
      : LeaseClassification.FINANCE;

  const prepaid = leaseInfo.prepaid === "true";
  const useEconomicLife = leaseInfo.useEconomicLife === "true";

  lease.setProperties(
    name,
    description,
    leaseClassification,
    interestRate,
    leasePayments,
    prepaid,
    Number(deferredRent),
    Number(leaseIncentive),
    Number(initialDirectCosts),
    useEconomicLife,
    Number(economicLife)
  );

  return lease;
};
