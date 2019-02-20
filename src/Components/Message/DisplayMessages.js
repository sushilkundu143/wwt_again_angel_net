import React, { Component } from "react";
import Hidden from "@material-ui/core/Hidden";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import MessageDisplayDesktop from "./MessageDisplayComponent";
import MessageDisplayMobile from "./MessageDisplayMobile";
import { Container, Row, Col } from "reactstrap";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ShortFriend from "./ShortFriend";

var friendsArray = [
  {
    Name: "Himanshu Dhankhar",
    Online: false,
    LatestMessages: [
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
    Name: "Himanshu Dhankhar",
    Online: false,
    LatestMessages: [
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
    Name: "Himanshu Dhankhar",
    Online: false,
    LatestMessages: [
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
    Name: "Himanshu Dhankhar",
    Online: false,
    LatestMessages: [
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
    Name: "Himanshu Dhankhar",
    Online: false,
    LatestMessages: [
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
    Name: "Himanshu Dhankhar",
    Online: false,
    LatestMessages: [
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
  }
];
export default class MessageDisplay extends Component {
  state = {
    FriendsArray: friendsArray
  };
  renderShortFriend(user, index) {
    return (
      <ListItem>
        <ShortFriend
          Name={user.Name}
          Online={user.Online}
          LatestMessages={user.LatestMessages}
        />
      </ListItem>
    );
  }
  render() {
    return (
      <div className="wrapper container" style={{ display: "flex" }}>
        <Hidden xsDown>
          <div style={{ display: "flex", flexDirection: "row", height: 500 }}>
            <Paper style={{ margin: 20, padding: 0, width: 900, height: 470 }}>
              <div
                style={{ height: 30, backgroundColor: "#0b3253", padding: 5 }}
              >
                <h4 style={{ fontSize: 24, color: "#fff" }}>Recent Messages</h4>
              </div>

              <MessageDisplayDesktop />
            </Paper>
          </div>

          <Paper
            style={{
              margin: 20,
              minWidth: 300,
              maxWidth: 600,
              height: 470,
              backgroundColor: "#fff"
            }}
          >
            <div style={{ height: 30, backgroundColor: "#0b3253", padding: 5 }}>
              <h4 style={{ fontSize: 24, color: "#fff" }}>All Friends</h4>
            </div>
            <List style={{ overflow: "auto", height: 410 }}>
              {this.state.FriendsArray.map((tab, index) => (
                <div>
                  {this.renderShortFriend(tab, index)}
                  <hr />
                </div>
              ))}
            </List>
          </Paper>
        </Hidden>
        <Hidden smUp>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <MessageDisplayMobile />
            <Paper
              style={{
                margin: 20,
                minWidth: 300,
                maxWidth: 600,
                height: 470,
                backgroundColor: "#fff"
              }}
            >
              <div
                style={{ height: 30, backgroundColor: "#0b3253", padding: 5 }}
              >
                <h4 style={{ fontSize: 24, color: "#fff" }}>All Friends</h4>
              </div>
              <List style={{ overflow: "auto", height: 410 }}>
                {this.state.FriendsArray.map((tab, index) => (
                  <div>
                    {this.renderShortFriend(tab, index)}
                    <hr />
                  </div>
                ))}
              </List>
            </Paper>
          </div>
        </Hidden>
      </div>
    );
  }
}
