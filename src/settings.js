import React , {Component} from 'react'
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
export default class Settings extends Component{

    render(){
        return(
            <div style={{
                display:'flex',
                flexDirection:'column',
                width:'100%',
                marginLeft:20,
                marginRight:20,
                alignItems:'center'
            }}>
          
        <Paper style={{width:800, backgroundColor:'#0b3253' ,height:50,display:'flex',flexDirection:'column' ,marginTop:20,padding:10,alignItems:'center',justifyContent:'center'}}>
        <p style={{color:'#fff', fontSize:30,fontWeight:'bold'}}>Account Settings</p>
        </Paper>   

        <Paper style={{width:800,marginTop:20, padding:20,display:'flex',flexDirection:'column',backgroundColor:'#fff',height:500,overflow:'auto', marginBottom:20}}>
       
       <div style={{width:'100%',display:'flex', flexDirection:'row',position:'relative'}}>
            <p style={{fontSize:30,fontWeight:'bold',color:'#0b3253'}}>Login and Security:</p>
         
      </div>
        <div style={{display:'flex',flexDirection:'column'    ,marginTop:10,  }}>
        <hr style={{border:'1px solid #0b3253'}}/>
         <div style={{display:'flex', flexDirection:'column', padding:10,position:'relative'}}>
         <p style={{fontSize:15,fontWeight:'bold'}}>Add or Remove Email addresses of your account</p>
         <p style={{fontSize:13,color:'#333'}}>dhankhar7924@gmail.com</p>
         <p style={{fontSize:13,color:'#333'}}>abc@gmail.com</p>
        <Button color="primary"   style={{position:'absolute', bottom:50, left:690,  height:30,}}>
        update 
      </Button>
         </div>

         <hr style={{border:'1px solid #0b3253'}}/>
          
         <div style={{display:'flex', flexDirection:'column', padding:10}}>
         <p style={{fontSize:15,fontWeight:'bold'}}>Change Password</p>
         <p style={{fontSize:13,color:'#333'}}>Choose a unique Password to protect your account</p>
        
         <Button color="primary"   style={{psition:'absolute', bottom:50, left:690, width:50, height:30,}}>
        UPDATE
      </Button>
         </div>
         <hr style={{border:'1px solid #0b3253'}}/>
         <div style={{display:'flex', flexDirection:'column', padding:10}}>
          <p style={{fontSize:15,fontWeight:'bold'}}>Add or Update mobile numbers</p>
          <p style={{fontSize:13,color:'#333'}}>+919393939</p>
          <p style={{fontSize:13,color:'#333'}}>+913423424</p>
          <Button color="primary"   style={{psition:'absolute', bottom:50, left:690, width:50, height:30,}}>
        update
      </Button>
          </div>

        </div>
        </Paper>


        <Paper style={{width:800,marginTop:20, padding:20,display:'flex',flexDirection:'column',backgroundColor:'#fff',height:500,overflow:'auto', marginBottom:20}}>
       
       <div style={{width:'100%',display:'flex', flexDirection:'row',position:'relative'}}>
            <p style={{fontSize:30,fontWeight:'bold',color:'#0b3253'}}>Add Social Media Accounts:</p>
         
      </div>
        <div style={{display:'flex',flexDirection:'column'    ,marginTop:10,  }}>
        <hr style={{border:'1px solid #0b3253'}}/>
         <div style={{display:'flex', flexDirection:'column', padding:10,position:'relative'}}>
         <p style={{fontSize:15,fontWeight:'bold'}}>Add or Remove Facebook Account</p>
         <p style={{fontSize:13,color:'#333'}}>https://www.facebook.com/rammehar.randa.7</p>
         <Button color="primary"   style={{psition:'absolute', bottom:50, left:690, width:50, height:30,}}>
        UPDATE
      </Button>
         </div>

         <hr style={{border:'1px solid #0b3253'}}/>
          
         <div style={{display:'flex', flexDirection:'column', padding:10}}>
         <p style={{fontSize:15,fontWeight:'bold'}}>Add or Update linkedin account</p>
         <p style={{fontSize:13,color:'#333'}}>https://www.linkedin.com/in/himanshu-dhankhar-7a037911b/</p>
        
         <Button color="primary"   style={{psition:'absolute', bottom:50, left:690, width:50, height:30,}}>
        UPDATE
      </Button>
         </div>
         <hr style={{border:'1px solid #0b3253'}}/>
          
        
          <div style={{display:'flex', flexDirection:'column', padding:10}}>
          <p style={{fontSize:15,fontWeight:'bold'}}>Add or Update Twitter Account</p>
          <p style={{fontSize:13,color:'#333'}}>https://www.twitter.com/</p>
          
          <Button color="primary"   style={{psition:'absolute', bottom:50, left:690, width:50, height:30,}}>
        update
      </Button>
          </div>
          <hr style={{border:'1px solid #0b3253'}}/>
          
        
          <div style={{display:'flex', flexDirection:'column', padding:10}}>
          <p style={{fontSize:15,fontWeight:'bold'}}>Add or Update Instagram Account</p>
          <p style={{fontSize:13,color:'#333'}}>https://www.Instagram.com/</p>
          
          <Button color="primary"   style={{psition:'absolute', bottom:50, left:690, width:50, height:30,}}>
        update
      </Button>
          </div>

        </div>
        <hr style={{border:'1px solid #0b3253'}}/>
          
        
          <div style={{display:'flex', flexDirection:'column', padding:10}}>
          <p style={{fontSize:15,fontWeight:'bold'}}>Add or Update Personel Website Account</p>
          <p style={{fontSize:13,color:'#333'}}>https://www.Blog.com/</p>
          <p style={{fontSize:13,color:'#333'}}>https://www.Medium.com/</p>
          
          <Button color="primary"   style={{psition:'absolute', bottom:50, left:690, width:50, height:30,}}>
        update
      </Button>
          </div>
        </Paper>

        
        <Paper style={{width:800,marginTop:20, padding:20,display:'flex',flexDirection:'column',backgroundColor:'#fff',height:500,overflow:'auto', marginBottom:20}}>
       
       <div style={{width:'100%',display:'flex', flexDirection:'row',position:'relative'}}>
            <p style={{fontSize:30,fontWeight:'bold',color:'#0b3253'}}>AngelNet Partners and Services:</p>
         
      </div>
        <div style={{display:'flex',flexDirection:'column'    ,marginTop:10,  }}>
        <hr style={{border:'1px solid #0b3253'}}/>
         <div style={{display:'flex', flexDirection:'column', padding:10,position:'relative'}}>
         <p style={{fontSize:15,fontWeight:'bold'}}>Microsoft</p>
         <p style={{fontSize:13,color:'#333'}}>View Microsoft accounts you have added or removed</p>
         <Button color="primary"   style={{psition:'absolute', bottom:50, left:690, width:50, height:30,}}>
        UPDATE
      </Button>
         </div>

         <hr style={{border:'1px solid #0b3253'}}/>
          
         <div style={{display:'flex', flexDirection:'column', padding:10}}>
         <p style={{fontSize:15,fontWeight:'bold'}}>Permitted Services</p>
         <p style={{fontSize:13,color:'#333'}}>View or Add more Services at AngelNet</p>
        
         <Button color="primary"   style={{psition:'absolute', bottom:50, left:690, width:50, height:30,}}>
        UPDATE
      </Button>
         </div>
         <hr style={{border:'1px solid #0b3253'}}/>
          
        
          <div style={{display:'flex', flexDirection:'column', padding:10}}>
          <p style={{fontSize:15,fontWeight:'bold'}}>Manage Blocked Connections</p>
          <p style={{fontSize:13,color:'#333'}}>View Blocked Connections</p>
          
          <Button color="primary"   style={{psition:'absolute', bottom:50, left:690, width:50, height:30,}}>
        update
      </Button>
          </div>
          <hr style={{border:'1px solid #0b3253'}}/>
          
        
          <div style={{display:'flex', flexDirection:'column', padding:10}}>
          <p style={{fontSize:15,fontWeight:'bold'}}>View Your History at AngelNet</p>
          <p style={{fontSize:13,color:'#333'}}>Manage or hide posts on angelnet</p>
          
          <Button color="primary"   style={{psition:'absolute', bottom:50, left:690, width:50, height:30,}}>
        update
      </Button>
          </div>

        </div>
        
        </Paper>

            </div>
        )
    }
}