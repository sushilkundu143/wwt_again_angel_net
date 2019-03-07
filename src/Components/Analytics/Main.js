import React , {Component} from 'react';

import Paper from '@material-ui/core/Paper'
export default class Analytics extends Component{

render(){
 

return(
    <div style={{
        width:'100%',
        display:'flex',
        flexDirection:'column',
        padding:20,
        overflow:'auto'

    }}>

    <Paper style={{width:'100%',backgroundColor:'#0b3253',display:'flex',flexDirection:'row' , marginLeft:10,marginRight:20,marginTop:10,marginBottom:10,padding:20,alignItems:'center',justifyContent:'center'}}>
    <p style={{

        fontSize:30,
        color:'#fff'
    }}>Your Reach Analysis</p>
    </Paper>



    <Paper style={{margin:10,padding:10}}> 
    <div>
        <p style={{marginLeft:20,marginTop:20,fontSize:32,fontWeight:'bold',color:'#0b3253',marginBottom:10}}>Your Posts:</p>
    <div style={{display:'flex',flexWrap:'wrap'}}>
    <Paper style={{minWidth:300 , margin:10,padding:10,marginRight:'5%',display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center'}}>
        <p style={{fontSize:20,color:'#0b3253'}}>This Week</p>
        <p style={{fontSize:19,color:'#99ff99'}}>13</p>
        <p style={{fontSize:20,color:'#0b3253'}}>Increased by:</p>
        <p style={{fontSize:19,color:'#99ff99'}}>10%</p>
        <p>in comparison to last week</p>
    </Paper>
    <Paper style={{minWidth:300 , margin:10,padding:10,marginRight:'5%',display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center'}}>
        <p style={{fontSize:20,color:'#0b3253'}}>This Month</p>
        <p style={{fontSize:19,color:'#99ff99'}}>40</p>
        <p style={{fontSize:20,color:'#0b3253'}}>Increased by:</p>
        <p style={{fontSize:19,color:'#ff9999'}}>-10%</p>
        <p>in comparison to last month</p>
    </Paper>
    <Paper style={{minWidth:300 , margin:10,padding:10,marginRight:'5%',display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center'}}>
        <p style={{fontSize:20,color:'#0b3253'}}>This Year</p>
        <p style={{fontSize:19,color:'#99ff99'}}>144</p>
        <p style={{fontSize:20,color:'#0b3253'}}>Increased by:</p>
        <p style={{fontSize:19,color:'#99ff99'}}>5%</p>
        <p>in comparison to last year</p>
    </Paper>
    <Paper style={{minWidth:300 , margin:10,padding:10,marginRight:'5%',display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center'}}>
        <p style={{fontSize:20,color:'#0b3253'}}>Posts are basically</p>
        <p style={{fontSize:19,color:'#99ff99'}}>engaging | attractive </p>
        <p style={{fontSize:20,color:'#0b3253'}}>Liked | Shared  by:</p>
        <p style={{fontSize:19,color:'#99ff99'}}>10% </p>
        <p>of Total Views</p>
    </Paper>
    <Paper style={{minWidth:300 , margin:10,padding:10,marginRight:'5%',display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center'}}>
        <p style={{fontSize:20,color:'#0b3253'}}>Related To</p>
        <p style={{fontSize:19,color:'#99ff99'}}>Agri | Business</p>
        <p style={{fontSize:20,color:'#0b3253'}}>Attracted</p>
        <p style={{fontSize:19,color:'#99ff99'}}>2</p>
        <p>sponsors and investors</p>
    </Paper>
    <Paper style={{minWidth:300 , margin:10,padding:10,marginRight:'5%',display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center'}}>
        <p style={{fontSize:20,color:'#0b3253'}}>Reached</p>
        <p style={{fontSize:19,color:'#99ff99'}}>200</p>
        <p style={{fontSize:15,color:'#0b3253'}}>people out there out of which</p>
        <p style={{fontSize:19,color:'#99ff99'}}>50%</p>
        <p>were your friends</p>
    </Paper>
    </div>
    </div>
    </Paper>
    


    <Paper style={{margin:10,padding:10}}> 
    <div>
        <p style={{marginLeft:20,marginTop:20,fontSize:32,fontWeight:'bold',color:'#0b3253',marginBottom:10}}>Your New Connections:</p>
    <div style={{display:'flex',flexWrap:'wrap'}}>
    <Paper style={{minWidth:300 , margin:10,padding:10,marginRight:'5%',display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center'}}>
        <p style={{fontSize:20,color:'#0b3253'}}>This Week Added</p>
        <p style={{fontSize:19,color:'#99ff99'}}>13</p>
        <p style={{fontSize:20,color:'#0b3253'}}>Increased by:</p>
        <p style={{fontSize:19,color:'#99ff99'}}>10%</p>
        <p>in comparison to last week</p>
    </Paper>
    <Paper style={{minWidth:300 , margin:10,padding:10,marginRight:'5%',display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center'}}>
        <p style={{fontSize:20,color:'#0b3253'}}>This Month Added</p>
        <p style={{fontSize:19,color:'#99ff99'}}>40</p>
        <p style={{fontSize:20,color:'#0b3253'}}>Increased by:</p>
        <p style={{fontSize:19,color:'#ff9999'}}>-10%</p>
        <p>in comparison to last month</p>
    </Paper>
    <Paper style={{minWidth:300 , margin:10,padding:10,marginRight:'5%',display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center'}}>
        <p style={{fontSize:20,color:'#0b3253'}}>This Year Added</p>
        <p style={{fontSize:19,color:'#99ff99'}}>144</p>
        <p style={{fontSize:20,color:'#0b3253'}}>Increased by:</p>
        <p style={{fontSize:19,color:'#99ff99'}}>5%</p>
        <p>in comparison to last year</p>
    </Paper>
    <Paper style={{minWidth:300 , margin:10,padding:10,marginRight:'5%',display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center'}}>
        <p style={{fontSize:20,color:'#0b3253'}}>Active Connections</p>
        <p style={{fontSize:19,color:'#99ff99'}}>130</p>
        <p style={{fontSize:20,color:'#0b3253'}}>Connections Retained</p>
        <p style={{fontSize:19,color:'#99ff99'}}>85%</p>
        <p>since last quarter</p>
    </Paper>
    <Paper style={{minWidth:300 , margin:10,padding:10,marginRight:'5%',display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center'}}>
        <p style={{fontSize:20,color:'#0b3253'}}>fund providers</p>
        <p style={{fontSize:19,color:'#99ff99'}}>30%</p>
        <p style={{fontSize:20,color:'#0b3253'}}>fund seekers</p>
        <p style={{fontSize:19,color:'#99ff99'}}>60%</p>
        <p>some are both</p>
    </Paper>
    <Paper style={{minWidth:300 , margin:10,padding:10,marginRight:'5%',display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center'}}>
        <p style={{fontSize:20,color:'#0b3253'}}>Related To</p>
        <p style={{fontSize:19,color:'#99ff99'}}>Agri | Business</p>
        <p style={{fontSize:20,color:'#0b3253'}}>Related to your fields</p>
        <p style={{fontSize:19,color:'#99ff99'}}>40%</p>
        <p>you can increase your fields of interests</p>
    </Paper>
    </div>
    </div>
    </Paper>



    <Paper style={{margin:10,padding:10}}> 
    <div>
        <p style={{marginLeft:20,marginTop:20,fontSize:32,fontWeight:'bold',color:'#0b3253',marginBottom:10}}>Your Profile Viewed By:</p>
    <div style={{display:'flex',flexWrap:'wrap'}}>
    <Paper style={{minWidth:300 , margin:10,padding:10,marginRight:'5%',display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center'}}>
        <p style={{fontSize:20,color:'#0b3253'}}>This Week</p>
        <p style={{fontSize:19,color:'#99ff99'}}>13</p>
        <p style={{fontSize:20,color:'#0b3253'}}>Increased by:</p>
        <p style={{fontSize:19,color:'#99ff99'}}>10%</p>
        <p>in comparison to last week</p>
    </Paper>
    <Paper style={{minWidth:300 , margin:10,padding:10,marginRight:'5%',display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center'}}>
        <p style={{fontSize:20,color:'#0b3253'}}>This Month</p>
        <p style={{fontSize:19,color:'#99ff99'}}>40</p>
        <p style={{fontSize:20,color:'#0b3253'}}>Increased by:</p>
        <p style={{fontSize:19,color:'#ff9999'}}>-10%</p>
        <p>in comparison to last month</p>
    </Paper>
    <Paper style={{minWidth:300 , margin:10,padding:10,marginRight:'5%',display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center'}}>
        <p style={{fontSize:20,color:'#0b3253'}}>This Year</p>
        <p style={{fontSize:19,color:'#99ff99'}}>144</p>
        <p style={{fontSize:20,color:'#0b3253'}}>Increased by:</p>
        <p style={{fontSize:19,color:'#99ff99'}}>5%</p>
        <p>in comparison to last year</p>
    </Paper>
    <Paper style={{minWidth:300 , margin:10,padding:10,marginRight:'5%',display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center'}}>
        <p style={{fontSize:20,color:'#0b3253'}}>Your Connections</p>
        <p style={{fontSize:19,color:'#99ff99'}}>40%</p>
        <p style={{fontSize:20,color:'#0b3253'}}>Not Your Connections</p>
        <p style={{fontSize:19,color:'#99ff99'}}>60%</p>
        <p>great some new people view your profile</p>
    </Paper>
    <Paper style={{minWidth:300 , margin:10,padding:10,marginRight:'5%',display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center'}}>
        <p style={{fontSize:20,color:'#0b3253'}}>Visitor Related To:</p>
        <p style={{fontSize:19,color:'#99ff99'}}>Trade | Logistics</p>
        <p style={{fontSize:20,color:'#0b3253'}}>Investor | sponsors</p>
        <p style={{fontSize:19,color:'#99ff99'}}>50%</p>
        <p>It can take you to new heights</p>
    </Paper>
    <Paper style={{minWidth:300 , margin:10,padding:10,marginRight:'5%',display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center'}}>
        <p style={{fontSize:20,color:'#0b3253'}}>Visitors Liked</p>
        <p style={{fontSize:19,color:'#99ff99'}}>50%</p>
        <p style={{fontSize:15,color:'#0b3253'}}>Your Posts</p>
        <p style={{fontSize:19,color:'#ff9999'}}>10%</p>
        <p>Reported your posts or profile</p>
    </Paper>
    </div>
    </div>
    </Paper>
     
    <Paper style={{width:'100%',backgroundColor:'#0b3253',display:'flex',flexDirection:'row' , marginLeft:10,marginRight:20,marginTop:10,marginBottom:10,padding:15,alignItems:'center',justifyContent:'center'}}>
    <p style={{
        fontSize:20,
        color:'#fff'
    }}>Review By Our AngelNet Experts</p>
    </Paper>
    <Paper style={{padding:20, margin:20}}>
        <p style={{fontSize:19,}}>You are doing well in making more new connections and your posts are also very attractive and engaging</p>
        <p style={{fontSize:19}}>In order to increase more connections or to get investors or funds </p>
        <hr/>
       <p style={{fontSize:17}}>What you should do:</p>
        <p>1. your posts lacks detailing in your idea , you have to provide more details</p>
        <p>2. Only investors related to agricultural market are viewing your profile , you should have to make all round connections in industry</p>
        <hr/>
       <p style={{fontSize:17}}>What you should not do:</p>
        <p>1. You are sending connect requests to many unkown people.</p>
        <p>2. Your are not completing your profile which causes ambiguity to other people who are viewing your profile.</p>

    </Paper>


       </div> 
)


}

}