import { useState, useEffect } from 'react';
import Payments from './components/Payments';
import {
  Lease,
  Payment,
  Payments as LeasePayments,
  LeaseClassification,
  PaymentFrequency
} from './leases/index';
import Download from './components/Download';
// import Papa from 'papaparse';
// import FileSaver from 'file-saver';

interface GeneratedLease {
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
  payments: LeasePayments[];
  asset: any[];
  liability: any[];
}

const App = () => {
  const [lease, setLease] = useState({
    name: '',
    description: '',
    classification: 'operating',
    prepaid: 'true',
    interestRate: 0
  });

  const [generatedLease, setGeneratedLease] = useState<GeneratedLease>({
    lease: '',
    description: '',
    classification: '',
    interestRate: 0,
    totalPayments: 0,
    quantityOfPayments: 0,
    presentValue: 0,
    prepaid: true,
    startDate: '',
    endDate: '',
    payments: [],
    asset: [],
    liability: []
  });
  const [leaseInfo, setLeaseInfo] = useState([]);

  const [payments, setPayments] = useState([
    { startDate: '', endDate: '', frequency: 'monthly', amount: 0 }
  ]);

  useEffect(() => {
    const assetSchedule = generatedLease.asset.map((month) => [
      month.date,
      month.beginningBalance,
      month.depreciation,
      month.endingBalance
    ]);

    const liabilitySchedule = generatedLease.liability.map((month) => [
      month.date,
      month.beginningBalance,
      month.payment,
      month.interestExpense,
      month.interestPayment,
      month.principal,
      month.endingBalance
    ]);
    setLeaseInfo([
      {
        columns: [''],
        data: [
          ['Name: ', generatedLease.lease],
          ['Description: ', generatedLease.description],
          ['Classificatoin: ', generatedLease.classification],
          ['Prepaid', generatedLease.prepaid],
          ['Discount Rate: ', generatedLease.interestRate * 100],
          ['Total Payments: ', generatedLease.totalPayments],
          ['Present Value: ', generatedLease.presentValue],
          ['Start Date: ', generatedLease.startDate],
          ['End Date: ', generatedLease.endDate]
        ]
      },
      { ySteps: 5, columns: ['Asset Schedule'], data: [['']] },
      {
        // xSteps: 1, // Will start putting cell with 1 empty cell on left most
        ySteps: -1, //will put space of 5 rows,
        columns: [
          'Date',
          'Beginning Balance',
          'Depreciation',
          'Ending Balance'
        ],
        data: assetSchedule
      },
      {
        ySteps: -assetSchedule.length - 2,
        xSteps: 6,
        columns: ['Liability Schedule'],
        data: [['']]
      },
      {
        ySteps: -1,
        xSteps: 6,
        columns: [
          'Date',
          'Beginning Balance',
          'Payment',
          'Interest Expense',
          'Interest Payment',
          'Principal',
          'Ending Balance'
        ],
        data: liabilitySchedule
      }
    ]);
  }, [generatedLease]);

  const onChange = (
    event:
      | React.FormEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLSelectElement>
  ): void => {
    const { id, value } = event.currentTarget;

    setLease({ ...lease, [id]: value });
  };

  const onChangePayments = (updatedPayments: []): void => {
    setPayments(updatedPayments);
  };

  const onClickAdd = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ): void => {
    e.preventDefault();
    const arr = [...payments];

    arr.push({ startDate: '', endDate: '', frequency: '', amount: 0 });

    setPayments(arr);
  };

  const onClickDelete = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ): void => {
    e.preventDefault();

    if (payments.length === 1) return;

    const arr = [...payments];

    arr.pop();

    setPayments(arr);
  };

  const formatDate = (value) => {
    const dateArr = value.split('-');

    return `${dateArr[1]}/${dateArr[2]}/${dateArr[0]}`;
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const { name, description, interestRate } = lease;

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

    const leasePayments = new LeasePayments(paymentStream);

    const leaseSet = new Lease();

    const leaseClassification =
      lease.classification === 'operating'
        ? LeaseClassification.OPERATING
        : LeaseClassification.FINANCE;

    const prepaid = lease.prepaid === 'true' ? true : false;

    leaseSet.setProperties(
      name,
      description,
      leaseClassification,
      interestRate,
      leasePayments,
      prepaid
    );

    setGeneratedLease(leaseSet.getAllLeaseInformation());
  };

  return (
    <div className="App">
      <h1>Create a Lease</h1>

      <form onSubmit={onSubmit}>
        <label>Name: </label>
        <input
          type="text"
          name="name"
          id="name"
          value={lease.name}
          onChange={onChange}
        />
        <label>Description:</label>
        <input
          name="description"
          id="description"
          value={lease.description}
          onChange={onChange}
        />
        <label>Classifcation: </label>
        <select
          name="classification"
          id="classification"
          value={lease.classification}
          onChange={onChange}
        >
          <option value="operating">Operating</option>
          <option value="finance">Finance</option>
        </select>
        <label>Prepaid: </label>
        <select
          name="prepaid"
          id="prepaid"
          value={lease.prepaid}
          onChange={onChange}
        >
          <option value="true">Yes</option>
          <option value="false">No</option>
        </select>
        <label>Interest Rate</label>
        <input
          type="number"
          name="interestRate"
          id="interestRate"
          value={lease.interestRate}
          onChange={onChange}
        />
        <div>
          <Payments
            onChange={onChangePayments}
            onClickAdd={onClickAdd}
            onClickDelete={onClickDelete}
            paymentsArr={payments}
          />
        </div>
        <button type="submit">Create Lease</button>
      </form>
      {generatedLease.lease !== '' ? <Download lease={leaseInfo} /> : null}
    </div>
  );
};

export default App;
