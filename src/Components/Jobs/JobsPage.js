import React, { Component } from "react";
import SearchBar from "./SearchBar";
import SelectLocation from "./Select_Location";
import SingleJob from "./SingleJob";
import { Button } from "react-bootstrap";

export default class JobsPage extends Component {
  render() {
    return (
      <div
        className="wrapper  "
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: "100%",
          marginBottom: 20
        }}
      >
        <div
          style={{
            backgroundColor: "#0b3253",
            padding: 10,
            marginTop: 20,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            width: "90%",
            borderRadius: 5
          }}
        >
          <p
            style={{
              fontSize: 35,
              color: "#fff",
              fontWeight: "bold",
              paddingTop: 10
            }}
          >
            Explore thousands of Jobs
          </p>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center"
            }}
          >
            <SearchBar Placeholder="Enter Keywords" />
            <div style={{ marginTop: 10, marginLeft: 10 }}>
              <SelectLocation
                Placeholder="Enter Location"
                choice1="Delhi"
                choice2="Mumbai"
                choice3="Chennai"
              />
            </div>
            <div style={{ marginTop: 10 }}>
              <SelectLocation
                Placeholder="Enter Cateogory"
                choice1="Java"
                choice2="Marketing"
                choice3="Teaching"
              />
            </div>
            <div style={{ marginTop: 10 }}>
              <Button
                style={{
                  color: "#869aa6",
                  border: "1px solid #0b3253",
                  borderRadius: 10,
                  backgroundColor: "#2f516d"
                }}
              >
                Search
              </Button>
            </div>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            backgroundColor: "#fff",

            width: "90%",
            paddingLeft: 20
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              width: "90%",
              marginBottom: 10
            }}
          >
            <p
              style={{
                marginTop: 20,
                fontSize: 25,
                color: "#0b3253",
                fontWeight: "bold"
              }}
            >
              {" "}
              Best Available Jobs For You
            </p>
            <div
              style={{
                height: 3,
                width: "100%",
                backgroundColor: "#0b3253",
                marginLeft: 0,
                marginTop: 10,
                marginRight: 10,
                marginBottom: 10
              }}
            />
                <div className="companies-list">
              <div className="row" style={{ display: "flex",  }}>
                <div style={{marginRight:70}}> 
                <SingleJob />
                </div>
                <div style={{marginRight:70}}> 
                <SingleJob />
                </div>
                <div style={{marginRight:70}}> 
                <SingleJob />
                </div>
                <div style={{marginRight:70}}> 
                <SingleJob />
                </div>
                <div style={{marginRight:70}}> 
                <SingleJob />
                </div>
                <div style={{marginRight:70}}> 
                <SingleJob />
                </div>
                <div style={{marginRight:70}}> 
                <SingleJob />
                </div>
                <div style={{marginRight:70}}> 
                <SingleJob />
                </div>
                <div style={{marginRight:70}}> 
                <SingleJob />
                </div>
               
               
               </div>
            </div>
            <div
              style={{
                height: 3,
                width: "100%",

                marginLeft: 30,
                marginTop: 10,
                marginRight: 10,
                marginBottom: 10
              }}
            />
          </div>
        </div>
      </div>
    );
  }
}
