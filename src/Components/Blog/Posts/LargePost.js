import React , {Component} from 'react'

export default class LargePost extends Component{
    render(){
        return(
            
            <div style={{width:500 ,position:'relatve',display:'flex',flexDirection:'column',height:500}}>
            <a href="http://www.mvpthemes.com/zoxnews/illinois-financial-crisis-could-bring-the-state-to-a-halt/"> 
            <img src='images/politics.jpg' style={{width:500,height:500}}/>
            <div style={{position:'relative',left:20,bottom:170,display:'flex',flexDirection:'column',width:'100%'}}>
            <p style={{
                
                fontSize:50,
                color:'#fff',
                width:'100%',
                fontFamily:'Impact',
                lineHeight: 1
            }}>
                ILLinonis' Financial Crisis Fallout
            </p>
            <p style={{
                color:'#fff',
                fontSize:17,
                marginRight:10,
                fontWeight:'bold'
            }}>
            At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis
                </p>
            </div>
            </a>
            </div>
            
        )
    }
}