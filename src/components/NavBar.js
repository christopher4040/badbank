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

  console.log(String(location.pathname));
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="#/">
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
            <Nav
              variant="pills"
              activeKey={
                location.pathname !== "/" ? String(location.pathname) : ""
              }
            >
              <Nav.Item className="nav-item">
                <Nav.Link href="#/" eventKey="" className="nav-link">
                  Home
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="#/deposit" eventKey="/deposit">
                  Deposit
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="#/withdraw" eventKey="/withdraw">
                  Withdraw
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="#/alldata" eventKey="/alldata">
                  All Data
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="#/createaccount" eventKey="/createaccount">
                  Create Account
                </Nav.Link>
              </Nav.Item>
              {props.isLogged ? (
                <Nav.Item>
                  <Nav.Link href="#/index.html" onClick={handleLogout} eventKey="/logout">
                    Logout
                  </Nav.Link>
                </Nav.Item>
              ) : (
                <Nav.Item>
                  <Nav.Link href="#/login" eventKey="/login">
                    Login
                  </Nav.Link>
                </Nav.Item>
              )}
            </Nav>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
