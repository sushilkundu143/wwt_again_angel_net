import React, { Component } from "react";
import ShortMessage from "./ShortMessage";
import Hidden from "@material-ui/core/Hidden";
import DetailedMessage from "./DetailedMessage";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button
} from "reactstrap";
export default class Messages extends Component {
  state = {
    expanded: null
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
        <div
          style={{
            backgroundColor: "#ccc",
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <Typography>
            <h5>
              <b>Messages</b>
            </h5>
          </Typography>
        </div>

        <div style={{ display: "flex", backgroundColor: "#e7e7e7" }}>
          <Paper style={{ margin: 10 }}>
            <ExpansionPanel
              style={{ width: "100%" }}
              expanded={expanded === "panel1"}
              onChange={this.handleChange("panel1")}
            >
              <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                <ShortMessage />
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>
                <DetailedMessage />
              </ExpansionPanelDetails>
            </ExpansionPanel>
            <ExpansionPanel
              style={{ width: "100%" }}
              expanded={expanded === "panel2"}
              onChange={this.handleChange("panel2")}
            >
              <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                <ShortMessage />
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>
                <DetailedMessage />
              </ExpansionPanelDetails>
            </ExpansionPanel>
            <ExpansionPanel
              style={{ width: "100%" }}
              expanded={expanded === "panel3"}
              onChange={this.handleChange("panel3")}
            >
              <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                <ShortMessage />
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>
                <DetailedMessage />
              </ExpansionPanelDetails>
            </ExpansionPanel>
            <ExpansionPanel
              style={{ width: "100%" }}
              expanded={expanded === "panel4"}
              onChange={this.handleChange("panel4")}
            >
              <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                <ShortMessage />
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>
                <DetailedMessage />
              </ExpansionPanelDetails>
            </ExpansionPanel>
          </Paper>
        </div>
      </div>
    );
  }
}
