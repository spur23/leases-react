import { useState } from 'react';
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

const App = () => {
  const [lease, setLease] = useState({
    name: '',
    description: '',
    classification: '',
    interestRate: 0
  });

  const [generatedLease, setGeneratedLease] = useState({});
  const [leaseInfo, setLeaseInfo] = useState([]);
  const [asset, setAsset] = useState([]);
  const [liabiliyt, setLiability] = useState([]);

  const [payments, setPayments] = useState([
    { startDate: '', endDate: '', frequency: '', amount: 0 }
  ]);

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

    leaseSet.setProperties(
      name,
      description,
      leaseClassification,
      interestRate,
      leasePayments,
      false
    );

    setGeneratedLease(leaseSet.getAllLeaseInformation());

    // setLeaseInfo([
    //   {
    //     data: [
    //       generatedLease.lease,
    //       generatedLease.description,
    //       generatedLease.classifcation,
    //       generatedLease.interestRate
    //     ]
    //   }
    // ]);
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
      {Object.keys(generatedLease).length !== 0 ? <Download /> : null}
    </div>
  );
};

export default App;
