import React , {Component} from 'react';
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
import {  FormGroup, FormControl,Form} from "react-bootstrap";
import {Redirect } from 'react-router-dom';
export default class LoginPage extends Component{
    constructor(props){
        super(props);
 
        this.state = {
                email:'',
                password:'',
                firstname:'',
                lastname:'',
                signUpPassword:'',
                 signUpEmail:'',
               
                redirect_home:false,
                checked:'',
                show_popup_signin:false,
                 
                error_message:'',
        };
        this.OnLogin=this.OnLogin.bind(this);
        this.OnSignUp = this.OnSignUp.bind(this);
        this.handleChange=this.handleChange.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);
        this.handleChangeChecked=this.handleChangeChecked.bind(this);
        this.Popup_signIn=this.Popup_signIn.bind(this);
        this.handleClosePopUp=this.handleClosePopUp.bind(this);
        
     }
     handleClosePopUp = () => {
        this.setState({ show_popup_signin: false });
      };
    //  handleChangeFirstName(){

    //  }
    //  handleChangeLastName(){

    //  }

    //  validateFirstName(){

    //  }
    Popup_signIn(){
        this.setState({show_popup_signin:true})
    }
    handleSubmit = event => {
        event.preventDefault();
      }
       handleChange(event){
            this.setState({[event.target.name]:event.target.value})
      }
      handleChangeChecked = name => event => {
        this.setState({ [name]: event.target.checked });
        console.log(this.state.checked);
      };
    //  handleChangePassword(){

    //  }
    //  validateConfirmPassword(){

    //  }
    //  validateLastName(){

    //  }
    //   validateEmail(){

    //   }
    //   validatePassword(){

    //   }

    OnLogin=(event)=>{
        event.preventDefault();

        if(this.state.email == '' || this.state.password==''){
            alert('Email and Password cannot be empty');
            return;
        }else{
            axios.post('/login',{
                email:this.state.email,
                password:this.state.password
            }).then(res=>{
                console.log(res.data)
                if(res.data.success==false){
                    alert('Invalid Credientials');
                    return;
                }else{
                    this.setState({redirect_home:true});
                    sessionStorage.setItem( 'token_angel_net',res.data.token);
                    this.props.setState({loggedIn:true})
                }
            }).catch(err=>{
                alert( err);
                return;
            })
      
        }

    }
    OnSignUp=()=>{
        if(this.state.firstname ==''){
            alert('First Name cannot be empty');
            return;
        }
        if(this.state.signUpEmail ==''){
            alert('Email cannot be empty');
            return;
        }
        if(this.state.signUpPassword ==''){
            alert('Password cannot be empty');
            return;
        }
        if(this.state.checked!=true){
            alert('You Must Accept the terms and conditions');
            return;
        }
        axios.post('/signup',{
            email:this.state.signUpEmail,
            firstname:this.state.firstname,
            lastname:this.state.lastname,
            password:this.state.signUpPassword,
        }).then(res=>{
            if(res.data.success){
                this.setState({
                    firstname:'',
                    lastname:'',
                    signUpEmail:'',
                    signUpPassword:'',
                    checked:false,

                });
                alert('You can now login with valid credentials');
            }else{
                 
                    alert('Error '+ res.data.error);
                }
            }
        ).catch(err=>{
            alert('Error '+err)
        })
    }

    componentDidMount=()=> {
    //   {  const obj = localStorage.getItem('angelnet_app');
    //     if (obj && obj.token) {
    //       const { token } = obj;
          
         
    //     } else {
    //       this.setState({
    //         isLoading: false,
    //       });
    //     }}
      }
    
