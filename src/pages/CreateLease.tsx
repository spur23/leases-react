import { useState, useEffect } from 'react';
import Payments from '../components/Payments';
import Download from '../components/Download';

import { createExcelData, createLease, getNextDay } from '../helpers/utils';
import { GeneratedLease } from '../interfaces';
import { useForm } from '../hooks/useForm';
import Input from '../components/input/Input';
import DataTable from '../components/table/DataTable';
import { FormStyled } from '../StyledForm';

import './CreateLease.css';
import { RouteComponentProps } from '@reach/router';

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
  interestRate: 0,
  deferredRent: 0,
  leaseIncentive: 0,
  initialDirectCosts: 0,
  useEconomicLife: 'false',
  economicLife: 0
};

const CreateLeasePage = (props: RouteComponentProps) => {
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
    { startDate: '', endDate: '', frequency: 'monthly', amount: 0, min: '' }
  ]);

  useEffect(() => {
    if (generatedLease.lease === '') return;
    const leaseExcelData = createExcelData(generatedLease);

    setLeaseInfo(leaseExcelData);
  }, [generatedLease]);

  useEffect(() => {}, [values]);

  const onChangePayments = (updatedPayments: []): void => {
    setPayments(updatedPayments);
  };

  const onClickAdd = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ): void => {
    e.preventDefault();
    const arr = [...payments];
    const priorEndDate = arr[arr.length - 1].endDate;
    const newStartDate = getNextDay(priorEndDate);
    arr.push({
      startDate: newStartDate,
      endDate: '',
      frequency: 'monthly',
      amount: 0,
      min: newStartDate
    });

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
      onChange: handleChange,
      required: true
    },
    {
      label: 'Description:',
      type: InputTypes.Text,
      name: 'description',
      id: 'description',
      value: values.description,
      onChange: handleChange,
      required: true
    },
    {
      label: 'Classification:',
      type: InputTypes.Select,
      name: 'classification',
      id: 'classification',
      value: values.classification,
      onChange: handleChange,
      options: [
        { text: 'Operating', value: 'operating' },
        { text: 'Finance', value: 'finance' }
      ]
    },
    {
      label: 'Use Economic Life:',
      type: InputTypes.Select,
      name: 'useEconomicLife',
      id: 'useEconomicLife',
      value: values.useEconomicLife,
      onChange: handleChange,
      options: [
        { text: 'Yes', value: 'true' },
        { text: 'No', value: 'false' }
      ],
      show: values.classification === 'finance' ? true : false
    },
    {
      label: 'Economic Life (years):',
      type: InputTypes.Number,
      name: 'economicLife',
      id: 'economicLife',
      value: values.economicLife,
      onChange: handleChange,
      show:
        values.useEconomicLife === 'true' && values.classification === 'finance'
          ? true
          : false
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
      ],
      required: true
    },

    {
      label: 'Interest Rate:',
      type: InputTypes.Number,
      name: 'interestRate',
      id: 'interestRate',
      value: values.interestRate,
      onChange: handleChange,
      required: true
    },
    {
      label: 'Deferred Rent:',
      type: InputTypes.Number,
      name: 'deferredRent',
      id: 'deferredRent',
      value: values.deferredRent,
      onChange: handleChange
    },
    {
      label: 'Lease Incentive:',
      type: InputTypes.Number,
      name: 'leaseIncentive',
      id: 'leaseIncentive',
      value: values.leaseIncentive,
      onChange: handleChange
    },
    {
      label: 'Initial Direct Costs:',
      type: InputTypes.Number,
      name: 'initialDirectCosts',
      id: 'initialDirectCosts',
      value: values.initialDirectCosts,
      onChange: handleChange
    }
  ];

  return (
    <div className="App">
      <>
        <FormStyled onSubmit={onSubmit}>
          <h1>Create a Lease</h1>
          {inputObject.map((input, index) => (
            <div key={`${input}-${index}`} className="input-container">
              <Input config={input} />
            </div>
          ))}
          <div className="payments-container">
            <Payments
              onChange={onChangePayments}
              onClickAdd={onClickAdd}
              onClickDelete={onClickDelete}
              paymentsArr={payments}
            />
          </div>
          <button type="submit">Create Lease</button>
        </FormStyled>
        {generatedLease.asset.length !== 0 ? (
          <Download lease={leaseInfo} fileName={values.name} />
        ) : null}
      </>
      <div className="schedule-container">
        <div>
          {generatedLease.liability.length !== 0 ? (
            <>
              <h3>Liabilty Schedule</h3>
              <DataTable data={generatedLease.liability} />
            </>
          ) : null}
        </div>
        <div>
          {generatedLease.asset.length !== 0 ? (
            <>
              <h3>Asset Schedule</h3>
              <DataTable data={generatedLease.asset} />
            </>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default CreateLeasePage;
