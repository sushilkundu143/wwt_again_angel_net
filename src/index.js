import React from "react";
import ReactDOM from "react-dom";
import Home from "./Components/Home";
import Connections from "./Components/Connections";
import Profile from "./Components/profile";
import Header from "./Components/Header";
import MyProfile from "./Components/myProfile";
import TrendingMain from './Components/Blog/TrendingMain'
import ActiveCourses from "./Components/GlobalClassroom/ActiveCourses";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Messages from "./Components/Message/DisplayMessages";
import NotificationsPage from "./Components/Notifications/NotificationsPage";
import "./styles.css";
import CourseInformation from './Components/GlobalClassroom/courseInformation'
import Blog from "./Components/Blog/MainPage";
import ClassRoom from "./Components/GlobalClassroom/ClassRoom";
import GlobalClassroom from "./Components/GlobalClassroom/DisplayGlobalClassroom";
import Jobs from "./Components/Jobs/JobsPage";
function App() {
  return (
    <Router>
      <div>
        <Header />
        <Route exact path="/" component={Home} />
        <Route path="/companies" component={Connections} />
        <Route path="/profile" component={MyProfile} />
        <Route path="/messages" component={Messages} />
        <Route path="/notifications" component={NotificationsPage} />
        <Route path="/global-classroom" component={GlobalClassroom} />
        <Route path="/active-courses" component={ActiveCourses} />
        <Route path="/classroom" component={ClassRoom} />
        <Route path="/blog" component={Blog} />
        <Route path='/trending' component={TrendingMain}/>
        <Route path="/jobs-page" component={Jobs} />
        <Route path='/course-information' component={CourseInformation} />
      </div>
    </Router>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
