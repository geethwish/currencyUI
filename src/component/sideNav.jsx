import React, { Component } from "react";

export default class sideNav extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div>
        <ul className="sidebar navbar-nav">
          <li className="nav-item active">
            <a className="nav-link" href="index.html">
              <i className="fas fa-fw fa-tachometer-alt" />
              <span>Dashboard</span>
            </a>
          </li>
          {/*
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              href="#"
              id="pagesDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <i className="fas fa-fw fa-folder" />
              <span>Poption 3</span>
            </a>
            
            <div className="dropdown-menu" aria-labelledby="pagesDropdown">
              <h6 className="dropdown-header">Login Screens:</h6>
              <a className="dropdown-item" href="login.html">
                Login
              </a>
              <a className="dropdown-item" href="register.html">
                Register
              </a>
              <a className="dropdown-item" href="forgot-password.html">
                Forgot Password
              </a>
              <div className="dropdown-divider" />
              <h6 className="dropdown-header">Other Pages:</h6>
              <a className="dropdown-item" href="404.html">
                404 Page
              </a>
              <a className="dropdown-item" href="blank.html">
                Blank Page
              </a>
            </div>
            
          </li>
          <li className="nav-item">
            <a className="nav-link" href="charts.html">
              <i className="fas fa-fw fa-chart-area" />
              <span>Option 3</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="tables.html">
              <i className="fas fa-fw fa-table" />
              <span>Option 4</span>
            </a>
          </li>
          */}
        </ul>
      </div>
    );
  }
}
