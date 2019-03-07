import React, {Component} from 'react'

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
  
export default class CardCofounderReq extends Component{
    
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
        <div style={{
            minWith:500,height:300,padding:10,  margin:10, maxWidth:600,         border:'1px solid #000',borderRadius:10,
        }}
        onClick={this.handleClickOpen}
        >
        <div style={{
            width:'100%',height:'100%',backgroundColor:'#e7e7e7',borderRadius:5,
            display:'flex',flexDirection:'column'
        }}>
        <div style={{display:'flex',flexDirection:'row'}}>
        <img src="images/founder.jpg" style={{width:150,height:150 , marginLeft:20,marginTop:20,border:'1px solid #000'}} />
        <div style={{display:'flex',flexDirection:'column',marginTop:20,marginLeft:20}}>
        <p style={{fontSize:25,color:'#5661a6',fontWeight:'bold'}}>Daniel Joseph</p>
        <p style={{fontSize:13,fontWeight:'bold'}}>I have an idea for startup</p>
        <p style={{fontSize:19,}}>London UK</p>
        <div style={{display:'flex',flexdirection:'row' }}>
        <div style={{display:'flex',flexDirection:'column',marginRight:20}}>
        <p style={{fontWeight:'bold'}}>I'm a:</p>
        <p style={{fontWeight:'bold'}}>I'm Looking for:</p>
        <p style={{fontWeight:'bold'}}>Industry:</p> 
        </div>
        <div style={{display:'flex',flexDirection:'column',marginRight:20}}>
        <p>Product/Sales</p>
        <p>Business Dev/Marketing Wizard</p>
        <p>Internet - Business</p> 
        </div>
        </div>
        
        </div>
        </div>
        <div style={{width:'100%',display:'flex',flexDirection:'column',marginLeft:20,marginRight:20}}>
        <p style={{fontWeight:'bold',}}>
        Description:
        </p>
        <p style={{marginRight:20}}>
        The idea is about exporting Farm produce and Food items produced in Nigeria into United States and other countries that have available markets.   
        </p>
        </div>

        </div>
        </div>
         <Dialog
         onClose={this.handleClose}
         aria-labelledby="customized-dialog-title"
         open={this.state.open}
       >
         <DialogTitle id="customized-dialog-title" onClose={this.handleClose}>
           Apply as a Co-founder 
         </DialogTitle>
         <DialogContent>
           {/*<Typography gutterBottom>
             Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac
             facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum
             at eros.
           </Typography>
           <Typography gutterBottom>
             Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis
             lacus vel augue laoreet rutrum faucibus dolor auctor.
           </Typography>
           <Typography gutterBottom>
             Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel
             scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus
             auctor fringilla.
           </Typography>*/}

          <p style={{fontWeight:'bold'}}><u>Description</u></p>
          <p>Daniel Joseph is the CEO of Food Chopping Mall, an online food hub providing varieties of food stuffs, delicious Nigerian pot of soups, exotic fruits and vegetables, poultry and livestock and other food items delivered to your door step. He is also a success motivational music artist branding as Driggs Jay. He conveys messages on success, faith, hope, greatness, prosperity etc. He is the Founder of Big Dream Music, an international music company known to produce only positive music.</p>
         
         <p style={{fontWeight:'bold'}}><u>What I'm looking for</u></p>
         <p>
         The idea is about exporting Farm produce and Food items produced in Nigeria into United States and other countries that have available markets. Also, I'm looking forward to establishing a Music Company in the United States. The Music company will be known to produce Success Motivational and positive Music. Hence, I'm on a look out for passionate individuals to work with as Co-founders. Any serious minded person who is interested can send me a message. Thank you very much
         </p>
         <p style={{fontWeight:'bold'}}><u>My idea's stage</u></p>
         <p>Developing Prototype</p>
         </DialogContent>
         <DialogActions>
           <Button onClick={this.handleClose} color="primary">
            Apply 
           </Button>
         </DialogActions>
       </Dialog>
</div>
        
        
        
    )
}


}