import React, { Component } from "react";
import Avatar from "@material-ui/core/Avatar";
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

export default class SingleJob extends Component {
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
  render() {
    return (
      <div style={{display:'flex',flexDirection:'column', width:450,margin:5,  border: "1px solid #e7e7e7",
      height:130, }}>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
         
          width:450,
          height:100,
        
        
        }}
      >
        <div
          style={{
            width:70,
            height:70,
            display: "flex",
            flexDirection: "column",
            justifyContents: "center",
            alignItems: "center",
            border: "1px solid #e7e7e7",
            marginTop:15,
            marginLeft:20,
            padding:7,
          }}
        >
          <img
            style={{
               width:'100%',
               height:'100%',
               
              
            }}
            src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
          />
        </div>
        <div style={{display:'flex',flexDirection:'column',marginTop:15,marginLeft:20}}>
        <p style={{fontWeight:'bold',fontSize:17 }}>Technical Lead Engineer</p>
        <a href="https://www.google.com" style={{fontSize:13}}>google.pvt.ltd</a>
        <p style={{marginTop:10,fontSize:15,fontWeight:'bold',color:'#aaa'}}>Hyderabad</p>
        </div>    


      </div>
      <div style={{
        width:'100%',
        height:30,
        backgroundColor:'#e7e7e7',
        display:'flex',flexDirection:'row',alignItems:'center',justifyContent:'flex-end'
      }}>
     <p style={{
       marginRight:260
     }}>Apply by Feb 15</p>
     <div style={{
       backgroundColor:'#0b3253',
       paddingLeft:5,
       paddingRight:5,
      height:25,
      display:'flex',flexDirection:'row',alignItems:'center',justifyContent:'center',
      marginRight:5,
      borderRadius:8
     }}
     onClick={this.handleClickOpen}
     >
      
     <p style={{
       color:'#fff'
     }}><a href='#' style={{color:'#fff'}}>Apply Now</a></p>
      
     </div>
     <Dialog
          onClose={this.handleClose}
          aria-labelledby="customized-dialog-title"
          open={this.state.open}
        >
          <DialogTitle id="customized-dialog-title" onClose={this.handleClose}>
            Apply For Technical Lead at Google
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

            <p>Must have a at least 3+ yrs experience</p>
            <p>Profficient knowledge and expertise in Software development and Software architecture</p>
            <p>Minimum Pay 20L-25L P.a. </p>
            <p>Location Hyderabad</p>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
             Apply 
            </Button>
          </DialogActions>
        </Dialog>

      </div>
      </div>
    );
  }
}
