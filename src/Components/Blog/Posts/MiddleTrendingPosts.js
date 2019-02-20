import React, {Component} from 'react'

export default class MiddleSizedPost extends Component{

render(){
    return(
        <a href="http://www.mvpthemes.com/zoxnews/the-final-6-game-of-thrones-episodes-might-feel-like-a-full-season/"> 
        <div style={{
            display:'flex',
            flexDirection:'column',
            backgroundColor:'#fff',
            width:350,
            height:300,
            marginBottom:10
        }}>
        <img src='images/gameofthrones.jpg' style={{width:350}}/>
        <div style={{
            display:'flex',flexDirection:'column'
        }}>
        <p style={{
        marginLeft:50,
        fontWeight:'bold',
        fontSize:18,
        color:'#aaa',marginTop:10,
        }}>Entertainment News</p>
        
        <div style={{
            display:'flex',
            flexDirection:'row',
            width:'100%',
        }}>
        <p style={{
            marginLeft:20,
            marginTop:10,
            fontSize:40,
            fontWeight:'bold',
            color:'#aaa'
        }}>1</p>
        <div style={{
            display:'flex',
            flexDirection:'column',
            marginLeft:10,
            
        }}>
            <p style={{
                fontWeight:'bold',
                fontSize:17,
            }}>
                The final 6 'Game of  Thrones' episode might feel like a full season
                
            </p>

        </div>



        </div>
        </div>


        </div>
        </a>
    )
}


}