import { RouteComponentProps } from '@reach/router';
import Payments from '../components/Payments';
import { usePayments } from '../hooks/usePayments';
import { useState } from 'react';
import { generatePaymentStream } from '../helpers/utils/createLease';
import { InputTypes } from './CreateLease';
import { useForm } from '../hooks/useForm';
import Input from '../components/input/Input';
import { calculatePresentValue, formatNumberDecimal } from '../helpers/utils';

const leaseInitialValues = {
  prepaid: 'true',
  interestRate: 0
};

const PresentValueCalculatorPage = (props: RouteComponentProps) => {
  const [presentValue, setPresentValue] = useState(0);

  const [values, handleChange] = useForm(leaseInitialValues);

  const [
    payments,
    onChangePayments,
    onClickAddPayment,
    onClickDeletePayment
  ] = usePayments();

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const leasePayments = generatePaymentStream(payments).paymentStream();

    let prepaid: boolean;
    if (values.prepaid === 'true') {
      prepaid = true;
    } else {
      prepaid = false;
    }

    setPresentValue(
      calculatePresentValue(leasePayments, values.interestRate, prepaid)
    );
  };

  const inputObject = [
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
    }
  ];

  return (
    <div className="presentvaluepage-container">
      <h4>PV Calculator</h4>
      <p>Calculated Present Value: {formatNumberDecimal(presentValue)}</p>
      <form onSubmit={onSubmit}>
        {inputObject.map((input, index) => (
          <div key={`${input}-${index}`} className="input-container">
            <Input config={input} />
          </div>
        ))}
        <Payments
          onChange={onChangePayments}
          onClickAdd={onClickAddPayment}
          onClickDelete={onClickDeletePayment}
          paymentsArr={payments}
        />
        <button type="submit">Calculate PV</button>
      </form>
    </div>
  );
};

export default PresentValueCalculatorPage;
