import { useState } from 'react';
import Payments from './components/Payments';
import {
  Leases,
  Lease,
  Payment,
  LeaseClassification,
  PaymentFrequency
} from '../../leases/src';

function App() {
  const [lease, setLease] = useState({
    name: '',
    description: '',
    interestRate: 0
  });

  const onChange = (event: React.FormEvent<HTMLInputElement>) => {
    const { id, value } = event.currentTarget;

    setLease({ ...lease, [id]: value });
  };
  return (
    <div className="App">
      <h1>Create a Lease</h1>
      <form>
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
        <label>Interest Rate</label>
        <input
          type="number"
          name="interestRate"
          id="interestRate"
          value={lease.interestRate}
          onChange={onChange}
        />
        <div>
          <Payments />
        </div>
        <button type="submit">Create Lease</button>
      </form>
    </div>
  );
}

export default App;
