import { useState } from 'react';
import { checkDateIsAfter, getFirstDay, getLastDay } from '../utils';

const Payments = ({ onChange, onClickAdd, onClickDelete, paymentsArr }) => {
  const [error, setError] = useState('');

  const handleChange = (
    e: React.FormEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>
  ) => {
    const { name, id, value } = e.currentTarget;
    const indexValue = id.split(' ')[1];

    setError('');

    let updatedValue: string | number;

    if (name === 'startDate') {
      updatedValue = getFirstDay(value);
    } else if (name === 'endDate') {
      updatedValue = getLastDay(value);

      if (!checkDateIsAfter(paymentsArr[indexValue].startDate, updatedValue)) {
        setError('End date must be after start date');
        updatedValue = '';
        return;
      }
    } else if (name === 'amount') {
      updatedValue = Number(value);
    } else {
      updatedValue = value;
    }

    const oldPayment: {
      startDate: string;
      endDate: string;
      frequency: string;
      amount: number;
    } = paymentsArr[indexValue];

    const updatedPayment = {
      ...oldPayment,
      [name]: updatedValue
    };

    const oldArray = [...paymentsArr];

    oldArray[indexValue] = updatedPayment;

    onChange(oldArray);
  };

  return (
    <div>
      <div>
        <button onClick={onClickAdd}>Add Payment</button>
        <button onClick={onClickDelete}>Delete Payment</button>
      </div>
      {/* TODO create error component */}
      {error !== '' ? <p>{error}</p> : null}
      <table>
        <thead>
          <tr>
            <th>Start Date</th>
            <th>End Date</th>
            <th>Frequency</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          {paymentsArr.map((payment, index) => (
            <tr key={index}>
              <td>
                <input
                  type="date"
                  name="startDate"
                  id={`payment ${index}`}
                  value={payment.startDate}
                  onChange={handleChange}
                />
              </td>
              <td>
                <input
                  type="date"
                  name="endDate"
                  id={`payment ${index}`}
                  value={payment.endDate}
                  onChange={handleChange}
                />
              </td>
              <td>
                <select
                  name="frequency"
                  id={`payment ${index}`}
                  onChange={handleChange}
                >
                  <option value="monthly">Monthly</option>
                  <option value="quarterly">Quarterly</option>
                  <option value="semiAnnual">Semi Annual</option>
                  <option value="annual">Annual</option>
                </select>
              </td>
              <td>
                <input
                  type="number"
                  name="amount"
                  id={`payment ${index}`}
                  value={payment.amount}
                  onChange={handleChange}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Payments;
