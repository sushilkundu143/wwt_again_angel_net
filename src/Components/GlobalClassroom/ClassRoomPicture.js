import React , {Component} from 'react'

export default class ClassPicture extends Component{
styles={
    container:{
        position: 'relative',
        textAlign: 'center',
        color: 'white',
      }
      ,
      /* Bottom left text */
       bottomLeft: {
        position: 'absolute',
        bottom: '60px',
        left: '61px',
      }
      ,
      /* Top left text */
       topLeft: {
        position: 'absolute',
        top: '8px',
        left: '16px'
      },
      
      /* Top right text */
       topRight :{
        position:' absolute',
        top: '8px',
        right: '16px'
      }
      ,
      /* Bottom right text */
       bottomRight: {
        position: 'absolute',
        bottom: '60px',
        right:' 61px'
      },
      
      /* Centered text */
       centered: {
        position: 'absolute',
        top:'20%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
      },
      centered2: {
        position: 'absolute',
        top:'50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
      }
}

render(){
    return(
        <div style={{
        width:'100%',
        height:400,
        position: 'relative',
        textAlign: 'center',
        color: 'white',
        }}
        
        >
        <img src='images/learn_to_code.jpg' alt='class image backdrop' style={{width:'100%',height:400}}/>
        <div style={this.styles.centered}><p
        style={{
            color:'#fff',
            fontSize:30,
            fontWeight:'bold',
        }}
        >Enroll in One of The Best Course in Programming</p></div>
         <div style={this.styles.centered2}><p
        style={{
            color:'#fff',
            fontSize:25,
            fontWeight:'bold',
        }}
        >Taught by the Best Professionals</p></div>
       
          <div style={this.styles.bottomRight}><p
          style={{
              color:'#fff',
              fontSize:25,
              fontWeight:'bold',
          }}
          >Richard Garrison</p></div>
          <div style={this.styles.bottomLeft}><p
          style={{
              color:'#fff',
              fontSize:25,
              fontWeight:'bold',
          }}
          >John Doe</p></div>
          </div>
 
    

    )
}




}