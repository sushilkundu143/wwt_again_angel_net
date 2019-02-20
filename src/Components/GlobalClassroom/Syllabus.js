import React ,{Component } from 'react'
import Paper from '@material-ui/core/Paper'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
export default class StudentsEnrolled  extends Component{

render(){
    return(
        <div style={{
            width:'100%',
            marginTop:20,
            
        }}>
         
        <ExpansionPanel>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <p style={{
                fontSize:30,
                fontWeight:'bold',
                color:'#0b3253',
                marginLeft:20,
            }}>Syllabus:</p>
</ExpansionPanelSummary>
           <List style={{
               width:'100%',
           }}>
               <ListItem style={{
                   width:'100%'
               }}>
                    <div style={{
                        width:'100%'
                    }}>
                    <p style={{
                        fontSize:20,
                        
                        fontWeight:'bold',
                        marginLeft:10

                    }}>Lecture 1:</p>
                    <p style={{
                        marginLeft:20
                    }}>1.1 Introduction to Computing</p>
                    <p style={{
                        marginLeft:20
                    }}>1.2 Hello World!</p>
                    <p style={{
                        marginLeft:20
                    }}>1.3 Airthematic Problems using programming</p>
                    <p style={{
                        marginLeft:20
                    }}>1.4 Introduction to logic</p>
                    <p style={{
                        marginLeft:20
                    }}>1.5 Solving Problems using Logic</p>
                    </div>
                   </ListItem>
                   <ListItem style={{
                   width:'100%'
               }}>
                    <div style={{
                        width:'100%'
                    }}>
                    <p style={{
                        fontSize:20,
                        
                        fontWeight:'bold',
                        marginLeft:10

                    }}>Lecture 2:</p>
                    <p style={{
                        marginLeft:20
                    }}>1.1 Introduction to Computing</p>
                    <p style={{
                        marginLeft:20
                    }}>1.2 Hello World!</p>
                    <p style={{
                        marginLeft:20
                    }}>1.3 Airthematic Problems using programming</p>
                    <p style={{
                        marginLeft:20
                    }}>1.4 Introduction to logic</p>
                    <p style={{
                        marginLeft:20
                    }}>1.5 Solving Problems using Logic</p>
                    </div>
                   </ListItem>
                   <ListItem style={{
                   width:'100%'
               }}>
                    <div style={{
                        width:'100%'
                    }}>
                    <p style={{
                        fontSize:20,
                        
                        fontWeight:'bold',
                        marginLeft:10

                    }}>Lecture 3:</p>
                    <p style={{
                        marginLeft:20
                    }}>1.1 Introduction to Computing</p>
                    <p style={{
                        marginLeft:20
                    }}>1.2 Hello World!</p>
                    <p style={{
                        marginLeft:20
                    }}>1.3 Airthematic Problems using programming</p>
                    <p style={{
                        marginLeft:20
                    }}>1.4 Introduction to logic</p>
                    <p style={{
                        marginLeft:20
                    }}>1.5 Solving Problems using Logic</p>
                    </div>
                   </ListItem>
                   <ListItem style={{
                   width:'100%'
               }}>
                    <div style={{
                        width:'100%'
                    }}>
                    <p style={{
                        fontSize:20,
                        
                        fontWeight:'bold',
                        marginLeft:10

                    }}>Lecture 4:</p>
                    <p style={{
                        marginLeft:20
                    }}>1.1 Introduction to Computing</p>
                    <p style={{
                        marginLeft:20
                    }}>1.2 Hello World!</p>
                    <p style={{
                        marginLeft:20
                    }}>1.3 Airthematic Problems using programming</p>
                    <p style={{
                        marginLeft:20
                    }}>1.4 Introduction to logic</p>
                    <p style={{
                        marginLeft:20
                    }}>1.5 Solving Problems using Logic</p>
                    </div>
                   </ListItem>
                   <ListItem style={{
                   width:'100%'
               }}>
                    <div style={{
                        width:'100%'
                    }}>
                    <p style={{
                        fontSize:20,
                        
                        fontWeight:'bold',
                        marginLeft:10

                    }}>Lecture 5:</p>
                    <p style={{
                        marginLeft:20
                    }}>1.1 Introduction to Computing</p>
                    <p style={{
                        marginLeft:20
                    }}>1.2 Hello World!</p>
                    <p style={{
                        marginLeft:20
                    }}>1.3 Airthematic Problems using programming</p>
                    <p style={{
                        marginLeft:20
                    }}>1.4 Introduction to logic</p>
                    <p style={{
                        marginLeft:20
                    }}>1.5 Solving Problems using Logic</p>
                    </div>
                   </ListItem>
                   <ListItem style={{
                   width:'100%'
               }}>
                    <div style={{
                        width:'100%'
                    }}>
                    <p style={{
                        fontSize:20,
                        
                        fontWeight:'bold',
                        marginLeft:10

                    }}>Lecture 6:</p>
                    <p style={{
                        marginLeft:20
                    }}>1.1 Introduction to Computing</p>
                    <p style={{
                        marginLeft:20
                    }}>1.2 Hello World!</p>
                    <p style={{
                        marginLeft:20
                    }}>1.3 Airthematic Problems using programming</p>
                    <p style={{
                        marginLeft:20
                    }}>1.4 Introduction to logic</p>
                    <p style={{
                        marginLeft:20
                    }}>1.5 Solving Problems using Logic</p>
                    </div>
                   </ListItem>
               </List> 
               </ExpansionPanel>

        
            
            </div>
    )
}


}