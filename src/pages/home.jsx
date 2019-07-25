import React, { Component } from "react";
import NavBar from "./../component/nav";
import SideNav from "./../component/sideNav";
import UserCard from "./../component/userBar";
import Table from "./../component/table";
export default class home extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div>
        <NavBar />
        <div id="wrapper">
          <SideNav />
          <div id="content-wrapper">
            <div class="container-fluid">
              <UserCard />
              <div className="row">
                <div className="col-lg-8">
                  <Table />
                  <div class="card mb-3">
                    <div class="card-header">
                      <i class="fas fa-chart-area" />
                      Progress Report
                    </div>
                    <div class="card-body">
                      <canvas id="myAreaChart" width="100%" height="30" />
                    </div>
                    <div class="card-footer small text-muted">
                      Updated yesterday at 11:59 PM
                    </div>
                  </div>
                </div>
                <div className="col-lg-4">
                  <nav
                    class="navbar navbar-expand navbar-dark bg-dark static-top"
                    style={{ height: "100%" }}
                  >
                    <ul style={{ listStyleType: " none" }}>
                      <li className="nav-item">
                        <div className="col-md-12">
                          <div className="row">
                            <div className="col-md-6">
                              <h3 style={{ color: "white" }}>Wallet</h3>
                            </div>
                            <div className="col-md-6">
                              <h3 style={{ color: "white" }}>
                                <span class="badge badge-pill badge-success">
                                  $10000
                                </span>
                              </h3>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li className="nav-item">
                        <div className="col-md-12">
                          <div className="row">
                            <div className="col-md-6">
                              <h4 style={{ color: "white" }}>Investment </h4>
                            </div>
                            <div className="col-md-6">
                              <h4 style={{ color: "wihte" }}>
                                <span class="badge badge-pill badge-info">
                                  $10000
                                </span>
                              </h4>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li className="nav-item">
                        <div className="col-md-12">
                          <div className="row">
                            <div className="col-md-6">
                              <h4 style={{ color: "white" }}>Profit</h4>
                            </div>
                            <div className="col-md-6">
                              <h3 style={{ color: "white" }}>
                                <span class="badge badge-pill badge-info">
                                  $10000
                                </span>
                              </h3>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li className="nav-item">
                        <div className="col-md-12">
                          <div className="row">
                            <div className="col-md-6">
                              <h4 style={{ color: "white" }}>Total</h4>
                            </div>
                            <div className="col-md-6">
                              <h3 style={{ color: "white" }}>
                                <span class="badge badge-pill badge-danger">
                                  $10000
                                </span>
                              </h3>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li className="nav-item" style={{ marginTop: "30px" }}>
                        <div className="row">
                          <div className="col-lg-6">
                            <button
                              type="button"
                              class="btn btn-success"
                              style={{ width: "100%" }}
                            >
                              Buy
                            </button>
                          </div>
                          <div className="col-lg-6">
                            <button
                              type="button"
                              class="btn btn-danger"
                              style={{ width: "100%" }}
                            >
                              Sell
                            </button>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
