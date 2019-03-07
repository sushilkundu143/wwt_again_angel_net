import React, { Component } from "react";
import { DropdownButton } from "react-bootstrap";
import { Dropdown } from "react-bootstrap";

export default class SelectLocation extends Component {
  ITEM_HEIGHT = 48;
  ITEM_PADDING_TOP = 8;
  MenuProps = {
    PaperProps: {
      style: {
        maxHeight: this.ITEM_HEIGHT * 4.5 + this.ITEM_PADDING_TOP,
        width: 250
      }
    }
  };

  names = [
    "Delhi",
    "Gurgaon",
    "Mumbai",
    "Banglore",
    "Hyderabad",
    "Pune",
    "Faridabad"
  ];
  formControl= {
    margin: 5,
    minWidth: 120,
    maxWidth: 300,
    padding: 10,
    color: "#fff"
  };
  state = {
    name: []
  };
  render() {
    return (
      <Dropdown>
        <Dropdown.Toggle
          style={{
            color: "#869aa6",
            border: "1px solid #0b3253",
            backgroundColor: "#2f516d"
          }}
          id="dropdown-basic"
        >
          {this.props.Placeholder}
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item href="#/action-1">{this.props.choice1}</Dropdown.Item>
          <Dropdown.Item href="#/action-2">{this.props.choice2}</Dropdown.Item>
          <Dropdown.Item href="#/action-3">{this.props.choice3}</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    );
  }
}
