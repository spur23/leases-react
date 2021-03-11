import { Router } from '@reach/router';

import './App.css';
import Navbar from './components/navbar/Navbar';
import CreateLeasePage from './pages/CreateLease';
import HomePage from './pages/HomePage';

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Router>
        <HomePage path="/leases-react/" />
        <CreateLeasePage path="/leases-react/create-lease" />
      </Router>
    </div>
  );
};

export default App;
