import React , {Component} from 'react'
import MiddlePostTrending from './Posts/MiddleTrendingPosts'
import LargePost from './Posts/LargePost'
import MiddleLarge from './Posts/middleLarge'
import SmallerPosts from './Posts/SmallerPosts'
import SmallerPostsVideo from './Posts/SmallerPostsVideo'
import VideoDisplay from './Posts/VideoDisplay'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
export default class TrendingMainPage extends Component{
render(){
    return(
        <div class="wrapper" style={{marginLeft:20,marginRight:20}}> 
        <div style={{disply:'flex',marginTop:20,flexDirection:'column',width:'100%'}}> 
       
        <div style={{display:'flex',flexDirection:'row',width:'100%' ,alignItems:'center',marginBottom:10,justifyContent:'center'}}>
        <div style={{width:'40%',height:2,backgroundColor:'#0b3253', marginRight:10}}>
        </div>
        <p style={{fontSize:30,fontWeight:'bold',color:'#0b3253'}}>Trending</p>
        <div style={{width:'40%',height:2,backgroundColor:'#0b3253',marginLeft:10}}>
        </div>
        </div>
         
        <div style={{display:'flex',flexDirection:'row',width:'100%',backgroundColor:'#fff'}}>
        <div id="trending_left_bar">
        <MiddlePostTrending/>
        <MiddlePostTrending/>
        <MiddlePostTrending/>
        <MiddlePostTrending/>
      
        </div>
        <div id="middle_large_block_section" style={{marginLeft:10,display:'flex',flexDirection:'column',alignItems:'center',justifyContents:'center'}}>
        <LargePost/>
        <MiddleLarge/>
        <MiddleLarge/>
        </div>
        <div id="right_very_boxes_section">
        <SmallerPosts/>
        <SmallerPosts/>
        <SmallerPosts/>
        <SmallerPosts/>
        <SmallerPosts/>
        <SmallerPosts/><SmallerPosts/>
        <SmallerPosts/><SmallerPosts/>
        <SmallerPosts/><SmallerPosts/>
        <SmallerPosts/>
        </div>
        </div>
            
        <div style={{display:'flex',flexDirection:'column',backgroundColor:'#000',width:'100%',
        marginTop:20}}>
        <div style={{display:'flex',flexDirection:'row',width:'100%' ,alignItems:'center',
        justifyContent:'center'}}>
        <div style={{width:'40%',height:1,backgroundColor:'#fff',marginRight:10}}>
        </div>
        <p style={{fontSize:30,fontWeight:'bold',color:'#fff'}}>AngelTv</p>
        <div style={{width:'40%',height:1,backgroundColor:'#fff',marginLeft:10}}>
        </div>
         
        </div>
        <div style={{display:'flex',flexDirection:'row',width:'100%',height:550 }}>
        <VideoDisplay/>
        <div style={{width:500,height:'100%'}}>
        <List style={{
            width:'100%',
            height:500,
            overflow:'auto',
            marginTop:20,
            marginBottom:20,
        }}>
            <ListItem>
            <SmallerPostsVideo/>
            </ListItem>
            <ListItem>
            <SmallerPostsVideo/>
            </ListItem> <ListItem>
            <SmallerPostsVideo/>
            </ListItem> <ListItem>
            <SmallerPostsVideo/>
            </ListItem> <ListItem>
            <SmallerPostsVideo/>
            </ListItem> <ListItem>
            <SmallerPostsVideo/>
            </ListItem>
        </List></div>
        </div>
        </div>

        </div>
        </div>
     
    )
}


}