import React , {Component} from 'react'
import {Button,ButtonToolbar,Carousel} from 'react-bootstrap' 
import EventCard from './EventCard'
import "react-alice-carousel/lib/alice-carousel.css";
import Suggestions from './Suggestions'

export default class CardCarousel extends Component{
render(){
return(
<div style={{width:'100%',display:'flex',flexDirection:'column'}}>
<div style={{display:'flex',flexDirection:'row',position:'relative', backgroundColor:'#e7e7e7', padding:10, marginBottom:20}}>
<p style={{fontSize:30,color:'#007bff'}}>{this.props.Placeholder}</p>
<ButtonToolbar style={{position:'absolute',right:5}}>
<Button variant="primary"  >
    Organize {this.props.Placeholder}
</Button>
</ButtonToolbar>
</div>
<div>
<Suggestions/>
</div>
</div>


)


}



}