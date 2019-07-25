import React, { Component } from "react";

export default class userBar extends Component {
  render() {
    return (
      <div>
        <div class="row">
          <div class="col-xl-3 col-sm-6 mb-3">
            <div class="card text-white bg-primary o-hidden h-100">
              <div class="card-body">
                <div class="card-body-icon">
                  <img
                    src="data:image/jpeg;base64,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"
                    alt="user"
                  />
                </div>
                <div class="mr-5">
                  <h3>Jhone Doe(ME)</h3>
                </div>
              </div>
              <a class="card-footer text-white clearfix small z-1" href="#">
                <span class="float-left">
                  <i class="fas fa-circle" style={{ color: "green" }} />{" "}
                  <strong>Online</strong>
                </span>
              </a>
            </div>
          </div>
          <div class="col-xl-3 col-sm-6 mb-3">
            <div class="card text-white bg-warning o-hidden h-100">
              <div class="card-body">
                <div class="card-body-icon">
                  <img
                    src="https://www.2-10.com/wp-content/uploads/2015/10/user1-300x300.jpg"
                    alt=""
                    style={{ width: "200px", height: "200px" }}
                  />
                </div>
                <div class="mr-5">
                  <h3>Jhone Smith</h3>
                </div>
              </div>
              <a class="card-footer text-white clearfix small z-1" href="#">
                <i class="fas fa-circle" style={{ color: "green" }} />{" "}
                <strong>Online</strong>
              </a>
            </div>
          </div>
          <div class="col-xl-3 col-sm-6 mb-3">
            <div class="card text-white bg-success o-hidden h-100">
              <div class="card-body">
                <div class="card-body-icon">
                  <img
                    src="http://images.unsplash.com/photo-1464863979621-258859e62245?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjEyMDd9"
                    alt=""
                    style={{ width: "200px", height: "200px" }}
                  />
                </div>
                <div class="mr-5">
                  <h3>Camelia Mendis</h3>
                </div>
              </div>
              <a class="card-footer text-white clearfix small z-1" href="#">
                <i class="fas fa-circle" style={{ color: "green" }} />{" "}
                <strong>Online</strong>
              </a>
            </div>
          </div>
          <div class="col-xl-3 col-sm-6 mb-3">
            <div class="card text-white bg-danger o-hidden h-100">
              <div class="card-body">
                <div class="card-body-icon">
                  <img
                    src="https://images.unsplash.com/photo-1542080681-b52d382432af?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"
                    alt=""
                    style={{ width: "200px", height: "200px" }}
                  />
                </div>
                <div class="mr-5">Sarah Lance</div>
              </div>
              <a class="card-footer text-white clearfix small z-1" href="#">
                <i class="fas fa-circle" style={{ color: "green" }} />{" "}
                <strong>Online</strong>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
