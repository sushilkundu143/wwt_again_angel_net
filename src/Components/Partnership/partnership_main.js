import React , {Component} from 'react'
import CardCofounderReq from './CardCofounderReq'
import Select_Location from '../Jobs/Select_Location'
import CardIdeaReq from './CardIdeaReq'
import { Button } from "react-bootstrap";
import SearchBar from '../Jobs/SearchBar'
 

export default class partnership extends Component{

    render(){
        return(
            <div class="wrapper" style={{width:'100%'}}>
            <div style={{width:'100%',display:'flex',backgroundColor:'#fff',flexDirection:'column'}}> 
                <div style={{width:'100%',display:'flex',flexDirection:'column',
                position:'relative',marginTop:20,
                alignItems:'center',justifyContent:'center'}}>
                <img src="images/partnership2.jpg" style={{width:'80%',height:300}}/>
                <p style={{position:'absolute',left:'15%',bottom:'20%',fontSize:50,color:'#0b3253',fontWeight:'bold',}}>Find or Become a Start-up Co-Founder </p>
                </div>

             <div style={{display:'flex',flexDirection:'row',backgroundColor:'#0b3253',
             alignItems:'center',marginTop:50,justifyContent:'center',paddingTop:10,paddingBottom:10}}>   
             <p style={{color:'#fff',fontWeight:'bold',
             marginRight:20,fontSize:20}}>Search for Best available Persons</p>
               <SearchBar style={{marginBottom:20}}Placeholder='Search Organisation by Name'/>
               <div style={{marginTop:10}}>
                <Select_Location 
               Placeholder="I want a"
               choice1="Co-founder"
               choice2="Investor"
               choice3="Idea"
              
              />
              </div>
              <div style={{marginTop:10}}>
              <Select_Location 
               Placeholder="Enter Location"
               choice1="Delhi"
               choice2="Mumbai"
               choice3="Chennai"
              
              />
              </div>
              <div style={{marginTop:10}}>
              <Select_Location 
               Placeholder="Field .."
               choice1="Marketing"
               choice2="Programming"
               choice3="Operations"
              
              />
              </div>
              <div style={{marginTop:10}}>
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

              <div style={{display:'flex',flexDirection:'row',marginTop:20,marginLeft:20,alignItems:'center',justifyContent:'center'}}>
                <div style={{display:'flex',flexDirection:'column',minWidth:500,maxWidth:900}}>
                    <p style={{
                            fontSize:20,
                            color:'#0b3253',
                            marginLeft:10,
                    }}> 
Looking for a Co-Founder to join my  Idea  </p>

                    <CardCofounderReq/>
                    <CardCofounderReq/>
                    <CardCofounderReq/>
                    <CardCofounderReq/>
                    <CardCofounderReq/>
                    

                </div>
                <div style={{display:'flex',flexDirection:'column'}}>
                <p style={{
                            fontSize:20,
                            color:'#0b3253',
                            marginLeft:10,
                    }}> 
Looking for an Idea  </p>

                    <CardIdeaReq/>
                    <CardIdeaReq/>
                    <CardIdeaReq/>
                    <CardIdeaReq/>
                    <CardIdeaReq/>
                </div>

              </div>

                </div>
                </div>
        )
    }




}