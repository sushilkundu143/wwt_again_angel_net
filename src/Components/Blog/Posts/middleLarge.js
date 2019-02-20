import React , {Component} from 'react'

export default class LargePost extends Component{
    render(){
        return(
            <div style={{width:500 ,marginTop:20,position:'relatve',display:'flex',flexDirection:'column',height:300}}>
           <a href="http://www.mvpthemes.com/zoxnews/better-call-saul-has-been-renewed-for-a-fourth-season/"> 
            <img src='images/menactors.jpg' style={{width:500,height:300}}/>
            <div style={{position:'relative',left:10,bottom:70,display:'flex',flexDirection:'column',width:'100%'}}>
            <p style={{
                
                fontSize:25,
                color:'#fff',
                width:'100%',
                fontFamily:'Impact',
                lineHeight: 1,
                marginRight:40
            }}>
              'Better Call Saul' has been renewed for a fourth season
            </p>
          {/*  <p style={{
                color:'#fff',
                fontSize:17,
                marginRight:10,
                fontWeight:'bold'
            }}>
            At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis
        </p>*/}
            </div>
            </a>
            </div>
        )
    }
}