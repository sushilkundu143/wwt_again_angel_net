import React , {Component} from 'react'
import Paper from '@material-ui/core/Paper'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'

import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
export default class RequirementsForCourse extends Component{
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
                }}>Requirements For this Course:</p>
            </ExpansionPanelSummary>
            
<List style={{
    marginLeft:40,
    marginTop:10
}}> 
  <p style={{fontSize:19}}>No pre-knowledge about compter programming is required.</p>  
    <p style={{fontSize:19}}>One personel computing machine is required for this.</p>  
    <p style={{fontSize:19}}>Minimum 7-8 hrs per week.</p>  
    <p style={{fontSize:19}}>5 months course.</p>  
</List>




</ExpansionPanel>


            </div>
        )
    }
}