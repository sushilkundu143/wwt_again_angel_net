import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import Chip from "@material-ui/core/Chip";
import Typography from "@material-ui/core/Typography";
import { Badge } from "reactstrap";
import axios from 'axios';

export default class UserProfile extends Component {
  
  constructor(props){
    super(props);
    this.state={
    UserProfile:{
      image:{url:'images/profile'},
      name:'himanshu dhankhar',
      designation: 'Software Developer',
      connections:34,
      followers:155,
      global_rank:34,
      global_reach:155,
      linkedin:'',
      facebook:'',
      twitter:'',
      instagram:'',
      website_link:'',
      angel_net_profile_link:'',
      description:''
    },
    userid:'-LZpl5Sls2c5q51rmy3h'
  }
}
componentDidMount(){
  {/*const UserProfile = {
    image:{url:'images/profile'},
    name:'himanshu dhankhar',
    connections:34,
    followers:155,
    global_rank:34,
    global_reach:155,
    linkedin:'',
    facebook:'',
    twitter:'',
    instagram:'',
    website_link:'',
    angel_net_profile_link:'',

  }
  axios.post('https://angelnet-d48cf.firebaseio.com/UserProfile.json',UserProfile)
  .then(res=>{
    console.log(res)
  }).catch(error=>{
    console.log(error)
  })*/}

  //  axios.get('https://angelnet-d48cf.firebaseio.com/'+this.state.userid+'/UserProfile.json')
  // .then(res =>{
  //   console.log('res')
  //   this.setState({UserProfile:res.data})
  //   console.log(this.state)
  // }).catch(err =>{
  //   console.log(err)
  // })
  
}

