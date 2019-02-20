import React, { Component } from "react";

export default class LectureShort extends Component {
  render() {
    return (
      <div
        style={{
          width: 250,
          background: "#fff",
          borderBottom: "2px solid #e7e7e7"
        }}
      >
        <p style={{ fontWeight: "bold", fontSize: 19, marginTop: 5 }}>
          Lecture {this.props.LectureNumber}{" "}
        </p>
        <p style={{ fontWeight: "bold", fontSize: 15 }}> {this.props.Topic}</p>
      </div>
    );
  }
}
