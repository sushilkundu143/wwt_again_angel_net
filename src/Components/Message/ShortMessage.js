import React, { Component } from "react";

import Paper from "@material-ui/core/Paper";
import Badge from "@material-ui/core/Badge";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
export default class Messages extends Component {
  styles = theme => ({
    margin: {
      margin: theme.spacing.unit * 2
    }
  });

  render() {
    var OnlineColor = "#0b3253";
    if (this.props.Online === true) {
      OnlineColor = "#00FF00";
    }
    var PaperColor = "#fff";
    if (this.props.Selected === true) {
      PaperColor = "#e7e7e7";
    }
    var val = this.props.LatestMessages;
    var num = "visible";
    if (val === 0) {
      num = "hidden";
    }
    return (
      <div
        onClick={this.props.onClicking}
        style={{
          display: "flex",
          flexDirection: "column",
          width: "100%"
        }}
      >
        <div
          style={{
            width: "100%",
            backgroundColor: PaperColor
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "row"
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                width: "80%"
              }}
            >
              <Avatar
                alt="Remy Sharp"
                src="http://chittagongit.com//images/avatar-icon/avatar-icon-4.jpg"
                style={{
                  margin: 10,
                  borderStyle: "solid",
                  borderWidth: 3,
                  borderColor: OnlineColor
                }}
              />

              <div
                style={{
                  display: "flex",
                  flexDirection: "column"
                }}
              >
                <Typography style={{ marginTop: 10 }}>
                  <p style={{ fontWeight: "bold", fontSize: 17 }}>
                    {this.props.Name}
                  </p>
                </Typography>
              </div>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                width: "20%",
                justifyContent: "flex-end"
              }}
            >
              <div
                style={{
                  width: 20,
                  height: 20,
                  visibility: num,
                  borderRadius: 10,
                  backgroundColor: "#0b3253",
                  marginRight: 10,
                  marginTop: 14,
                  color: "#fff",
                  display: "flex",
                  padding: 5,
                  alignItems: "center",
                  justifyContent: "center"
                }}
              >
                {val}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
