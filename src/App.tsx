import { useState, useEffect } from 'react';
import Payments from './components/Payments';
import Download from './components/Download';

import { createExcelData, createLease } from './helpers/utils';
import { GeneratedLease } from './interfaces';

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
    const leaseExcelData = createExcelData(generatedLease);

    setLeaseInfo(leaseExcelData);
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

    arr.push({ startDate: '', endDate: '', frequency: 'monthly', amount: 0 });

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

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const generatedLease = createLease(payments, lease);
    setGeneratedLease(generatedLease.getAllLeaseInformation());
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
