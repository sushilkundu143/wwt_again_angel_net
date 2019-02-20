import React , {Component} from 'react'

export default class SmallerPosts extends Component{

render(){
    return(
        <div style={{
            width:'500',
            display:'flex',
            flexDirection:'row'
        }}>
        <img src="images/vr.jpg"  style={{
          width:200,
          height:100,
          marginLeft:20,
          marginTop:30,  
        }}/>
        <div style={{disply:'flex',flexDirection:'column',marginTop:20,marginLeft:10}}>
            <p style={{
                 
                color:'#5f5',
                fontSize:15
            }}>TECH
                </p>
                <p style={{
                    fontWeight:'bold',
                    fontSize:19,
                   
                    marginRight:10,
                    color:'#fff'
                }}>
                Mobile Google CEO Promises 11 DayDream-compatible phones
                </p>
            </div>

            </div>
    )
}

}