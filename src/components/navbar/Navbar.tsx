import { Link } from "@reach/router";
import StyledNavbar from "./StyledNavbar";

const Navbar = () => {
  return (
    <StyledNavbar>
      <ul>
        <li>
          <Link to="/leases-react/">Home</Link>
        </li>
        <li>
          <Link to="/leases-react/finance-criteria">
            Finance Lease Criteria
          </Link>
        </li>
        <li>
          <Link to="/leases-react/initial-recognition">
            Initial Recognition
          </Link>
        </li>
        <li>
          <Link to="/leases-react/subsequent-recognition">
            Subsequent Recognition
          </Link>
        </li>
        <li>
          <Link to="/leases-react/create-lease">Create Lease</Link>
        </li>
        <li>
          <Link to="/leases-react/present-value-calculator">
            Present Value Calculator
          </Link>
        </li>
      </ul>
    </StyledNavbar>
  );
};

export default Navbar;
