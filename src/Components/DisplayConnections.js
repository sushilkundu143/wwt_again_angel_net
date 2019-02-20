import React, { Component } from "react";
import SingleConnection from "./SingleConnection";

export default class DisplayConnection extends Component {
  render() {
    return (
      <section className="companies-info">
        <div className="container">
          <div className="company-title">
            <h3>All Connections</h3>
          </div>

          <div className="companies-list">
            <div className="row">
              <SingleConnection />
              <SingleConnection />
              <SingleConnection />
              <SingleConnection />
              <SingleConnection />
              <SingleConnection />
              <SingleConnection />
              <SingleConnection />
              <SingleConnection />
              <SingleConnection />
            </div>
          </div>
        </div>
      </section>
    );
  }
}
