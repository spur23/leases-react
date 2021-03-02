import { useState } from 'react';

const Payments = () => {
  const [payments, setPayments] = useState([
    { startDate: '', endDate: '', frequency: '', amount: 0 }
  ]);

  const onClickAdd = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    const arr = [...payments];

    arr.push({ startDate: '', endDate: '', frequency: '', amount: 0 });

    setPayments(arr);
  };

  const onClickDelete = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();

    if (payments.length === 1) return;

    const arr = [...payments];

    arr.pop();

    setPayments(arr);
  };

  const handleChange = (
    e: React.FormEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>
  ) => {
    const { name, id, value } = e.currentTarget;

    let updatedValue: string | number;

    if (name === 'startDate') {
      updatedValue = getFirstDay(value);
    } else if (name === 'endDate') {
      updatedValue = getLastDay(value);
    } else {
      updatedValue = value;
    }

    const indexValue = id.split(' ')[1];
    const oldPayment: {
      startDate: string;
      endDate: string;
      frequency: string;
      amount: number;
    } = payments[indexValue];

    const updatedPayment = {
      ...oldPayment,
      [name]: updatedValue
    };

    const oldArray = [...payments];

    oldArray[indexValue] = updatedPayment;

    setPayments(oldArray);
  };

  /**
   * takes a date as string returns the first day of the month
   * @param value
   */
  const getFirstDay = (value: string): string => {
    const newDate = new Date(value);

    const month = monthCorrection(newDate.getMonth());

    const day = '01';
    const year = newDate.getFullYear();

    const updatedDate = `${year}-${month}-${day}`;

    return updatedDate;
  };

  /**
   * takes a date as string returns last day of the month
   * @param value
   */
  const getLastDay = (value: string): string => {
    const date = new Date(value);

    const newDate = new Date(date.getFullYear(), date.getMonth() + 1, 1);

    newDate.setDate(newDate.getDate() - 1);

    const month = monthCorrection(newDate.getMonth());

    return `${newDate.getFullYear()}-${month}-${newDate.getDate()}`;
  };

  /**
   * corrects the month to two digits
   * @param month
   */
  const monthCorrection = (month: number | string): string => {
    const monthNumber = Number(month);

    const correctedMonth =
      monthNumber + 1 < 10 ? `0${monthNumber + 1}` : monthNumber + 1;

    return correctedMonth.toString();
  };

  return (
    <div>
      <div>
        <button onClick={onClickAdd}>Add Payment</button>
        <button onClick={onClickDelete}>Delete Payment</button>
      </div>
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
          {payments.map((payment, index) => (
            <tr>
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
