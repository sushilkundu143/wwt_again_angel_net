import React, {
    Component
} from 'react';
import Hidden from '@material-ui/core/Hidden';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Card from '@material-ui/core/Card';
import axios from 'axios';
import TextField from '@material-ui/core/TextField';
import './all.css'
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import {
    FormGroup,
    FormControl,
    Form
} from "react-bootstrap";
import {
    Redirect
} from 'react-router-dom';
export default class LoginPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: '',
            firstname: '',
            lastname: '',
            signUpPassword: '',
            signUpEmail: '',
            redirect_home: false,
            checked: '',
            show_popup_signin: false,
            error_message: '',
        };
        this.OnLogin = this.OnLogin.bind(this);
        this.OnSignUp = this.OnSignUp.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChangeChecked = this.handleChangeChecked.bind(this);
        this.Popup_signIn = this.Popup_signIn.bind(this);
        this.handleClosePopUp = this.handleClosePopUp.bind(this);

    }
    handleClosePopUp = () => {
        this.setState({
            show_popup_signin: false
        });
    };

    Popup_signIn() {
        this.setState({
            show_popup_signin: true
        })
    }
    handleSubmit = event => {
        event.preventDefault();
    }
    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    handleChangeChecked = name => event => {
        this.setState({
            [name]: event.target.checked
        });
        console.log(this.state.checked);
    };

    OnLogin = (event) => {
        event.preventDefault();

        if (this.state.email == '' || this.state.password == '') {
            alert('Email and Password cannot be empty');
            return;
        } else {
            this.props.setState({
                loggedIn: true
            })
            /*
            axios.post('/login', {
                email: this.state.email,
                password: this.state.password
            }).then(res => {
                console.log(res.data)
                if (res.data.success == false) {
                    alert('Invalid Credientials');
                    return;
                } else {
                    this.setState({
                        redirect_home: true
                    });
                    sessionStorage.setItem('token_angel_net', res.data.token);
                    this.props.setState({
                        loggedIn: true
                    })
                }
            }).catch(err => {
                alert(err);
                return;
            })
            */
        }

    }
    OnSignUp = () => {
        if (this.state.firstname == '') {
            alert('First Name cannot be empty');
            return;
        }
        if (this.state.signUpEmail == '') {
            alert('Email cannot be empty');
            return;
        }
        if (this.state.signUpPassword == '') {
            alert('Password cannot be empty');
            return;
        }
        if (this.state.checked != true) {
            alert('You Must Accept the terms and conditions');
            return;
        }
        axios.post('/signup', {
            email: this.state.signUpEmail,
            firstname: this.state.firstname,
            lastname: this.state.lastname,
            password: this.state.signUpPassword,
        }).then(res => {
            if (res.data.success) {
                this.setState({
                    firstname: '',
                    lastname: '',
                    signUpEmail: '',
                    signUpPassword: '',
                    checked: false,
                });
                alert('You can now login with valid credentials');
            } else {

                alert('Error ' + res.data.error);
            }
        }).catch(err => {
            alert('Error ' + err)
        })
    }

    componentDidMount = () => {

    }
