import React, { Component } from "react";
import SearchBar from "./SearchBar";
import CoursesAvailable from "./CoursesAvailable";
import Container from "reactstrap";
import FilterBox from "./FilterBox";
import { Link } from "react-router-dom";
import Syllabus from './Syllabus'
import Faculties from './Faculties';
import StudentsEnrolled from './StudentsEnrolled'
import Recuiters from './Recuiters'
import ClassRoomPicture from './ClassRoomPicture'
import RequirementsForCourse from './RequirementsForCourse'
export default class DisplayGlobalClassRoom extends Component {
  state = {
    CoursesList: [{}, {}, {}, {}, {}, {}, {}]
  };
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
            Welcome to Our Global Class Room
          </p>

          <SearchBar />
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            backgroundColor: "#fff",

            width: "90%"
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center"
            }}
          >
            <div
              style={{
                backgroundColor: "#0b3253",
                borderRadius: 5,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                marginTop: 20,
                marginLeft: 10,
                width: "97.5%",
                padding: 8
              }}
            >
             
              <p
              style={{
                
                fontSize: 23,
                color: "#fff",
                fontWeight: "bold"
              }}
            ><Link to='/classroom'> 
                Enroll Now
                </Link>
                </p>

            </div>

            
          </div>
          <div
            style={{
              width: 3,
              backgroundColor: "#0b3253",
              marginLeft: 10,
              marginTop: 20,
              marginRight: 10,
              marginBottom: 20
            }}
          />
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              width: "75%",
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
              Computer Programming Course
            </p>
            <div
              style={{
                height: 3,
                width: "100%",
                backgroundColor: "#0b3253",
                marginLeft: 30,
                marginTop: 10,
                marginRight: 10,
                marginBottom: 10
              }}
            />
            <div style={{display:'flex',flexDirection:'column',width:'100%'}}>
             <ClassRoomPicture/>
             <RequirementsForCourse/>
             <Syllabus/>
             <Faculties/>
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
