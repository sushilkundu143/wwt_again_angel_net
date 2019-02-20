import React , {Component} from 'react'
import ReactPlayer from 'react-player'
export default class VideoDisplay extends Component{

render(){

    return(
<div style={{
    width:800,
    height:500,
    marginTop:20,
    marginLeft:20,
    backgroundColor:'#fff'
}}>
  <ReactPlayer
                    url="https://www.youtube.com/watch?v=RUXihCE7rBc"
                    playing
                    controls
                    volume
                    muted
                    width='100%'
                    height='100%'
                  />

</div>

    )
}




}