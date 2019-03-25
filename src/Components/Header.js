import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import Avatar from "@material-ui/core/Avatar";
import ShortNotification from "./Notifications/ShortNotifications";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import InputBase from "@material-ui/core/InputBase";
import Badge from "@material-ui/core/Badge";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import { fade } from "@material-ui/core/styles/colorManipulator";
import { withStyles } from "@material-ui/core/styles";
import MenuIcon from "@material-ui/icons/Menu";
import Hidden from "@material-ui/core/Hidden";
import SearchIcon from "@material-ui/icons/Search";
import AccountCircle from "@material-ui/icons/AccountCircle";
import MailIcon from "@material-ui/icons/Mail";
import NotificationsIcon from "@material-ui/icons/Notifications";
import MoreIcon from "@material-ui/icons/MoreVert";
import Settings from "@material-ui/icons/Settings";
import Home from "@material-ui/icons/Home";
import Group from "@material-ui/icons/Group";
import Tooltip from "@material-ui/core/Tooltip";
const styles = theme => ({
  root: {
    width: "100%"
  },
  grow: {
    flexGrow: 1
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  },
  title: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block"
    },
    fontColor: "#3fa6e6",
    fontSize: 20
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25)
    },
    marginRight: theme.spacing.unit * 2,
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing.unit * 3,
      width: "auto"
    }
  },
  searchIcon: {
    width: theme.spacing.unit * 9,
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  inputRoot: {
    color: "inherit",
    width: "100%"
  },
  inputInput: {
    paddingTop: theme.spacing.unit,
    paddingRight: theme.spacing.unit,
    paddingBottom: theme.spacing.unit,
    paddingLeft: theme.spacing.unit * 10,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: 200
    }
  },
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex"
    }
  },
  sectionMobile: {
    display: "flex",
    [theme.breakpoints.up("md")]: {
      display: "none"
    }
  }
});
var notifications = [
  {
    Heading: "You have achieved Level 3",
    SubHeading: "You became master in this skill"
  },
  {
    Heading: "Rahul has Posted a New Product",
    SubHeading:
      "Your Friend Rahul haas created a new innovation , Congratulate him"
  }
];

class PrimarySearchAppBar extends React.Component {
  constructor(props){
    super(props);
  this.state = {
    anchorEl: null,
    mobileMoreAnchorEl: null,
    NotificationsAnchorEl: null,
    Notifications: notifications,
  };
this.logout=this.logout.bind(this);
this.renderNotification=this.renderNotification.bind(this);
this.handleProfileMenuOpen=this.handleProfileMenuOpen.bind(this);
this.handleMenuClose=this.handleMenuClose.bind(this);
this.handleMobileMenuOpen=this.handleMobileMenuOpen.bind(this);
this.handleNotificationsOpen=this.handleNotificationsOpen.bind(this);
this.handleMobileMenuClose=this.handleMobileMenuClose.bind(this);
this.handleNotificationsClose=this.handleNotificationsClose.bind(this);
}
logout(){
  sessionStorage.setItem('token_angel_net','');
  this.props.setState({loggedIn:false})
}
  renderNotification = (tab, index) => {
    return (
      <ShortNotification Heading={tab.Heading} SubHeading={tab.SubHeading} />
    );
  };
  handleProfileMenuOpen = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleMenuClose = () => {
    this.setState({ anchorEl: null });
    this.handleMobileMenuClose();
  };

  handleMobileMenuOpen = event => {
    this.setState({ mobileMoreAnchorEl: event.currentTarget });
  };
  handleNotificationsOpen = event => {
    this.setState({ NotificationsAnchorEl: event.currentTarget });
  };
  handleMobileMenuClose = () => {
    this.setState({ mobileMoreAnchorEl: null });
  };
  handleNotificationsClose = () => {
    this.setState({ NotificationsAnchorEl: null });
  };

