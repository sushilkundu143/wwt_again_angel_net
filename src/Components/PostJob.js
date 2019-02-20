import React, { Component } from "react";
import Input from "@material-ui/core/Input";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import Camera from "@material-ui/icons/Camera";
import Video from "@material-ui/icons/Movie";
import Paper from "@material-ui/core/Paper";
import Fab from "@material-ui/core/Fab";
import Button from "@material-ui/core/Button";
import Image from "@material-ui/icons/PermMedia";
import Icon from "@material-ui/core/Icon";
export default class PostJobCard extends Component {
  render() {
    return (
      <Paper className="post-topbar">
        <Card
          style={{
            display: "flex",
            flexDirection: "column"
          }}
        >
          <CardActionArea>
            <Input
              style={{ height: 80, minWidth: 600, fontSize: 15, padding: 10 }}
              onChangeText={text =>
                this.setState({ ...this.state, input: text })
              }
              placeholder="Share your new innovation with friends"
            />
          </CardActionArea>
          <Paper>
            <CardActions>
              <Paper
                style={{
                  backgroundColor: "#fff",
                  marginTop: 5,
                  marginBottom: 5,
                  marginLeft: 15,
                  marginRight: 15,
                  borderRadius: 40
                }}
              >
                <Button
                  variant="contained"
                  style={{
                    backgroundColor: "#fff",

                    borderRadius: 40
                  }}
                >
                  <Camera
                    style={{
                      marginLeft: 5
                    }}
                  />{" "}
                  Images
                </Button>
              </Paper>

              <Paper
                style={{
                  backgroundColor: "#fff",
                  marginTop: 5,
                  marginBottom: 5,
                  marginLeft: 15,
                  marginRight: 15,
                  borderRadius: 40
                }}
              >
                <Button
                  variant="contained"
                  style={{
                    backgroundColor: "#fff",

                    borderRadius: 40
                  }}
                >
                  <Video
                    style={{
                      marginLeft: 5
                    }}
                  />{" "}
                  Videos
                </Button>
              </Paper>
              <Paper
                style={{
                  backgroundColor: "#0b3253",
                  marginTop: 5,
                  marginBottom: 5,

                  marginRight: 5,
                  borderRadius: 40,
                  color: "#fff"
                }}
              >
                <Button
                  onPress={() => {}}
                  style={{
                    backgroundColor: "#0b3253",
                    borderRadius: 40,
                    color: "#fff"
                  }}
                  variant="contained"
                >
                  Share
                </Button>
              </Paper>
            </CardActions>
          </Paper>
        </Card>
      </Paper>
    );
  }
}
