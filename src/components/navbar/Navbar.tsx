import { Link } from '@reach/router';

const Navbar = () => {
  return (
    <div className="navbar-container">
      <ul>
        <li>
          <Link to="/leases-react/">Home</Link>
          <Link to="/leases-react/create-lease">Create Lease</Link>
          <Link to="/leases-react/present-value-calculator">
            Present Value Calculator
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
