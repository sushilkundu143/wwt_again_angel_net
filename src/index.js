import React,{Component} from "react";
import Analytics from './Components/Analytics/Main'
import NewProfile from './Components/NewProfile'
import ReactDOM from "react-dom";
import Home from "./Components/Home";
import Connections from "./Components/Connections";
import Profile from "./Components/profile";
import Settings from './settings';
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
import Partnership from './Components/Partnership/partnership_main'
import Jobs from "./Components/Jobs/JobsPage";
import Login from './login';
import axios from 'axios';
import Events from './Components/Events/Events_Page'
export default class  App extends Component {
  state={
    loggedIn:false,
  }
  constructor(props){
    super(props);
    this.LoginFunction.bind(this);
    this.Logout.bind(this);

  }
  LoginFunction(){
    this.setState({loggedIn:true});
  }
  Logout(){
    this.setState({loggedIn:false});
  }
  componentDidMount(){
    var token = sessionStorage.getItem('token_angel_net');
    if(token){
     this.setState({ loggedIn:true});
    }
  }
  render(){

     if(this.state.loggedIn){
      return(
    <Router >
      <div>
        <Header setState={b=>{this.setState(b)}}/>
        <Route exact path="/" component={Home} />
        <Route path='/settings' component={Settings}/>
        <Route path='/home' component={Home}/>
        <Route path="/companies" component={Connections} />
        <Route path="/profile" component={NewProfile} />
        <Route path="/messages" component={Messages} />
        <Route path="/notifications" component={NotificationsPage} />
        <Route path="/global-classroom" component={GlobalClassroom} />
        <Route path="/active-courses" component={ActiveCourses} />
        <Route path="/classroom" component={ClassRoom} />
        <Route path="/blog" component={Blog} />
        <Route path='/trending' component={TrendingMain}/>
        <Route path="/jobs-page" component={Jobs} />
        <Route path='/course-information' component={CourseInformation} />
        <Route path='/partnership' component={Partnership}/>
        <Route path='/events' component={Events}/>
        <Route path='/analysis' component={Analytics}/>
      </div>
    </Router>
      )
    }else{
        return (<Login loggin={this.LoginFunction} logout={this.Logout} setState={p=>{this.setState(p)}}/>);
    }
  }
 
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);