render(){
   
    return(
        <div className="container-fluid">
        <div className="row">
        <nav className="navbar navbar-expand-lg navbar-light shadow-lg" style={{
            backgroundColor:'#0b3253',
            width: '100%'
        }}> 
        <div className="container">
           <a className="navbar-brand" href="">
                <img src='images/logoangelnet.png' style={{width:30,height:30}}/>
                <p className="logo-text">
                    AngelNet
                </p>
            </a>
            <Hidden smDown>
                <div style={{display:'flex', flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
                    <form className="form-inline" onSubmit={this.handleSubmit}> 
                        <input type="text"  name="email" value={this.state.email} className="form-control"  onChange={this.handleChange} 
                        style={{marginRight:10,borderRadius:5,padding:5,border:'1px solid #0b3253'}} 
                        placeholder='Email or Username' />
                        <input type="password"  name="password" value={this.state.password} className="form-control"  onChange={this.handleChange}
                        style={{marginRight:10,borderRadius:5,padding:5,border:'1px solid #0b3253'}}
                        placeholder='Password' />
                        <Button className="btn btn-outline-primary btn-sm" onClick={this.OnLogin} style={{color:'#fff', border:'1px solid #fff',     
                        padding: '.25rem .5rem',
                        fontSize: '.8rem',
                        lineHeight: 1.5,
                        borderRadius:'.2rem'}}>
                        LOGIN
                        </Button>
                    </form>
                </div>
            </Hidden>
            <Hidden mdUp>
                <div style={{
                position:'absolute',
                right:50,
                }}>
                <Button variant="outlined" style={{
                 color:'#fff',
                 border:'1px solid #fff'
                }}
                 onClick={this.Popup_signIn}
                >
                 Sign In
                </Button>
                </div>
            </Hidden>
            <Dialog
          open={this.state.show_popup_signin}
          onClose={this.handleClosePopUp}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">Sign In</DialogTitle>
          <DialogContent>
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Email or Username"
              type="email"
              fullWidth
            />
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Password"
              type="password"
              fullWidth
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={this.OnLogin} color="primary">
              submit
            </Button>
          </DialogActions>
        </Dialog>
            </div>
        </nav>
        </div>
{/*header over*/}
        <div className="bg row">
          <div className="layer">
          <div className="container">
            <div className="row">
            <div className="col-sm-8 col-lg-8">
                <img src="images/loginPageImage.png" alt="" className="img-fluid w-100"/>
             </div>
            <div className="col-sm-4 col-lg-4">
                <div className="shadow">
                <div style={{backgroundColor:'#f6f8fa', textAlign:'center' , width:'100%', padding:'30px 10px', borderBottom:'1px solid #c7c7c7'}}>
                    <h2 className="h2">Your network is your net worth</h2>
                    <p style={{marginTop:15}}>Join Global Network - its Free</p>
                </div>
            <form className="p-3" style={{backgroundColor: '#f2f2f2'}}>
            <div className="form-group" style={{marginBottom:'1rem'}}>
                <label htmlFor="firstname" style={{marginBottom:'0.5rem'}}>First Name</label>
                <input type="text" id="firstname" className="form-control" placeholder='Enter First Name' onChange={this.handleChange} name='firstname' value={this.state.firstname}/>
            </div>
            <div className="form-group" style={{marginBottom:'1rem'}}>
                <label htmlFor="firstname" style={{marginBottom:'0.5rem'}}>Last Name</label>
                <input type="text" id="firstname" className="form-control" placeholder='Enter First Name' onChange={this.handleChange} name='firstname' value={this.state.firstname}/>
            </div>
            <div className="form-group" style={{marginBottom:'1rem'}}>
                <label htmlFor="signUpEmail" style={{marginBottom:'0.5rem'}}>Email</label>
                <input type="email" id="signUpEmail" placeholder='Enter email' className="form-control" onChange={this.handleChange} name='signUpEmail' value={this.state.signUpEmail}/>
            </div>
            <div className="form-group" style={{marginBottom:'1rem'}}>
                <label htmlFor="signUpPassword" style={{marginBottom:'0.5rem'}}>Password</label>
                <input type="password" id="signUpPassword" placeholder='Enter Password' className="form-control" onChange={this.handleChange} name='signUpPassword' value = {this.state.signUpPassword}/>
            </div>
            <div className="form-group" style={{marginBottom:'1rem'}}>
            <FormControlLabel 
            control={
            <Checkbox
              checked={this.state.checked}
              onChange={this.handleChangeChecked('checked')}
              value="checked"
              color="primary"
            />
          }
          label=" I agree to the Terms and Conditions."
        />
       </div>
       <button onClick={this.OnSignUp} type="submit" className="btn btn-primary d-block w-100">
          Sign Up
        </button>
        </form>
        </div>
        </div>
         </div>
       </div>
       </div>
        </div>
       <div className="row">
       <footer className="colored">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <small>General</small><br />
                        <ul className="pull-left">
                                <li><a href="">About Us</a></li>
                                <li><a ui-sref="user.default.help" href="/help">Help</a></li>
                                <li><a ui-sref="user.default.terms" href="/terms-of-use">Terms of Use</a></li>
                                <li><a href="">Privacy Policy</a></li>
                        </ul>
                    </div>
                    <div className="col-md-6">
                            <small>Advance</small><br />
                            <ul className="pull-left">
                                    <li><a ui-sref="user.default.angeltv" href="/tv">AngelNet Tv</a></li>
                                    <li><a>Mobile</a></li>
                                    <li><a ui-sref="user.default.events" href="/events">Events</a></li>
                                    <li><a ui-sref="user.default.news" href="/news">News</a></li>
                                    <li><a ui-sref="user.default.blogs" href="/blog">Blog</a></li>
                                    <li><a ui-sref="user.default.job" href="/job">Jobs</a></li>
                            </ul>
                        </div>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <small>More</small><br />
                        <ul className="pull-left">
                                <li><a ui-sref="user.default.success-story" href="/success-story">Success stories</a></li>
                                <li><a href="">Influencers</a></li>
                                <li><a ui-sref="user.default.classRoom" href="/class/room">Global Classroom</a></li>
                        </ul>
                    </div>
                    <div className="col-md-6">
                            <small>User Guidelines</small><br />
                            <ul className="pull-left">
                                <li><a href="">Community Guidelines</a></li>
                                <li><a href="">Cookie Policy</a></li>
                                <li><a href="">Copyright Policy</a></li>
                                <li><a href="">User Agreement</a></li>
                            </ul>
                        </div>
                </div>
                </div>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-12 more_menu">
                            <div className="container">
                                © AngleNet 2018. All rights reserved.
                            </div>
                        </div>
                    </div>
                </div>
        </footer>
        </div>
    </div>
    )
}
}
