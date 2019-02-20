import React, { Component } from "react";
import Button from "@material-ui/core/Button";
export default class FilterBox extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedRadio: "public"
    };
  }

  handleRadioChange = event => {
    this.setState({
      selectedRadio: event.currentTarget.value
    });
  };
  render() {
    return (
      <div
        style={{
          width: 200,
          height: 210,
          backgroundColor: "#0b3253",
          marginTop: 20,
          marginLeft: 5,
          borderRadius: 5
        }}
      >
        <div
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            borderBottom: "2px solid #fff",
            paddingBottom: 5
          }}
        >
          <p
            style={{
              color: "#fff",
              marginTop: 10,
              fontSize: 19,
              fontWeight: "bold"
            }}
          >
            {" "}
            Apply Filters
          </p>
        </div>

        <div
          className="radio-row"
          style={{
            paddingLeft: 10,
            borderBottom: "2px solid #fff",
            paddingBottom: 10
          }}
        >
          <div className="input-row">
            <input
              type="radio"
              name="Beginner"
              value="Beginner"
              checked={this.state.selectedRadio === "Beginner"}
              onChange={this.handleRadioChange}
            />
            <label style={{ color: "#fff", margin: 10 }}>Beginner Course</label>
          </div>
          <div className="input-row">
            <input
              type="radio"
              name="Intermediate"
              value="Intermediate"
              checked={this.state.selectedRadio === "Intermediate"}
              onChange={this.handleRadioChange}
            />
            <label style={{ color: "#fff", margin: 10 }}>
              Intermediate course
            </label>
          </div>
          <div className="input-row">
            <input
              type="radio"
              name="Advanced"
              value="Advanced"
              checked={this.state.selectedRadio === "Advanced"}
              onChange={this.handleRadioChange}
            />
            <label style={{ color: "#fff", margin: 10 }}>Advanced course</label>
          </div>
        </div>
        <div>
          <Button
            variant="contained"
            style={{
              marginTop: 5,
              marginLeft: 55,
              backgroundColor: "#fff",
              color: "#0b3253"
            }}
          >
            Apply
          </Button>
        </div>
      </div>
    );
  }
}
