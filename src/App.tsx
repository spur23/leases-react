import { useState, useEffect } from 'react';
import Payments from './components/Payments';
import Download from './components/Download';

import { createExcelData, createLease } from './helpers/utils';
import { GeneratedLease } from './interfaces';
import { useForm } from './hooks/useForm';
import Input from './components/Input';

export enum InputTypes {
  Select = 'select',
  Text = 'text',
  Number = 'number'
}

const leaseInitialValues = {
  name: '',
  description: '',
  classification: 'operating',
  prepaid: 'true',
  interestRate: 0
};

const App = () => {
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

  const [values, handleChange] = useForm(leaseInitialValues);

  const [payments, setPayments] = useState([
    { startDate: '', endDate: '', frequency: 'monthly', amount: 0 }
  ]);

  useEffect(() => {
    const leaseExcelData = createExcelData(generatedLease);

    setLeaseInfo(leaseExcelData);
  }, [generatedLease]);

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

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const genLease = createLease(payments, values);

    setGeneratedLease(genLease.getAllLeaseInformation());
  };

  const inputObject = [
    {
      label: 'Name:',
      type: InputTypes.Text,
      name: 'name',
      id: 'name',
      value: values.name,
      onChange: handleChange
    },
    {
      label: 'Description:',
      type: InputTypes.Text,
      name: 'description',
      id: 'description',
      value: values.description,
      onChange: handleChange
    },
    {
      label: 'Interest Rate:',
      type: InputTypes.Number,
      name: 'interestRate',
      id: 'interestRate',
      value: values.interestRate,
      onChange: handleChange
    },
    {
      label: 'Prepaid:',
      type: InputTypes.Select,
      name: 'prepaid',
      id: 'prepaid',
      value: values.prepaid,
      onChange: handleChange,
      options: [
        { text: 'Yes', value: 'true' },
        { text: 'No', value: 'false' }
      ]
    },
    {
      label: 'Classification:',
      type: InputTypes.Select,
      name: 'classification',
      id: 'classification',
      value: values.prepaid,
      onChange: handleChange,
      options: [
        { text: 'Operating', value: 'operting' },
        { text: 'Finance', value: 'finance' }
      ]
    }
  ];

  return (
    <div className="App">
      <h1>Create a Lease</h1>
      <form onSubmit={onSubmit}>
        {inputObject.map((input) => (
          <Input config={input} />
        ))}
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
      {generatedLease.asset.length !== 0 ? (
        <Download lease={leaseInfo} />
      ) : null}
    </div>
  );
};

export default App;