  render() {
    return (
      <div className="user-data full-width">
        <div className="user-profile">
          <div className="username-dt">
            <div className="usr-pic">
              <img src="images/resources/user-pic.png" alt="" />
            </div>
          </div>
          <div className="user-specs">
            <h3>{this.state.UserProfile.name}</h3>
            <span>{this.state.UserProfile.designation}</span>
          </div>
        </div>

        <div className="user-fw-status" style={{ padding: 15 }}>
          <Row>
            <Col
              style={{
                padding: 10,
                borderRight: "1px solid #e7e7e7",
                borderBottom: "1px solid #e7e7e7"
              }}
            >
              <span style={{ marginTop: 10 }}>
                <p
                  style={{ fontStyle: "bold", fontSize: 24, color: "#3fa6e6" }}
                >
                  {this.state.UserProfile.connections}
                </p>
              </span>
              <h4 style={{ marginTop: 10 }}>Connections</h4>
            </Col>

            <Col style={{ padding: 10, borderBottom: "1px solid #e7e7e7" }}>
              <span style={{ marginTop: 10 }}>
                <p
                  style={{ fontStyle: "bold", fontSize: 24, color: "#3fa6e6" }}
                >
                  {this.state.UserProfile.followers}
                </p>
              </span>
              <h4 style={{ marginTop: 10 }}>Followers</h4>
            </Col>
          </Row>
          <Row>
            <Col style={{ padding: 10 }}>
              <span style={{ marginTop: 10 }}>
                <p
                  style={{ fontStyle: "bold", fontSize: 24, color: "#3fa6e6" }}
                >
                  {this.state.UserProfile.global_rank}
                </p>
              </span>
              <h4 style={{ marginTop: 10 }}>Global Rank</h4>
            </Col>
            <Col style={{ padding: 10, borderLeft: "1px solid #e7e7e7" }}>
              <span style={{ marginTop: 10 }}>
                <p
                  style={{ fontStyle: "bold", fontSize: 24, color: "#3fa6e6" }}
                >
                {this.state.UserProfile.global_reach}
                </p>
              </span>
              <h4 style={{ marginTop: 10 }}>Global Reach</h4>
            </Col>
          </Row>
          <Row
            style={{
              marginTop: 20,

              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              borderTop: "1px solid #e7e7e7",
              borderBottom: "1px solid #e7e7e7",
              padding: 10
            }}
          >
            <a href={this.state.UserProfile.angel_net_profile_link} title="">
              <p
                style={{
                  fontStyle: "bold",
                  fontSize: 16,
                  color: "#0b3253",
                  fontWeight: "bold"
                }}
              >
                View More
              </p>
            </a>
          </Row>

          <Row className="center-items" style={{paddingTop: 5}}>
            <IconButton>
              <a href={this.state.UserProfile.linkedin}>
              <svg
                style={{ width: "24px", height: "24px", viewBox: "0 0 24 24" }}
              >
                <path
                  fill="#000000"
                  d="M19,3A2,2 0 0,1 21,5V19A2,2 0 0,1 19,21H5A2,2 0 0,1 3,19V5A2,2 0 0,1 5,3H19M18.5,18.5V13.2A3.26,3.26 0 0,0 15.24,9.94C14.39,9.94 13.4,10.46 12.92,11.24V10.13H10.13V18.5H12.92V13.57C12.92,12.8 13.54,12.17 14.31,12.17A1.4,1.4 0 0,1 15.71,13.57V18.5H18.5M6.88,8.56A1.68,1.68 0 0,0 8.56,6.88C8.56,5.95 7.81,5.19 6.88,5.19A1.69,1.69 0 0,0 5.19,6.88C5.19,7.81 5.95,8.56 6.88,8.56M8.27,18.5V10.13H5.5V18.5H8.27Z"
                />
              </svg>
              </a>
            </IconButton>
            <IconButton>
            <a href={this.state.UserProfile.facebook}>
              <svg
                style={{ width: "24px", height: "24px", viewBox: "0 0 24 24" }}
              >
                <path
                  fill="#000000"
                  d="M5,3H19A2,2 0 0,1 21,5V19A2,2 0 0,1 19,21H5A2,2 0 0,1 3,19V5A2,2 0 0,1 5,3M18,5H15.5A3.5,3.5 0 0,0 12,8.5V11H10V14H12V21H15V14H18V11H15V9A1,1 0 0,1 16,8H18V5Z"
                />
              </svg>
              </a>
            </IconButton>

            <IconButton>
            <a href={this.state.UserProfile.twitter}>
              <svg
                style={{ width: "24px", height: "24px", viewBox: "0 0 24 24" }}
              >
                <path
                  fill="#000000"
                  d="M22.46,6C21.69,6.35 20.86,6.58 20,6.69C20.88,6.16 21.56,5.32 21.88,4.31C21.05,4.81 20.13,5.16 19.16,5.36C18.37,4.5 17.26,4 16,4C13.65,4 11.73,5.92 11.73,8.29C11.73,8.63 11.77,8.96 11.84,9.27C8.28,9.09 5.11,7.38 3,4.79C2.63,5.42 2.42,6.16 2.42,6.94C2.42,8.43 3.17,9.75 4.33,10.5C3.62,10.5 2.96,10.3 2.38,10C2.38,10 2.38,10 2.38,10.03C2.38,12.11 3.86,13.85 5.82,14.24C5.46,14.34 5.08,14.39 4.69,14.39C4.42,14.39 4.15,14.36 3.89,14.31C4.43,16 6,17.26 7.89,17.29C6.43,18.45 4.58,19.13 2.56,19.13C2.22,19.13 1.88,19.11 1.54,19.07C3.44,20.29 5.7,21 8.12,21C16,21 20.33,14.46 20.33,8.79C20.33,8.6 20.33,8.42 20.32,8.23C21.16,7.63 21.88,6.87 22.46,6Z"
                />
              </svg>
              </a>
            </IconButton>
            <IconButton>
            <a href={this.state.UserProfile.instagram}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
              </a>
            </IconButton>
            <IconButton>
            <a href={this.state.UserProfile.website_link}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path d="M6.188 8.719c.439-.439.926-.801 1.444-1.087 2.887-1.591 6.589-.745 8.445 2.069l-2.246 2.245c-.644-1.469-2.243-2.305-3.834-1.949-.599.134-1.168.433-1.633.898l-4.304 4.306c-1.307 1.307-1.307 3.433 0 4.74 1.307 1.307 3.433 1.307 4.74 0l1.327-1.327c1.207.479 2.501.67 3.779.575l-2.929 2.929c-2.511 2.511-6.582 2.511-9.093 0s-2.511-6.582 0-9.093l4.304-4.306zm6.836-6.836l-2.929 2.929c1.277-.096 2.572.096 3.779.574l1.326-1.326c1.307-1.307 3.433-1.307 4.74 0 1.307 1.307 1.307 3.433 0 4.74l-4.305 4.305c-1.311 1.311-3.44 1.3-4.74 0-.303-.303-.564-.68-.727-1.051l-2.246 2.245c.236.358.481.667.796.982.812.812 1.846 1.417 3.036 1.704 1.542.371 3.194.166 4.613-.617.518-.286 1.005-.648 1.444-1.087l4.304-4.305c2.512-2.511 2.512-6.582.001-9.093-2.511-2.51-6.581-2.51-9.092 0z" />
              </svg>{" "}
              </a>
            </IconButton>
          </Row>
        </div>
      </div>
    );
  }
}
