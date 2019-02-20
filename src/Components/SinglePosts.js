import React, { Component } from "react";
import IconButton from "@material-ui/core/IconButton";
import MoreIcon from "@material-ui/icons/MoreVert";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import { Container, Row, Col } from "reactstrap";
import {
  UncontrolledButtonDropdown,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";
export default class SinglePost extends Component {
  state = {
    open: false
  };

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    return (
      <div class="post-bar">
        <div class="post_topbar" style={{ borderTop: "4px solid #0b3253" }}>
          <div class="usy-dt">
            <img src="images/resources/us-pic.png" alt="" />
            <div class="usy-name">
              <h3>John Doe</h3>
              <span>
                <img src="images/clock.png" alt="" />3 min ago
              </span>
            </div>
          </div>
          <div class="ed-opts">
            <div class="dropdown">
              <MoreIcon />
              <div class="dropdown-content">
                <List style={{ width: 100 }}>
                  <ListItem>
                    <a href="#">
                      <i>Edit</i>
                    </a>
                  </ListItem>
                  <ListItem>
                    <a href="#">
                      <i>Delete</i>
                    </a>
                  </ListItem>
                  <ListItem>
                    <a href="#">
                      <i>Report</i>
                    </a>
                  </ListItem>
                </List>
              </div>
            </div>
          </div>
        </div>

        <div class="job_descp">
          <img
            width="100%"
            src="https://s3-us-west-2.amazonaws.com/jumpermedia.co/uploads/2016/04/Screen-Shot-2017-02-01-at-11.44.20-AM-768x582.png"
            alt="Card image cap"
          />

          <p>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
        </div>
        <div
          class="job-status-bar"
          style={{
            backgroundColor: "#0b3253",
            display: "flex",
            flexDirection: "row",
            justifyContents: "center",
            alignItems: "center",
            border: "1px solid #3863b6",
            maxHeight: 20
          }}
        >
          <a href="#" style={{ paddingBottom: 5 }}>
            <i class="la la-heart" style={{ padding: 5 }} />
          </a>
          <a
            href="#"
            title=""
            class="com"
            style={{ paddingTop: 5, paddingBottom: 5 }}
          >
            <img src="images/com.png" alt="" style={{ padding: 5 }} />
          </a>
          <a style={{ float: "right", position: "relative", paddingBottom: 5 }}>
            <i class="la la-eye" style={{ padding: 5 }} />
            Views 50
          </a>
        </div>
      </div>
    );
  }
}
