import React , {Component} from 'react';
import Button from '@material-ui/core/Button'
import Paper from '@material-ui/core/Paper'
export default class Profile extends Component{

render(){

return(
    <div style={{width:'100%', display:'flex', flexDirection:'column',alignItems:'center',}}>
        <Paper style={ { position:'relative', display:'flex', flexDirection:'column'}}>
            <img src= "images/partnership2.jpg" style={{width:800,height:200}}/>
            <img src="images/founder.jpg"  style={{width:160,height:160,borderRadius:80,border:'5px solid #0b3253',position:'absolute',top:'40%',left:'40%'}}/>
            <div style={{minWidth:800 ,height:90,backgroundColor:'#fff', display:'flex',flexDirection:'column',paddingTop:100,paddingLeft:20}}>
               
                </div>
                <Button color="primary"   style={{psition:'absolute', bottom:75, left:715, width:50, height:30,}}>
        Edit
      </Button>
        </Paper>

        <Paper style={{width:800,marginTop:20, padding:20,display:'flex',flexDirection:'column',backgroundColor:'#fff'}}>
        <p style={{fontSize:30,fontWeight:'bold',color:'#0b3253'}}>Intro:</p>
        <div style={{display:'flex',flexDirection:'column', height:130,flexWrap:'wrap',marginTop:10}}>
        <p style={{fontSize:25,marginLeft:50,marginTop:10}}>Alan Johns</p>
        <p style={{fontSize:10,marginLeft:50}}>Employee at ABC consulting group</p>
        <p  style={{fontSize:10,marginLeft:50}}>Age 29</p>
        <p  style={{fontSize:10,marginLeft:50}}>Lives in UK</p>
        <p  style={{fontSize:10,marginLeft:50}}>From Germany</p>
        <p  style={{fontSize:10,marginLeft:50}}> Contacts:</p>
        <p  style={{fontSize:10,marginLeft:50}}>alanjons@gmail.com</p>
        <p  style={{fontSize:10,marginLeft:50}}>+91993239393</p>
        </div>
        <Button color="primary"   style={{psition:'absolute', bottom:170, left:715, width:50, height:30,}}>
        Edit
      </Button>
        </Paper>
        <Paper style={{width:800,marginTop:20, padding:20,display:'flex',flexDirection:'column',backgroundColor:'#fff' ,overflow:'auto', marginBottom:20}}>
       
       <div style={{width:'100%',display:'flex', flexDirection:'row',position:'relative'}}>
            <p style={{fontSize:30,fontWeight:'bold',color:'#0b3253'}}>Education:</p>
        <Button color="primary"   style={{ marginLeft:570, width:50, height:30,}}>
        ADD
      </Button>
      </div>
        <div style={{display:'flex',flexDirection:'column'    ,marginTop:10,  }}>
        <hr style={{border:'1px solid #0b3253'}}/>
         <div style={{display:'flex', flexDirection:'column', padding:10,position:'relative'}}>
         <p style={{fontSize:19,fontWeight:'bold'}}>Govt. ITI College,London</p>
         <p style={{fontSize:13,color:'#333'}}>Diploma in welding</p>
         <p style={{fontSize:13,color:'#333'}}>From 2014-16</p>
         <Button color="primary"   style={{psition:'absolute', bottom:50, left:700, width:50, height:30,}}>
        Edit
      </Button>
         </div>

         <hr style={{border:'1px solid #0b3253'}}/>
          
         <div style={{display:'flex', flexDirection:'column', padding:10}}>
         <p style={{fontSize:19,fontWeight:'bold'}}>Govt. School Brighgimgam</p>
         <p style={{fontSize:13,color:'#333'}}>Senior Secondary</p>
         <p style={{fontSize:13,color:'#333'}}>From 2012-14</p>
         <Button color="primary"   style={{psition:'absolute', bottom:50, left:700, width:50, height:30,}}>
        Edit
      </Button>
         </div>
         <hr style={{border:'1px solid #0b3253'}}/>
          
          <div style={{display:'flex', flexDirection:'column', padding:10}}>
          <p style={{fontSize:19,fontWeight:'bold'}}>Govt. School Munich</p>
          <p style={{fontSize:13,color:'#333'}}>Higher Secondary</p>
          <p style={{fontSize:13,color:'#333'}}>From 2010-12</p>
          <Button color="primary"   style={{psition:'absolute', bottom:50, left:700, width:50, height:30,}}>
        Edit
      </Button>
          </div>

        </div>
        </Paper>


    
        <Paper style={{width:800,marginTop:20, padding:20,display:'flex',flexDirection:'column',backgroundColor:'#fff',overflow:'auto', marginBottom:20}}>
       
       <div style={{width:'100%',display:'flex', flexDirection:'row',position:'relative'}}>
            <p style={{fontSize:30,fontWeight:'bold',color:'#0b3253'}}>Experience:</p>
        <Button color="primary"   style={{ marginLeft:560, width:50, height:30,}}>
        ADD
      </Button>
      </div>
        <div style={{display:'flex',flexDirection:'column'    ,marginTop:10,  }}>
        <hr style={{border:'1px solid #0b3253'}}/>
         <div style={{display:'flex', flexDirection:'column', padding:10,position:'relative'}}>
         <p style={{fontSize:19,fontWeight:'bold'}}>Senior Technician BMW</p>
         <p style={{fontSize:13,color:'#333'}}>Manging production line</p>
         <p style={{fontSize:13,color:'#333'}}>From 2018-present</p>
         <Button color="primary"   style={{psition:'absolute', bottom:50, left:700, width:50, height:30,}}>
        Edit
      </Button>
         </div>

         <hr style={{border:'1px solid #0b3253'}}/>
          
         <div style={{display:'flex', flexDirection:'column', padding:10}}>
         <p style={{fontSize:19,fontWeight:'bold'}}>Junior technician BMW</p>
         <p style={{fontSize:13,color:'#333'}}>Worked on production line</p>
         <p style={{fontSize:13,color:'#333'}}>From 2014-18</p>
         <Button color="primary"   style={{psition:'absolute', bottom:50, left:700, width:50, height:30,}}>
        Edit
      </Button>
         </div>
         <hr style={{border:'1px solid #0b3253'}}/>
          
          <div style={{display:'flex', flexDirection:'column', padding:10}}>
          <p style={{fontSize:19,fontWeight:'bold'}}>Intern at Audi</p>
          <p style={{fontSize:13,color:'#333'}}>Designed front gate</p>
          <p style={{fontSize:13,color:'#333'}}>From july 2012 - jun 2012</p>
          <Button color="primary"   style={{psition:'absolute', bottom:50, left:700, width:50, height:30,}}>
        Edit
      </Button>
          </div>

        </div>
        </Paper>
        <Paper style={{width:800,marginTop:20, padding:20,display:'flex',flexDirection:'column',backgroundColor:'#fff',overflow:'auto', marginBottom:20}}>
       
       <div style={{width:'100%',display:'flex', flexDirection:'row',position:'relative'}}>
            <p style={{fontSize:30,fontWeight:'bold',color:'#0b3253'}}>Interests:</p>
        <Button color="primary"   style={{ marginLeft:570, width:50, height:30,}}>
        ADD
      </Button>
      </div>
        <div style={{display:'flex',flexDirection:'column'    ,marginTop:10,  }}>
        <hr style={{border:'1px solid #0b3253'}}/>
         <div style={{display:'flex', flexDirection:'column', padding:10,position:'relative'}}>
         <p style={{fontSize:19,fontWeight:'bold'}}>Entreprenurship</p>
         <p style={{fontSize:13,color:'#333'}}>Managed to survive 3 ventures in india</p>
         <p style={{fontSize:13,color:'#333'}}>From 2018-present</p>
         <p style={{fontSize:13,color:'#333'}}>AgriFunder | corpora-ventures | RealityTek</p>
         <Button color="primary"   style={{psition:'absolute', bottom:50, left:700, width:50, height:30,}}>
        Edit
      </Button>
         </div>

         <hr style={{border:'1px solid #0b3253'}}/>
          
         <div style={{display:'flex', flexDirection:'column', padding:10}}>
         <p style={{fontSize:19,fontWeight:'bold'}}>Agriculture Business</p>
         <p style={{fontSize:13,color:'#333'}}>Interested in investing in agriculture business</p>
         <p style={{fontSize:13,color:'#333'}}>From 2014-18</p>
         <Button color="primary"   style={{psition:'absolute', bottom:50, left:700, width:50, height:30,}}>
        Edit
      </Button>
         </div>
         <hr style={{border:'1px solid #0b3253'}}/>
          
          <div style={{display:'flex', flexDirection:'column', padding:10}}>
          <p style={{fontSize:19,fontWeight:'bold'}}>Logistics Supply and Chain Management</p>
          <p style={{fontSize:13,color:'#333'}}>Worked in this industry for a very long time</p>
          <p style={{fontSize:13,color:'#333'}}>Mastered in concepts of this</p>
          <Button color="primary"   style={{psition:'absolute', bottom:50, left:700, width:50, height:30,}}>
        Edit
      </Button>
          </div>
          <hr style={{border:'1px solid #0b3253'}}/>
          
          <div style={{display:'flex', flexDirection:'column', padding:10}}>
          <p style={{fontSize:19,fontWeight:'bold'}}>Swimming</p>
          <p style={{fontSize:13,color:'#333'}}>National Level Swimmer</p>
          <p style={{fontSize:13,color:'#333'}}>Butterfly and Backstroke</p>
          <Button color="primary"   style={{psition:'absolute', bottom:50, left:700, width:50, height:30,}}>
        Edit
      </Button>
          </div>

        </div>
        </Paper>

    </div>
)

}

}