import { RouteComponentProps } from '@reach/router';
import Payments from '../components/Payments';
import { usePayments } from '../hooks/usePayments';
import { useState } from 'react';
import { generatePaymentStream } from '../helpers/utils/createLease';
import { InputTypes } from './CreateLease';
import { useForm } from '../hooks/useForm';
import Input from '../components/input/Input';
import { calculatePresentValue, formatNumberDecimal } from '../helpers/utils';
import StyledPresentValueCalc from './StyledPresentValueCalc';

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
    <StyledPresentValueCalc>
      <h4>PV Calculator</h4>
      <form onSubmit={onSubmit}>
        {presentValue !== 0 && (
          <p>Calculated Present Value: {formatNumberDecimal(presentValue)}</p>
        )}
        {inputObject.map((input, index) => (
          <div key={`${input}-${index}`} className="input-container">
            <Input config={input} />
          </div>
        ))}
        <div className="payments-container">
          <Payments
            onChange={onChangePayments}
            onClickAdd={onClickAddPayment}
            onClickDelete={onClickDeletePayment}
            paymentsArr={payments}
          />
        </div>
        <div className="submit-button-container">
          <button type="submit" className="form-submit">
            Calculate PV
          </button>
        </div>
      </form>
    </StyledPresentValueCalc>
  );
};

export default PresentValueCalculatorPage;
