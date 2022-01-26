import { Router } from "@reach/router";

import "./App.css";
import Navbar from "./components/navbar/Navbar";
import CreateLeasePage from "./pages/CreateLease";
import HomePage from "./pages/HomePage";
import PresentValueCalculatorPage from "./pages/PresentValueCalculator";
import FinanceLeaseCriteria from "./pages/FinanceLeaseCriteria";
import InitialRecognition from "./pages/InitialRecognition";
import SubsequentRecognition from "./pages/Subsequent Recognition";

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <div className="page-container">
        <Router>
          <HomePage path="/leases-react/" />
          <FinanceLeaseCriteria path={"/leases-react/finance-criteria"} />
          <InitialRecognition path={"/leases-react/initial-recognition"} />
          <SubsequentRecognition
            path={"/leases-react/subsequent-recognition"}
          />
          <CreateLeasePage path="/leases-react/create-lease" />
          <PresentValueCalculatorPage path="leases-react/present-value-calculator" />
        </Router>
      </div>
    </div>
  );
};

export default App;
