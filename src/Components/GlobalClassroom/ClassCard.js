import React, { Component } from "react";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";
export default class ClassCard extends Component {
  classes = {
    card: {
      maxWidth: 345
    },
    media: {
      height: 140
    }
  };
  render() {
    return (
      <Link to='/course-information' >  
      <Card className={this.classes.card} style={{ width: 200, margin: 10 }}>
        <CardActionArea>
          <img
            src="images/learn_to_code.jpg"
            style={{ width: 200, height: 150 }}
          />
          <CardContent style={{display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center'}}>
          <h4 style={{fontWeight:'bold',fontSize:20,paddingTop:10,marginRight:10}}>{this.props.CourseName}</h4>
      <div style={{display:'flex',flexDirection:'row'}}><p style={{fontWeight:'bold',fontSize:13,marginRight:10}}>Instructor : </p><p> {this.props.Instructor}</p>
      </div>  <div style={{display:'flex',flexDirection:'row'}}>  <p style={{fontWeight:'bold',fontSize:13,marginRight:10}}>Students Enrolled : </p><p>{this.props.StudentsEnrolled}</p>
     </div><div style={{display:'flex',flexDirection:'row'}}><div style={{display:'flex',flexDirection:'row'}}>     <p style={{fontWeight:'bold',fontSize:13,marginRight:10}}>Price :</p><p>{this.props.Price}</p>
        </div>
        <p style={{fontWeight:'bold',fontSize:13,marginLeft:10,marginRight:10}}>Rating : </p><p> {this.props.Rating}</p>
        </div>
        
        </CardContent>
        </CardActionArea>
      </Card>
      </Link>
    );
  }
}
