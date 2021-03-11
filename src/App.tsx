import { Router } from '@reach/router';

import './App.css';
import Navbar from './components/navbar/Navbar';
import CreateLeasePage from './pages/CreateLease';
import HomePage from './pages/HomePage';
import PresentValueCalculatorPage from './pages/PresentValueCalculator';

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <div className="page-container">
        <Router>
          <HomePage path="/leases-react/" />
          <CreateLeasePage path="/leases-react/create-lease" />
          <PresentValueCalculatorPage path="leases-react/present-value-calculator" />
        </Router>
      </div>
    </div>
  );
};

export default App;
