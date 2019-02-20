import React , {Component} from 'react'
import Paper from '@material-ui/core/Paper'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import FacultyCard from './FacultyCard'
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
export default class Faculties extends Component{
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
                }}>Faculties:</p>
            </ExpansionPanelSummary>
            
 <div style={{
     display:'flex'
 }}>
 <FacultyCard FacultyName='John Doe'  Image={"images/teacher.jpg"}  FacultyExperience='5 yrs'/>
 <FacultyCard FacultyName='Garry Morission'   Image={"images/teacher.jpg"} FacultyExperience='2 yrs'/>

     </div>




</ExpansionPanel>


            </div>
        )
    }
}