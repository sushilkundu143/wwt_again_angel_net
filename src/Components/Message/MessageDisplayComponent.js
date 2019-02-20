import React, { Component } from "react";
import ShortMessage from "./ShortMessage";
import DetailedMessage from "./DetailedMessage";
import Badge from "@material-ui/core/Badge";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";

import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { Container, Row, Col } from "reactstrap";
import { MemoryRouter as Router, Route, Switch } from "react-router-dom";
var arr = [
  {
    Name: "user 1",

    Date: "5 jan 2019",
    senderId: 3,
    Online: false,
    LatestMessages: 0,
    MessageArray: [
      {
        senderId: 3,
        message:
          "Hi\nHow are you?\nWill you join us for tommorows trip to sillicon valley\nIt will be a educational trip."
      },
      {
        senderId: 0,
        message: "Hi\nI cannot come to your trip,\nI am sorry for that"
      }
    ]
  },
  {
    Name: "user 2",

    Date: "6 jan 2019",
    senderId: 5,
    Online: false,
    LatestMessages: 8,
    MessageArray: [
      {
        senderId: 5,
        message:
          "Hi\nHow are you?\nWill you join us for tommorows trip to sillicon valley\nIt will be a educational trip."
      },
      {
        senderId: 0,
        message: "Hi\nI cannot come to your trip,\nI am sorry for that"
      }
    ]
  },
  {
    Name: "user 3",

    Date: "8 jan 2019",
    senderId: 7,
    Online: true,
    LatestMessages: 5,
    MessageArray: [
      {
        senderId: 7,
        message:
          "Hi\nHow are you?\nWill you join us for tommorows trip to sillicon valley\nIt will be a educational trip."
      },
      {
        senderId: 0,
        message: "Hi\nI cannot come to your trip,\nI am sorry for that"
      }
    ]
  },
  {
    Name: "Himanshu Dhankhar",

    Date: "5 jan 2019",
    senderId: 8,
    Online: false,
    LatestMessages: 2,
    MessageArray: [
      {
        senderId: 8,
        message:
          "tommorows trip to sillicon valley\nIt will be a educational trip."
      },
      {
        senderId: 0,
        message: "I am sorry for that"
      }
    ]
  },
  {
    Name: "Himanshu Dhankhar",

    Date: "5 jan 2019",
    senderId: 8,
    Online: false,
    LatestMessages: 2,
    MessageArray: [
      {
        senderId: 8,
        message:
          "tommorows trip to sillicon valley\nIt will be a educational trip."
      },
      {
        senderId: 0,
        message: "I am sorry for that"
      }
    ]
  },
  {
    Name: "Himanshu Dhankhar",

    Date: "5 jan 2019",
    senderId: 8,
    Online: false,
    LatestMessages: 2,
    MessageArray: [
      {
        senderId: 8,
        message:
          "tommorows trip to sillicon valley\nIt will be a educational trip."
      },
      {
        senderId: 0,
        message: "I am sorry for that"
      }
    ]
  },
  {
    Name: "Himanshu Dhankhar",

    Date: "5 jan 2019",
    senderId: 8,
    Online: false,
    LatestMessages: 2,
    MessageArray: [
      {
        senderId: 8,
        message:
          "tommorows trip to sillicon valley\nIt will be a educational trip."
      },
      {
        senderId: 0,
        message: "I am sorry for that"
      }
    ]
  },
  {
    Name: "Himanshu Dhankhar",

    Date: "5 jan 2019",
    senderId: 8,
    Online: false,
    LatestMessages: 2,
    MessageArray: [
      {
        senderId: 8,
        message:
          "tommorows trip to sillicon valley\nIt will be a educational trip."
      },
      {
        senderId: 0,
        message: "I am sorry for that"
      }
    ]
  },
  {
    Name: "Himanshu Dhankhar",

    Date: "5 jan 2019",
    senderId: 8,
    Online: false,
    LatestMessages: 2,
    MessageArray: [
      {
        senderId: 8,
        message:
          "tommorows trip to sillicon valley\nIt will be a educational trip."
      },
      {
        senderId: 0,
        message: "I am sorry for that"
      }
    ]
  },
  {
    Name: "Himanshu Dhankhar",

    Date: "5 jan 2019",
    senderId: 8,
    Online: false,
    LatestMessages: 2,
    MessageArray: [
      {
        senderId: 8,
        message:
          "tommorows trip to sillicon valley\nIt will be a educational trip."
      },
      {
        senderId: 0,
        message: "I am sorry for that"
      }
    ]
  },
  {
    Name: "Himanshu Dhankhar",

    Date: "5 jan 2019",
    senderId: 8,
    Online: false,
    LatestMessages: 2,
    MessageArray: [
      {
        senderId: 8,
        message:
          "tommorows trip to sillicon valley\nIt will be a educational trip."
      },
      {
        senderId: 0,
        message: "I am sorry for that"
      }
    ]
  }
];

export default class Messaages extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contactsArr: arr,
      setDisplay: 0,
      MessageArray: arr
    };
  }
  handleClickShortMessage = senderId => {
    console.log(senderId);
    if (this.state.setDisplay != senderId) {
      this.setState({
        setDisplay: senderId
      });
    }
  };
  renderShortMessage(user, index) {
    return (
      <ListItem>
        <ShortMessage
          Name={user.Name}
          Online={user.Online}
          LatestMessages={user.LatestMessages}
          onClicking={this.handleClickShortMessage.bind(this, index)}
        />
      </ListItem>
    );
  }
  renderDetailedMessage(user) {
    return (
      <DetailedMessage
        Name={user.Name}
        Date={user.Date}
        MessageArray={user.MessageArray}
      />
    );
  }
  renderDialog(user) {
    return (
      <Dialog
        open={this.state.open}
        onClose={this.handleClose}
        scroll={this.state.scroll}
        aria-labelledby="scroll-dialog-title"
      >
        {" "}
        <DetailedMessage
          Name={user.Name}
          Date={user.Date}
          MessageArray={user.MessageArray}
        />
      </Dialog>
    );
  }
  render() {
    return (
      <Container
        style={{
          display: "flex",
          flexDirection: "row",
          height: 470
        }}
      >
        <Row>
          <Col
            style={{
              display: "flex",
              flexDirection: "column",
              width: "30%",
              minWidth: 250,
              height: 400
            }}
          >
            <List style={{ overflow: "auto" }}>
              {this.state.MessageArray.map((tab, index) => (
                <div>
                  {this.renderShortMessage(tab, index)}
                  <hr />
                </div>
              ))}
            </List>
          </Col>
          <Col
            style={{
              flexDirection: "row",
              width: 500,
              height: 400,
              padding: 20
            }}
          >
            {this.renderDetailedMessage(
              this.state.MessageArray[this.state.setDisplay]
            )}
          </Col>
        </Row>
      </Container>
    );
  }
}
