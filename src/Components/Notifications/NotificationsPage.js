import React, { Component } from "react";
import NotificationDetail from "./NotificationsDetail";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";

var notifications = [
  {
    Heading: "Himanshu Dhankhar Posted a New Post",
    SubHeading: "Himanshu Dhankhar Seen your Post and Commented on that",
    Date: "4 Jan 2018",
    Time: "5 hrs",
    Seen: false,
    Link: "www.angelnet.com/Himanshu_Dhankhar/Posts/2415"
  },
  {
    Heading: "Himanshu Dhankhar Posted a New Post",
    SubHeading: "Himanshu Dhankhar Seen your Post and Commented on that",
    Date: "4 Jan 2018",
    Time: "5 hrs",
    Seen: false,
    Link: "www.angelnet.com/Himanshu_Dhankhar/Posts/2415"
  },
  {
    Heading: "Himanshu Dhankhar Posted a New Post",
    SubHeading: "Himanshu Dhankhar Seen your Post and Commented on that",
    Date: "4 Jan 2018",
    Time: "5 hrs",
    Seen: false,
    Link: "www.angelnet.com/Himanshu_Dhankhar/Posts/2415"
  },
  {
    Heading: "Himanshu Dhankhar Posted a New Post",
    SubHeading: "Himanshu Dhankhar Seen your Post and Commented on that",
    Date: "4 Jan 2018",
    Time: "5 hrs",
    Seen: false,
    Link: "www.angelnet.com/Himanshu_Dhankhar/Posts/2415"
  },
  {
    Heading: "Himanshu Dhankhar Posted a New Post",
    SubHeading: "Himanshu Dhankhar Seen your Post and Commented on that",
    Date: "4 Jan 2018",
    Time: "5 hrs",
    Seen: false,
    Link: "www.angelnet.com/Himanshu_Dhankhar/Posts/2415"
  },
  {
    Heading: "Himanshu Dhankhar Posted a New Post",
    SubHeading: "Himanshu Dhankhar Seen your Post and Commented on that",
    Date: "4 Jan 2018",
    Time: "5 hrs",
    Seen: false,
    Link: "www.angelnet.com/Himanshu_Dhankhar/Posts/2415"
  },
  {
    Heading: "Himanshu Dhankhar Posted a New Post",
    SubHeading: "Himanshu Dhankhar Seen your Post and Commented on that",
    Date: "4 Jan 2018",
    Time: "5 hrs",
    Seen: false,
    Link: "www.angelnet.com/Himanshu_Dhankhar/Posts/2415"
  },
  {
    Heading: "Himanshu Dhankhar Posted a New Post",
    SubHeading: "Himanshu Dhankhar Seen your Post and Commented on that",
    Date: "4 Jan 2018",
    Time: "5 hrs",
    Seen: false,
    Link: "www.angelnet.com/Himanshu_Dhankhar/Posts/2415"
  }
];

export default class NotificationsPage extends Component {
  state = {
    Notifications: notifications
  };

  render() {
    return (
      <div className="wrapper container">
        <div
          style={{ backgroundColor: "#0b3253", margin: 20, borderRadius: 5 }}
        >
          <p
            style={{
              color: "#fff",
              marginTop: 10,
              marginLeft: 10,
              fontWeight: "bold",
              fontSize: 17
            }}
          >
            Notifications
          </p>
          <div style={{ height: 450, backgroundColor: "#fff" }}>
            <List style={{ overflowY: 'scroll', maxHeight: 430 }}>
              {this.state.Notifications.map((tab, index) => (
                <ListItem style={{borderBottom:'1px solid #e7e7e7'}}>
                <hr></hr>
                  <NotificationDetail
                    Heading={tab.Heading}
                    SubHeading={tab.SubHeading}
                    Date={tab.Date}
                    Time={tab.Time}
                  />
                  <br/>
                </ListItem>
              ))}
            </List>
          </div>
        </div>
      </div>
    );
  }
}