render(){
   
    return(

        <div style={{
            display:'flex', width:'100%',height:'100%',backgroundColor:'#fff',flexDirection:'column',alignItems:'center',justifyContent:'center'
            ,position:'relative',
        }}>
        <div style={{
            backgroundColor:'#0b3253',
            width:'100%',
            height:80,
            display:'flex',
            flexDirection:'row',
            alignItems:'center',
             position:'relative',
        }}> 
        
            <img src='images/logoangelnet.png' style={{width:30,height:30,margin:10,marginLeft:30}}/>
            <p style={{
                color:'#3fa6e6',
                fontSize:30,
            }}>
                AngelNet
            </p>
            
            
            <Hidden smDown> 
            <div style={{
                position:'absolute',
                right:50,
            }}>
              <div style={{display:'flex', flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
     
      
             {/* { <form name="contactform" className="contactform" >
                    <div className="col-md-6" style={{display:'flex', flexDirection:'row',alignItems:'center'}}>
 
 
                         <input refs="email" type="text" style={{
                             padding:5, borderRadius:5,marginRight:20,border:'1px solid #fff'
                         }} size="25" placeholder="Email or UserName" 
                         id="email"
                         onChange={this.handleChange} 
                         value={this.state.email}/>
                         <span style={{color: "red"}}>{this.state.errors["email"]}</span>
                         <br/>
                         <input refs="password" type="password" 
                         id="id"
                         style={{
                             padding:5, borderRadius:5,marginRight:20,border:'1px solid #fff'
                         }} size="25" placeholder="Password" 
                         onChange={this.handleChange}
                          value={this.state.password}/>
                         <span style={{color: "red"}}>{this.state.errors["password"]}</span>
                         <br/>
                        <Button variant="outlined" style={{
                 color:'#fff',
                 border:'1px solid #fff'
             }} onClick={this.OnLogin.bind(this)}
             
             >
                    Login
                    </Button>
                  </div>

              </form>} */}
               {/* <form onSubmit={this.handleSubmit} style={{display:'flex', flexDirection:'row'}}>
          <FormGroup controlId="email"  >
          <Form.Label>Email address</Form.Label>
            <FormControl
              
              type="email"
              value={this.state.email}
              onChange={this.handleChange}
            />
          </FormGroup>
          <FormGroup controlId="password"  >
          <Form.Label>Password</Form.Label>
            <FormControl
              value={this.state.password}
              onChange={this.handleChange}
              type="password"
            />
          </FormGroup>
          <Button variant="outlined" style={{
                 color:'#fff',
                 border:'1px solid #fff'
             }} onClick={this.OnLogin.bind(this)}
             
             >
                    Login
                    </Button>
        </form> */}
        <form onSubmit={this.handleSubmit}> 
       <input type="text"  name="email" value={this.state.email}  onChange = {this.handleChange} 
       style={{width:200,marginRight:10,borderRadius:5,padding:5,border:'1px solid #0b3253'}}
       placeholder='Email or Username'
       />
       <input type="password"  name="password" value={this.state.password}  onChange = {this.handleChange}
       style={{width:150,marginRight:10,borderRadius:5,padding:5,border:'1px solid #0b3253'}}
      placeholder='password'
      />
      <Button onClick={this.OnLogin} style={{color:'#fff', border:'1px solid #fff'}}>
          Sign In
          </Button>
   </form>
  </div>

             
            </div>
            </Hidden>
            <Hidden mdUp>
                <div  style={{
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
{/*header over*/}

             <div style={{
                 display:'flex',flexDirection:'row',
                
             }}>
            <Hidden smDown>
             <img src="images/loginPageImage.png" style={{width:800}} />
             </Hidden>
{/* 
             <div class="col-md-4 signup_box center"  >
					<div class="box">
							<div class="login">
								<div class="title">
									<h2>Your network is your net worth</h2>
									<p>Join Global Network - its Free</p>
								</div>
								<form name="signupForm" class="form">
									<div class="form-group"  >
										<label>First Name</label>
										<input name="first_name" type="text" placeholder='Enter First Name' class="form-control"/>
									</div>

									<div class="form-group" >
										<label>Last Name</label>
										<input name="last_name" class="form-control" type="text" placeholder="Enter last name" />
									</div>

									<div class="form-group"  >
										<label>Email</label>
										<input name="email" class="form-control" type="email" placeholder="Enter email" />
									</div>

									<div class="form-group" >
										<label>Password</label>
										<input name="password" class="form-control"   type="password" placeholder="Enter Password" />
									</div>
									
									<div class="row tools">
										<div class="col-md-12">
												<input name="cc" id="s1" required="" type="checkbox"/><label for="s1"><span></span> I agree to the Terms and Conditions.</label>
											
										</div>
										
									</div>
									<button  class="btn btn-block btn-primary btn-lg" >Sign Up</button>
								</form>
							</div>
							
						</div>
            </div> */}
            
                <Paper> 
            <div style={{width:400, display:'flex',flexDirection:'column' ,}}>
            <div style={{backgroundColor:'#f6f8fa', textAlign:'center' , width:'100%', height:'141px',borderBottom:'1px solid #c7c7c7'}}>
                <p style={{fontSize:30, marginTop:40,marginLeft:30,marginRight:30, color:'#333333'}}>Your network is your net worth</p>
                <p style={{marginTop:15}}>Join Global Network - its Free</p>
            </div>
            <div style={{
                backgroundColor:'#eef0f4',
                width:'100%',
            
            }}>
            <p style={{marginTop:20,marginLeft:20,marginRight:17, fontWeight:'bold',color:'#333333'}}>First Name</p>
            <input type="text" style={{ width:367 , padding:5,marginLeft:17,marginRight:17, border:'1px solid #e7e7e7' , borderRadius:5}} placeholder='Enter First Name' onChange={this.handleChange} name='firstname' value={this.state.firstname}/>
            <p style={{marginTop:20,marginLeft:20,marginRight:17, fontWeight:'bold',color:'#333333'}}>Last Name</p>
            <input type="text" style={{ width:367 , padding:5,marginLeft:17,marginRight:17, border:'1px solid #e7e7e7' , borderRadius:5}} placeholder='Enter Last Name' onChange={this.handleChange} name='lastname' value={this.state.lastname}/>
            <p style={{marginTop:20,marginLeft:20,marginRight:17, fontWeight:'bold',color:'#333333'}}>Email</p>
            <input type="email" style={{ width:367 , padding:5,marginLeft:17,marginRight:17, border:'1px solid #e7e7e7' , borderRadius:5}} placeholder='Enter email' onChange={this.handleChange} name='signUpEmail' value={this.state.signUpEmail}/>
            <p style={{marginTop:20,marginLeft:20,marginRight:17, fontWeight:'bold',color:'#333333'}}>Password</p>
            <input type="password" style={{ width:367 , padding:5,marginLeft:17,marginRight:17, border:'1px solid #e7e7e7' , borderRadius:5}} placeholder='Enter Password' onChange={this.handleChange} name='signUpPassword' value = {this.state.signUpPassword}/>
            <div style={{display:'flex',flexDirection:'row',margin:10,marginLeft:20}}>
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
       <Button onClick={this.OnSignUp} variant="contained" size="large" color="primary" style={{width:360, marginLeft:20,marginBottom:20}}>
          Sign Up
        </Button>
       
                </div>

            </div>
            </Paper>


             
                 </div>




        </div>
         



         
    )
}
}

