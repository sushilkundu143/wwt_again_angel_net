import React , {Component} from 'react'
import Paper from '@material-ui/core/Card';

import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';

const DialogTitle = withStyles(theme => ({
  root: {
    borderBottom: `1px solid ${theme.palette.divider}`,
    margin: 0,
    padding: theme.spacing.unit * 2,
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing.unit,
    top: theme.spacing.unit,
    color: theme.palette.grey[500],
  },
}))(props => {
  const { children, classes, onClose } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton aria-label="Close" className={classes.closeButton} onClick={onClose}>
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles(theme => ({
  root: {
    margin: 0,
    padding: theme.spacing.unit * 2,
  },
}))(MuiDialogContent);

const DialogActions = withStyles(theme => ({
  root: {
    borderTop: `1px solid ${theme.palette.divider}`,
    margin: 0,
    padding: theme.spacing.unit,
  },
}))(MuiDialogActions);

export default class EventCard extends Component{
    state = {
        open: false,
      };
    
      handleClickOpen = () => {
        this.setState({
          open: true,
        });
      };
    
      handleClose = () => {
        this.setState({ open: false });
      };
render(){
    return(
        <div>
        <Paper onClick={this.handleClickOpen}>
            <a href='#'>
       <div style={{width:300 ,
       
       
       display:'flex',flexDirection:'column',position:'relative'}}>
        <img src="images/Grid2.webp" style={{width:'100%',}}/>
        <div style={{position:'absolute',left:10,top:50,width:60,height:60,backgroundColor:'#fff',border:'1px solid #000'}}>
       <img src='images/GRiD_Logo.png' style={{width:60,height:60}}/>
        </div>
        <p style={{position:'absolute', left:80, top:68,color:'#fff'}}>Flipkart</p>
        <div style={{borderBottom:'1px dashed #e7e7e7' ,display:'flex',flexDirection:'column',
        alignItems:'center',width:300,paddingTop:30,paddingLeft:10,paddingRight:10,paddingBottom:10,}}>
            <p style={{fontSize:18,fontWeight: 'bold',}}>Flipkart Grid Challenge</p>
            <p style={{fontSize:18,marginTop:10}}>Data is the new fuel of future</p>
        </div>
        <div style={{display:'flex',flexDirection:'row',
        alignItems:'center',justifyContent:'center',
        padding:10,width:'100%',borderBottom:'1px dashed #e7e7e7'}}>
                <div style={{padding:10,borderRight:'1px dashed #e7e7e7',display:'flex',flexDirection:'column'}}>
                    <p  style={{fontWeight:'bold',color:'#aaa',marginBottom:5,}}>Registered:</p>
                    <p style={{fontSize:18,fontWeight:'bold'}}>6733</p>
                    </div>

                    <div style={{padding:10,display:'flex',
                    flexDirection:'column' , padding:10,marginBottom:5,}}>
                        <p style={{border:'1px dashed #f00',marginBottom:5,borderRadius:5,color:'#f00'}}>#Engineering</p>
                        <p style={{border:'1px dashed #f00', marginBottom:5,borderRadius:5,color:'#f00'}}>#Hackathon</p>


                    </div>


        </div>

        <div style={{borderBottom:'5px solid #0b3253',padding:10, display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',}}>
                <p style={{color:'#f00'}}>Register</p>
        </div>


       </div>
       </a>
       </Paper>
        <Dialog
        onClose={this.handleClose}
        aria-labelledby="customized-dialog-title"
        open={this.state.open}
      >
        <DialogTitle id="customized-dialog-title" onClose={this.handleClose}>
          Flipkart Grid Challenge
          <p>19 Jan'19, 12:00 AM IST - 8 Mar'19, 6:05 PM IST</p>
          <p>Flipkart ETV Campus, Bangalore</p>
        </DialogTitle>
        <DialogContent>
          <Typography gutterBottom>
          Data is the new oil, and in the space of e-commerce in India,
           it is most relevant. For over a decade Flipkart has been at the forefront of game-changing disruptions in the space of online retail and Supply Chain, and now it is your
           turn to make the most of it by gaining access to our data.
          </Typography>
          <Typography gutterBottom>
          GRiD is Flipkart’s annual campus engagement program,
           where we provide you the opportunity to apply your technical knowledge and
            skills, to ethically compete and complete key challenges. ‘Flipkart GRID’
             engineering campus challenge is designed to bring out the Data Scientist
              in you, where we put your Machine Learning and AI
           capabilities to the ultimate test. So are you ready to enter the GRiD?
          </Typography>
          <Typography gutterBottom>
          This years challenge will be on Object Localization in images,
           Read ahead to learn more about the 2019 Flipkart Engineering Campus challenge.
          </Typography>
          <Typography gutterBottom>
          ELIGIBILITY & TEAM RULES
<li>
    <ul>
This competition is open to students pursuing B.Tech/B.E./M.Tech programs across select engineering colleges in India.
</ul><ul>
Students must register in team of either 2 or 3.
</ul><ul>
The participating students can be from any specialization.
</ul><ul>
They should be full-time students from the same engineering college.
</ul><ul>
One person cannot be a member of more than one team
</ul><ul>
Any deviation from the above will result in immediate disqualification of the entire team
</ul>
</li>
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={this.handleClose} color="primary">
            Register
          </Button>
        </DialogActions>
      </Dialog>
      </div>
    )
}



}