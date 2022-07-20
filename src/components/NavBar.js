import "../App.css";
import { UserContext } from "../index";
import React, { useContext } from "react";
import Login from "./Login";
import { useNavigate, useLocation } from "react-router-dom";
import Nav from "react-bootstrap/Nav";

function NavBar(props) {

  const ctx = useContext(UserContext);
  let location = useLocation();

  const handleLogout = () => {
    ctx.loggedUser = null;
    props.setIsLogged(false);
  };

  console.log(String(location.pathname))
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="/#">
          <b>Bad Bank</b>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse px-3 justify-content-end"
          id="navbarNavAltMarkup"
        >
          <div className="navbar-nav">
            <Nav variant="pills" activeKey={location.pathname !== '/' ? String(location.pathname) : ''} >
              <Nav.Item className="nav-item">
                <Nav.Link href="/index.html" eventKey="" className="nav-link">Home</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="#/deposit" eventKey="/deposit">Deposit</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="#/withdraw" eventKey="/withdraw">Withdraw</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="#/alldata" eventKey="/alldata">All Data</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="#/createaccount" eventKey="/createaccount">Create Account</Nav.Link>
              </Nav.Item>
              {props.isLogged ? (
                <Nav.Item>
                <Nav.Link href="/#" onClick={handleLogout} eventKey="/logout">Logout</Nav.Link>
              </Nav.Item>
              ) : (
                <Nav.Item>
                <Nav.Link href="#/login" eventKey="/login">Login</Nav.Link>
              </Nav.Item>
              )}
            </Nav>
            
            {/* <a className="nav-link" aria-current="page" href="/#">
              Home
            </a>
            <a className="nav-link" aria-current="page" href="#/deposit/">
              Deposit
            </a>
            <a className="nav-link" aria-current="page" href="#/withdraw/">
              Withdraw
            </a>
            <a className="nav-link" aria-current="page" href="#/alldata/">
              All Data
            </a>
            <a className="nav-link" aria-current="page" href="#/createaccount/">
              Create Account
            </a>
            {props.isLogged ? (
              <a
                className="nav-link"
                aria-current="page"
                href="/#"
                onClick={handleLogout}
              >
                Logout
              </a>
            ) : (
              <a className="nav-link" aria-current="page" href="#/login">
                Login
              </a>
            )} */}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
