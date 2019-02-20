import React, { Component } from "react";
import IconButton from '@material-ui/core/IconButton'
import LeftButton from '@material-ui/icons/ChevronLeft'
import RightButton from '@material-ui/icons/ChevronRight'
import NewsCard from './NewsCard'
import BlogCard from './BlogsCard'
import EventsCard from './EventsCard'
import TrendingCard from './TrendingCard'

function RenderOptional(props){
  if(props.Card_Number==1)
  {
  return  <NewsCard/>
  }else if(props.Card_Number==2){
   return <BlogCard/>
  }else if(props.Card_Number==3){
  return  <TrendingCard/>
  }else{
    return <EventsCard/>
  }
}
export default class Blog extends Component {
  
  constructor(props){
    super(props)
    this.setState({card_number:2})
   this.handleLeft= this.handleLeft.bind(this)
    this.handleRight=this.handleRight.bind(this)
  }
  handleLeft=()=>{
    console.log('previous ' ,this.state.card_number)
 
      var previous = this.state.card_number-1;
      previous=(4+previous)%4;
      this.setState({card_number:previous})
      console.log('new ' ,this.state.card_number)
    
    
  }
  handleRight=()=>{
    console.log('previous ' ,this.state.card_number)
     
      var previous=this.state.card_number+1;
      previous=previous%4;
      this.setState({card_number:previous})
      console.log('new ' ,this.state.card_number)
   
  }
  state={
    card_number:2
  }
  componentDidUpdate(){
      console.log(this.state)
  }

  
  
   
  render() {
    return (
      <div className="wrapper">
        <div style={{
            display:'flex',
            flexDirection:'row',
            padding:20,
            height:500,
            width:'100%',
            overflow:'auto',
            backgroundColor:'#fff',
            border:'1px solid #e7e7e7'
       }}>
        <div style={{
        width:30,
        height:'100%',
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'center',
        marginRight:20
        }}>
<IconButton style={{
    
    display:'flex',flexDirection:'row',
    alignItems:'center',
    justifyContent:'center'
}}
onClick={this.handleLeft}

>
<LeftButton/>
</IconButton>
        </div>

        <div style={{
        width:'90%',
        minWidth:500
      ,
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
         justifyContent:'center'
        }}>

  <RenderOptional Card_Number={this.state.card_number}/>

        </div>
        <div style={{
        
        width:30,
        height:'100%',
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
         justifyContent:'center',
         marginLeft:20
        }}>
       <IconButton style={{
         
         display:'flex',flexDirection:'row',
         alignItems:'center',
         justifyContent:'center'
         
       }}
       onClick={this.handleRight}
       >
<RightButton/>
</IconButton> 
        </div>
      </div>
      </div>
    );
  }
}
