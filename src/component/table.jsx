import React, { Component } from "react";

export default class table extends Component {
  render() {
    return (
      <div>
        <table class="table">
          <thead class="thead-dark">
            <tr>
              <th scope="col">Round</th>
              <th scope="col">User</th>
              <th scope="col">Company</th>
              <th scope="col">Profit</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Jhone Doe</td>
              <td>Otto</td>
              <td>
                78 % <i class="fas fa-long-arrow-alt-up" />
              </td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Jhone Smith</td>
              <td>Thornton</td>
              <td>
                6 % <i class="fas fa-long-arrow-alt-up" />
              </td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>Cameila Mendis</td>
              <td>the Bird</td>
              <td>
                99 %<i class="fas fa-long-arrow-alt-up" />
              </td>
            </tr>
            <tr>
              <th scope="row">4</th>
              <td>Sarah Lance</td>
              <td>the Bird</td>
              <td>
                44 %<i class="fas fa-long-arrow-alt-up" />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}
