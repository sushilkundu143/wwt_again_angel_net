import React , {Component} from 'react'

export default class SmallerPosts extends Component{

render(){
    return(
        <div style={{
            width:'300',
            display:'flex',
            flexDirection:'row'
        }}>
        <a href="http://www.mvpthemes.com/zoxnews/mobile-google-ceo-promises-11-daydream-compatible-phones/">
        <img src="images/vr.jpg"  style={{
          width:70,
          height:70,
          marginLeft:20,
          marginTop:30,  
        }}/>
        <div style={{disply:'flex',flexDirection:'column',marginTop:20,marginLeft:10}}>
            <p style={{
                fontWeight:'bold',
                color:'#aaa',
                fontSize:15
            }}>TECH
                </p>
                <p style={{
                    fontWeight:'bold',
                    fontSize:19,
                    fontFamily:'Impact',
                    marginRight:10,
                }}>
                Mobile Google CEO Promises 11 DayDream-compatible phones
                </p>
            </div>
</a>
            </div>
    )
}

}