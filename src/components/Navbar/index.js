import BankImage from '../BankImage';
import { Link } from 'react-router-dom';
import './styles.css';

export default function NavBar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <BankImage/>
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarText"
            aria-controls="navbarText"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarText">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" to="/create-account/">
                  Create Account
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Deposit/">
                  Deposit
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/withdraw/">
                  Withdraw
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/alldata/">
                  All Data
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
