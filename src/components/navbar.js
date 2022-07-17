import { Link } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../pages/userContext";


export default function NavBar() {
  return(
    <>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="/">BadBank</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
             <Link className="nav-link" to="/">Home</Link> 
          </li>
          <li className="nav-item">
              <Link className="nav-link" to="/createaccount">Create Account</Link>
          </li>
          
          <li className="nav-item">
              <Link className="nav-link" to="/deposit">Deposit</Link>
          </li>
          <li className="nav-item">
          <Link className="nav-link" to="/withdraw">Withdraw</Link>
          </li>
       
          <li className="nav-item">
          <Link className="nav-link" to="/alldata">All Data</Link>
          </li>          
        </ul>
      </div>
    </nav>
    </>
  );
}


