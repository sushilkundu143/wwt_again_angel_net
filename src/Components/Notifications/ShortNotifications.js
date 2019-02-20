import React, { Component } from "react";
import Typography from "@material-ui/core/Typography";
export default class ShortNotification extends Component {
  render() {
    return (
      <div
        style={{
          maxWidth: 400,
          borderBottom: "4px #e7e7e7 solid",
          margin: 10,
          padding: 10
        }}
      >
        <hr />
        <br />
        <div>
          <b style={{ fontWidth: 15, fontWeight: "bold" }}>
            {this.props.Heading}
          </b>
        </div>
        <div>
          <p style={{ color: "#ccc" }}>{this.props.SubHeading}</p>
        </div>
        <hr />
        <br />
      </div>
    );
  }
}
