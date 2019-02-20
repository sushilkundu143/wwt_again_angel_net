import React, { Component } from "react";
import LectureShort from "./LectureShort";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ReactPlayer from "react-player";

export default class ClassRoom extends Component {
  state = {
    expanded: "null"
  };
  handleChange = panel => (event, expanded) => {
    this.setState({
      expanded: expanded ? panel : false
    });
  };
  render() {
    return (
      <div className="wrapper">
        <div style={{ marginLeft: "5%", marginRight: "5%" }}>
          <div style={{ display: "flex", marginTop: 20, width: "100%" }}>
            <div
              style={{
                display: "flex",
                flexDirection: "row",

                width: "100%"
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  width: 250,
                  marginRight: 10,
                  backgroundColor: "#fff"
                }}
              >
                <div
                  style={{
                    backgroundColor: "#0b3253",
                    bordeeRadius: 5,
                    padding: 10,
                    borderRadius: 5,
                    alignItems: "center",
                    justifyContent: "center",
                    width: 250
                  }}
                >
                  <p
                    style={{
                      color: "#fff",
                      fontSize: 19,
                      fontWeight: "bold",
                      marginLeft: 30
                    }}
                  >
                    Modules/Lectures
                  </p>
                </div>
                <List style={{ maxHeight: 400, overflow: "auto" }}>
                  <ListItem>
                    <LectureShort
                      LectureNumber={1}
                      Topic={"Algorithmic Thinking"}
                    />
                  </ListItem>
                  <ListItem>
                    <LectureShort
                      LectureNumber={1}
                      Topic={"Algorithmic Thinking"}
                    />
                  </ListItem>
                  <ListItem>
                    <LectureShort
                      LectureNumber={1}
                      Topic={"Algorithmic Thinking"}
                    />
                  </ListItem>
                  <ListItem>
                    <LectureShort
                      LectureNumber={1}
                      Topic={"Algorithmic Thinking"}
                    />
                  </ListItem>
                  <ListItem>
                    <LectureShort
                      LectureNumber={1}
                      Topic={"Algorithmic Thinking"}
                    />
                  </ListItem>
                  <ListItem>
                    <LectureShort
                      LectureNumber={1}
                      Topic={"Algorithmic Thinking"}
                    />
                  </ListItem>
                  <ListItem>
                    <LectureShort
                      LectureNumber={1}
                      Topic={"Algorithmic Thinking"}
                    />
                  </ListItem>
                  <ListItem>
                    <LectureShort
                      LectureNumber={1}
                      Topic={"Algorithmic Thinking"}
                    />
                  </ListItem>
                </List>
              </div>

              <div
                style={{
                  width: 640,
                  height: 440,
                  marginLeft: 30,
                  borderRadius: 5,
                  display: "flex",
                  flexDirection: "column"
                }}
              >
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    width: "100%",
                    height: 30
                  }}
                >
                  <div
                    style={{
                      backgroundColor: "#0b3253",
                      borderTopLeftRadius: 5,
                      borderTopRightRadius: 5,
                      padding: 5,
                      width: "100%"
                    }}
                  >
                    <p
                      style={{
                        color: "#fff",
                        fontSize: 19,
                        fontWeight: "bold",
                        marginLeft: 10
                      }}
                    >
                      Video
                    </p>
                  </div>
                </div>
                <div
                  style={{
                    backgroundColor: "#0b3253",
                    width: "100%",
                    height: 10
                  }}
                />
                <div
                  style={{
                    width: "100%",
                    height: 360,
                    backgroundColor: "#fff"
                  }}
                >
                  <ReactPlayer
                    url="https://www.youtube.com/watch?v=fnPhJHN0jTE"
                    playing
                    controls
                    volume
                    muted
                  />
                </div>
              </div>
              <div
                style={{
                  width: 200,
                  marginLeft: 100,
                  borderRadius: 5,
                  display: "flex",
                  flexDirection: "column",
                  height: 150,
                  backgroundColor: "#fff"
                }}
              >
                <div
                  style={{
                    backgroundColor: "#0b3253",
                    width: "100%",
                    padding: 5,
                    borderTopLeftRadius: 5,
                    borderTopRightRadius: 5
                  }}
                >
                  <p
                    style={{
                      color: "#fff",
                      fontSize: 19,
                      fontWeight: "bold",
                      marginLeft: 30
                    }}
                  >
                    Miscellaneous
                  </p>
                </div>
                <div
                  style={{
                    backgroundColor: "#0b3253",
                    width: "100%",
                    padding: 5,
                    borderRadius: 10,
                    margin: 1
                  }}
                >
                  <p
                    style={{
                      color: "#fff",
                      fontSize: 17,
                      fontWeight: "bold",
                      marginLeft: 30
                    }}
                  >
                    Downloads
                  </p>
                </div>
                <div
                  style={{
                    backgroundColor: "#0b3253",
                    width: "100%",
                    padding: 5,
                    borderRadius: 10,
                    margin: 1
                  }}
                >
                  <p
                    style={{
                      color: "#fff",
                      fontSize: 17,
                      fontWeight: "bold",
                      marginLeft: 30
                    }}
                  >
                    Test
                  </p>
                </div>
                <div
                  style={{
                    backgroundColor: "#0b3253",
                    width: "100%",
                    padding: 5,
                    borderRadius: 10,
                    margin: 1
                  }}
                >
                  <p
                    style={{
                      color: "#fff",
                      fontSize: 17,
                      fontWeight: "bold",
                      marginLeft: 30
                    }}
                  >
                    Comments
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