  render() {
    const { anchorEl, mobileMoreAnchorEl, NotificationsAnchorEl } = this.state;
    const { classes } = this.props;
    const isMenuOpen = Boolean(anchorEl);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
    const isNotificationsOpen = Boolean(NotificationsAnchorEl);
    const renderMenu = (
      <Menu
        anchorEl={anchorEl}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        transformOrigin={{ vertical: "top", horizontal: "right" }}
        open={isMenuOpen}
        onClose={this.handleMenuClose}
      >
        <MenuItem onClick={this.handleMenuClose}>
        <Link to ='/analysis' style={{display:'flex',flexDirection:'row' , width:'100%'}}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z" />
          </svg>

          <p style={{ marginLeft: 10 }}>Analysis</p>
          </Link>
        </MenuItem>
        <MenuItem onClick={this.handleMenuClose}>
        <Link to='/events' style={{display:'flex',flexDirection:'row',width:'100%'}}>
                  <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path d="M9 11H7v2h2v-2zm4 0h-2v2h2v-2zm4 0h-2v2h2v-2zm2-7h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V9h14v11z" />
          </svg>
          <p style={{ marginLeft: 10 }}>Events</p>
          </Link>
    </MenuItem>
        <MenuItem onClick={this.handleMenuClose}>
        <Link to='/jobs-page' style={{display:'flex',flexDirection:'row',width:'100%'}} > 
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path d="M20 6h-4V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-6 0h-4V4h4v2z" />
          </svg>
          <p style={{ marginLeft: 10 }}>Jobs</p>
          </Link>
        </MenuItem>
        <MenuItem onClick={this.handleMenuClose}>
         <Link to='/partnership' style={{display:'flex',flexDirection:'row',width:'100%'}}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 18 18"
          >
            <path d="M6 8c1.11 0 2-.9 2-2s-.89-2-2-2c-1.1 0-2 .9-2 2s.9 2 2 2zm6 0c1.11 0 2-.9 2-2s-.89-2-2-2c-1.11 0-2 .9-2 2s.9 2 2 2zM6 9.2c-1.67 0-5 .83-5 2.5V13h10v-1.3c0-1.67-3.33-2.5-5-2.5zm6 0c-.25 0-.54.02-.84.06.79.6 1.34 1.4 1.34 2.44V13H17v-1.3c0-1.67-3.33-2.5-5-2.5z" />
          </svg>
          <p style={{ marginLeft: 10 }}>PartnerShip</p>
          </Link>
        </MenuItem>
        <MenuItem onClick={this.handleMenuClose}>
        <Link to='/trending' style={{display:'flex',flexDirection:'row',width:'100%'}} >  
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path d="M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z" />
          </svg>
          <p style={{ marginLeft: 10 }}>Trending</p>
          </Link>
        </MenuItem>
        <MenuItem onClick={this.handleMenuClose}>
          <Link to="/global-classroom" style={{display:'flex',flexDirection:'row',width:'100%',}}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM8 17.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5zM9.5 8c0-1.38 1.12-2.5 2.5-2.5s2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5S9.5 9.38 9.5 8zm6.5 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
            </svg>

            <p style={{ marginLeft: 10 }}>Global Classroom</p>
          </Link>
        </MenuItem>
        <MenuItem onClick={this.handleMenuClose}>
        <Link to='/settings' style={{display:'flex',flexDirection:'row',width:'100%'}}>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 20 20"><path fill="none" d="M0 0h20v20H0V0z"/><path d="M15.95 10.78c.03-.25.05-.51.05-.78s-.02-.53-.06-.78l1.69-1.32c.15-.12.19-.34.1-.51l-1.6-2.77c-.1-.18-.31-.24-.49-.18l-1.99.8c-.42-.32-.86-.58-1.35-.78L12 2.34c-.03-.2-.2-.34-.4-.34H8.4c-.2 0-.36.14-.39.34l-.3 2.12c-.49.2-.94.47-1.35.78l-1.99-.8c-.18-.07-.39 0-.49.18l-1.6 2.77c-.1.18-.06.39.1.51l1.69 1.32c-.04.25-.07.52-.07.78s.02.53.06.78L2.37 12.1c-.15.12-.19.34-.1.51l1.6 2.77c.1.18.31.24.49.18l1.99-.8c.42.32.86.58 1.35.78l.3 2.12c.04.2.2.34.4.34h3.2c.2 0 .37-.14.39-.34l.3-2.12c.49-.2.94-.47 1.35-.78l1.99.8c.18.07.39 0 .49-.18l1.6-2.77c.1-.18.06-.39-.1-.51l-1.67-1.32zM10 13c-1.65 0-3-1.35-3-3s1.35-3 3-3 3 1.35 3 3-1.35 3-3 3z"/></svg>
          <p style={{ marginLeft: 10 }}>Settings</p>
          </Link>
    </MenuItem>
      </Menu>
    );

    const renderMobileMenu = (
      <Menu
        anchorEl={mobileMoreAnchorEl}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        transformOrigin={{ vertical: "top", horizontal: "right" }}
        open={isMobileMenuOpen}
        onClose={this.handleMobileMenuClose}
      >
        <MenuItem>
          <Link to="/" className="menu-item">
            <IconButton color="inherit">
              <Home />
            </IconButton>
            <p>Home</p>
          </Link>
        </MenuItem>
        <MenuItem onClick={this.handleProfileMenuOpen}>
          <Link className="menu-item">
            <IconButton color="inherit">
              <AccountCircle />
            </IconButton>
            <p>Profile</p>
          </Link>
        </MenuItem>
        <MenuItem>
          <Link to="/companies" className="menu-item">
            <IconButton color="inherit">
              <Group />
            </IconButton>
            <p>Connections</p>
          </Link>
        </MenuItem>
        <MenuItem>
          <Link to="/messages">
            <IconButton color="inherit">
              <Badge badgeContent={4} color="secondary">
                <MailIcon />
              </Badge>
            </IconButton>
            <p>Messages</p>
          </Link>
        </MenuItem>
        <MenuItem>
          <IconButton color="inherit">
            <Badge badgeContent={11} color="secondary">
              <NotificationsIcon />
            </Badge>
          </IconButton>
          <p>Notifications</p>
        </MenuItem>
        <MenuItem>
          <IconButton color="inherit">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              onClick={this.logout}
            >
              <path d="M10.09 15.59L11.5 17l5-5-5-5-1.41 1.41L12.67 11H3v2h9.67l-2.58 2.59zM19 3H5c-1.11 0-2 .9-2 2v4h2V5h14v14H5v-4H3v4c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z" />
            </svg>
          </IconButton>
          <p>Logout</p>
        </MenuItem>
      </Menu>
    );
    const renderNotifications = (
      <Menu
        anchorEl={NotificationsAnchorEl}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        transformOrigin={{ vertical: "top", horizontal: "right" }}
        open={isNotificationsOpen}
        onClose={this.handleNotificationsClose}
      >
        {this.state.Notifications.map((tab, index) => (
          <MenuItem>{this.renderNotification(tab, index)}</MenuItem>
        ))}
        <MenuItem
          onClick={this.handleNotificationsClose}
          className="menu-item"
        >
          <Link
            to="/notifications"
            className="menu-item"
          >
            View More
          </Link>
        </MenuItem>
      </Menu>
    );
    return (
      <div className={classes.root}>
        <AppBar
          position="static"
          style={{
            backgroundColor: "#0b3253"
          }}
        >
        <div className="container">
          <Toolbar className="row pl-0 pr-0">
            <Hidden mdUp>
              <Tooltip title="More">
                <IconButton
                  className={classes.menuButton}
                  color="inherit"
                  aria-label="Open drawer"
                  onClick={this.handleProfileMenuOpen}
                >
                  <MenuIcon />
                </IconButton>
              </Tooltip>
            </Hidden>
            <img
              src="images/logoangelnet.png"
              alt="logo angelnet"
              style={{ width: "40px", height: "40px" }}
            />

            <Typography style={{ marginLeft: 10 }}>
              <p
                style={{
                  color: "#3fa6e6",
                  fontSize: 30
                }}
              >
                AngelNet
              </p>
            </Typography>
            <Hidden smDown>
              <div className={classes.search}>
                <div className={classes.searchIcon}>
                  <SearchIcon />
                </div>
                <InputBase
                  placeholder="Search"
                  classes={{
                    root: classes.inputRoot,
                    input: classes.inputInput
                  }}
                />
              </div>
              <a href="https://www.google.com">
              </a>
            </Hidden>
            <div className={classes.grow} />
            <div className={classes.sectionDesktop}>
              <Tooltip title="Home">
                <Link to="/" className="menu-item">
                  <IconButton color="inherit">
                    <div className="menu-item">
                      <Home style={{ color: "#fff" }} />
                      <Typography style={{ color: "#fff" }}>Home</Typography>
                    </div>
                  </IconButton>
                </Link>
              </Tooltip>
              <Tooltip title="Profile">
                <Link to="/profile" className="menu-item">
                  <IconButton color="inherit">
                    <div className="menu-item">
                      <AccountCircle style={{ color: "#fff" }} />
                      <Typography style={{ color: "#fff" }}>Profile</Typography>
                    </div>
                  </IconButton>
                </Link>
              </Tooltip>
              <Tooltip title="Connections">
                <Link to="/companies" className="menu-item">
                  <IconButton color="inherit">
                    <div className="menu-item">
                      <Group style={{ color: "#fff" }} />
                      <Typography style={{ color: "#fff" }}>
                        Connections
                      </Typography>
                    </div>
                  </IconButton>
                </Link>
              </Tooltip>
              <Tooltip title="Messages">
                <Link to="/messages">
                  <IconButton color="inherit">
                    <div className="menu-item">
                    <Badge badgeContent={4} color="secondary">
                      <MailIcon style={{ color: "#fff" }} />
                    </Badge>
                    <Typography style={{ color: "#fff" }}>
                      Messages
                    </Typography>
                  </div>
                  </IconButton>
                </Link>
              </Tooltip>
              <Tooltip title="Notifications">
                <IconButton color="inherit" onClick={this.handleNotificationsOpen}>
                  <div className="menu-item">
                    <Badge badgeContent={11} color="secondary">
                      <NotificationsIcon style={{ color: "#fff" }} />
                    </Badge>
                    <Typography style={{ color: "#fff" }}>
                      Notifications
                    </Typography>
                  </div>
                </IconButton>
              </Tooltip>
              <Tooltip title="More">
                <IconButton
                  color="inherit"
                  onClick={this.handleProfileMenuOpen}
                >
                  <div className="menu-item">
                    <NotificationsIcon />
                    <Typography style={{ color: "#fff" }}>More</Typography>
                  </div>
                </IconButton>
              </Tooltip>
              <Tooltip title="logout">
               <IconButton color="inherit" onClick={this.logout}>
                    <div className="menu-item">
                      <AccountCircle />
                      <Typography style={{ color: "#fff" }}>Hi, AngelNet</Typography>
                    </div>
                  </IconButton>
              </Tooltip>
            </div>
            <div className={classes.sectionMobile}>
              <IconButton aria-haspopup="true" onClick={this.handleMobileMenuOpen} color="inherit">
                <MoreIcon />
              </IconButton>
            </div>
          </Toolbar>
          </div>
        </AppBar>
        {renderMenu}
        {renderMobileMenu}
        {renderNotifications}
      </div>
    );
  }
}

PrimarySearchAppBar.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(PrimarySearchAppBar);
