import { Router, Link } from '@reach/router';

import './App.css';
import CreateLeasePage from './pages/CreateLease';

const App = () => {
  return (
    <div className="App">
      <Router>
        <CreateLeasePage path="/leases-react/" />
      </Router>
    </div>
  );
};

export default App;
