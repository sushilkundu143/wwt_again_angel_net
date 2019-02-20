import React, { Component } from "react";
import ShortMessage from "./ShortMessage";
import Hidden from "@material-ui/core/Hidden";
import DetailedMessage from "./DetailedMessage";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Typography from "@material-ui/core/Typography";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Paper from "@material-ui/core/Paper";
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
  }
];
export default class Messages extends Component {
  state = {
    expanded: null,
    MessageArray: arr
  };
  handleChange = panel => (event, expanded) => {
    this.setState({
      expanded: expanded ? panel : false
    });
  };
  render() {
    const { expanded } = this.state;
    return (
      <div>
        <div style={{ display: "flex" }}>
          <div style={{ margin: 10 }}>
            <div style={{ height: 30, backgroundColor: "#0b3253", padding: 5 }}>
              <h4 style={{ fontSize: 24, color: "#fff" }}>Recent Messages</h4>
            </div>
            <div>
              <List
                style={{
                  overflow: "auto",
                  maxHeight: 500,
                  minWidth: 300,
                  maxWidth: 400
                }}
              >
                {this.state.MessageArray.map((user, index) => {
                  return (
                    <ExpansionPanel
                      style={{ width: "100%" }}
                      expanded={expanded === index}
                      onChange={this.handleChange(index)}
                    >
                      <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                        <ShortMessage
                          Name={user.Name}
                          Online={user.Online}
                          LatestMessages={user.LatestMessages}
                        />
                      </ExpansionPanelSummary>
                      <ExpansionPanelDetails>
                        <DetailedMessage
                          Name={user.Name}
                          Date={user.Date}
                          MessageArray={user.MessageArray}
                        />
                      </ExpansionPanelDetails>
                    </ExpansionPanel>
                  );
                })}
              </List>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
