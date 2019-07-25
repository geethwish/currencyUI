import React, { Component } from "react";
import Home from "./home";
import Page from "./page2";
import { BrowserRouter, Route, Switch } from "react-router-dom";
export default class login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      Email: "demo@123.com",
      Password: "1234",
      formEmail: "",
      formPassword: "",
      erros: false,
      errorMessage: ""
    };
  }
  getEmail = e => {
    this.setState({ formEmail: e.target.value });
  };
  getPassword = e => {
    this.setState({ formPassword: e.target.value });
  };
  submitPage = e => {
    const { Email, Password, formEmail, formPassword } = this.state;
    if (Email === formEmail && Password === formPassword) {
    } else {
      this.setState({ erros: true });
      this.setState({ errorMessage: "Password or Email doesn't Match..!" });
      e.preventDefault();
    }
  };
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/home" exact component={Home} />
          <Route path="/Page2" exact component={Page} />
          <div>
            <div
              style={{
                height: "120vh",
                marginTop: "-100px",
                paddingTop: "100px"
              }}
              className="bg-dark"
            >
              <div className="App">
                <div class="container">
                  <div class="card card-login mx-auto mt-5">
                    <div class="card-header">
                      <h6 style={{ textAlign: "center" }}>
                        Login | Stock Market Simulator{" "}
                        <i class="fas fa-chart-line" />
                      </h6>{" "}
                    </div>
                    <div class="card-body">
                      <form>
                        <div class="form-group">
                          <div class="form-label-group">
                            <input
                              type="email"
                              id="inputEmail"
                              class="form-control"
                              placeholder="Email address"
                              required="required"
                              autofocus="autofocus"
                              onBlur={this.getEmail}
                            />
                            <label for="inputEmail">Email address</label>
                          </div>
                        </div>
                        <div class="form-group">
                          <div class="form-label-group">
                            <input
                              type="password"
                              id="inputPassword"
                              class="form-control"
                              placeholder="Password"
                              required="required"
                              onBlur={this.getPassword}
                            />
                            <label for="inputPassword">Password</label>
                          </div>
                        </div>
                        <div class="form-group">
                          <div class="checkbox">
                            <label>
                              <input type="checkbox" value="remember-me" />
                              Remember Password
                            </label>
                          </div>
                          <span>{this.state.errorMessage}</span>
                        </div>
                        <a
                          href="/home"
                          class="btn btn-primary btn-block"
                          onClick={this.submitPage}
                        >
                          Login
                        </a>
                      </form>
                      <div class="text-center">
                        <a class="d-block small mt-3" href="register.html">
                          Register an Account
                        </a>
                        <a class="d-block small" href="forgot-password.html">
                          Forgot Password?
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Switch>
      </BrowserRouter>
    );
  }
}
