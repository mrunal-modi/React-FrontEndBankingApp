import BankImage from "../../components/Icons/BankImage";
import { Link } from "react-router-dom";
// import RenderContacts from "../../components/Contact/RenderContact";
import "./NavBar.css";

export default function NavBar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <BankImage />
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
                <Link className="nav-link" to="/login/">
                  Login
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/deposit/">
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

              <li className="nav-item">
                <Link className="nav-link" to="/logout/">
                  <i className="bi bi-box-arrow-in-right"></i>
                </Link>
              </li>
              {/* <RenderContacts /> */}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
