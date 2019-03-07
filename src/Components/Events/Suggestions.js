import React , {Component} from 'react'
import EventCard from './EventCard'

import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";

export default class Suggestion extends Component{
    CardItems(){
        return(
           [1,2,3,4,5].map((item, i) => (
            <EventCard key={`key-${i}`} />
          )
        )
        )
    }
    responsive = {
        0: { items: 1 },
        600: { items: 2 },
        1024: { items: 3 },
      };
      onSlideChange(e) {
        console.log('Item`s position during a change: ', e.item);
        console.log('Slide`s position during a change: ', e.slide);
      };
     
      onSlideChanged(e) {
        console.log('Item`s position after changes: ', e.item);
        console.log('Slide`s position after changes: ', e.slide);
      };
     handleOnDragStart = e => e.preventDefault()
render(){
    const items= this.CardItems();
return(
  
      

  <AliceCarousel
  items={items}
  duration={400}
  autoPlay={true}
  startIndex = {1}
  fadeOutAnimation={true}
  mouseDragEnabled={true}
  playButtonEnabled={true}
  autoPlayInterval={2000}
  autoPlayDirection="rtl"
  responsive={this.responsive}
  disableAutoPlayOnAction={true}
  onSlideChange={this.onSlideChange}
  onSlideChanged={this.onSlideChanged}
/>
    
)
}

}



