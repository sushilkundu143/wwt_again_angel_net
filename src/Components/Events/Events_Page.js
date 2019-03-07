import React , {Component} from 'react'
import {Carousel} from 'react-bootstrap'
import CardsCarousel from './CardsCarousel'
export default class Events_Page extends Component{
render(){
    return(
        <div className="wrapper" >
            <div style={{
                display:'flex',flexDirection:'row',width:'100%'
            }}>
            
            <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="images/Grid1.webp"
      alt="First slide"
    />
    
  </Carousel.Item>
  <Carousel.Item>  
    <img
      className="d-block w-100"
      src="images/reliance.webp"
      alt="First slide"
    />
   
  </Carousel.Item>
   
</Carousel>
            
            </div>
            <div style={{display:'flex',flexDirection:'column',margin:20,background:'#fff',alignItems:'center',
            justifyContent: 'center',}}>
            <CardsCarousel 
            Placeholder="Competitions"
            />
            <CardsCarousel 
            Placeholder="Talks"
            />
            <CardsCarousel 
            Placeholder="Meet Ups"
            />
            <CardsCarousel 
            Placeholder="Conferences"
            />
            <CardsCarousel 
            Placeholder="Idea Pitiching"
            />
            
            
            
            
            
            

            </div>



        </div>
    )
}


}