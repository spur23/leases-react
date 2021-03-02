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
    const indexValue = id.split(' ')[1];
    const oldPayment = payments[indexValue];

    const updatedPayment = {
      ...oldPayment,
      [name]: value
    };

    const oldArray = [...payments];

    oldArray[indexValue] = updatedPayment;

    setPayments(oldArray);
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
