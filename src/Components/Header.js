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
  state = {
    anchorEl: null,
    mobileMoreAnchorEl: null,
    NotificationsAnchorEl: null,
    Notifications: notifications
  };
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
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z" />
          </svg>

          <p style={{ marginLeft: 10 }}>Scheduler</p>
        </MenuItem>
        {/*<MenuItem onClick={this.handleMenuClose}>
        <Link to='/blog'>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <circle cx="6.18" cy="17.82" r="2.18" />
            <path d="M4 4.44v2.83c7.03 0 12.73 5.7 12.73 12.73h2.83c0-8.59-6.97-15.56-15.56-15.56zm0 5.66v2.83c3.9 0 7.07 3.17 7.07 7.07h2.83c0-5.47-4.43-9.9-9.9-9.9z" />
          </svg>
          <p style={{ marginLeft: 10 }}>Blog</p>
          </Link>
        </MenuItem>
        <MenuItem onClick={this.handleMenuClose}>
        <Link to='/blog'>
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
    </MenuItem>*/}
        <MenuItem onClick={this.handleMenuClose}>
        <Link to='/jobs-page' style={{display:'flex',flexDirection:'row'}} > 
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
        {/* 
        <MenuItem onClick={this.handleMenuClose}>
        <Link to='/blog'> 
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path d="M13 12h7v1.5h-7zm0-2.5h7V11h-7zm0 5h7V16h-7zM21 4H3c-1.1 0-2 .9-2 2v13c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 15h-9V6h9v13z" />
          </svg>

          <p style={{ marginLeft: 10 }}>News</p>
          </Link>
        </MenuItem>
        <MenuItem onClick={this.handleMenuClose}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 18 18"
          >
            <path d="M6 8c1.11 0 2-.9 2-2s-.89-2-2-2c-1.1 0-2 .9-2 2s.9 2 2 2zm6 0c1.11 0 2-.9 2-2s-.89-2-2-2c-1.11 0-2 .9-2 2s.9 2 2 2zM6 9.2c-1.67 0-5 .83-5 2.5V13h10v-1.3c0-1.67-3.33-2.5-5-2.5zm6 0c-.25 0-.54.02-.84.06.79.6 1.34 1.4 1.34 2.44V13H17v-1.3c0-1.67-3.33-2.5-5-2.5z" />
          </svg>
          <p style={{ marginLeft: 10 }}>PartnerShip</p>
        </MenuItem>
        <MenuItem onClick={this.handleMenuClose}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path d="M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z" />
          </svg>

          <p style={{ marginLeft: 10 }}>Launch</p>
        </MenuItem>
        <MenuItem onClick={this.handleMenuClose}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 18 18"
          >
            <path d="M16 1H2c-.55 0-1 .45-1 1v14c0 .55.45 1 1 1h14c.55 0 1-.45 1-1V2c0-.55-.45-1-1-1zM3.5 13l2.75-3.54 1.96 2.36 2.75-3.54L14.5 13h-11z" />
          </svg>

          <p style={{ marginLeft: 10 }}>Gallery</p>
        </MenuItem>
        <MenuItem onClick={this.handleMenuClose}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path d="M23 12l-2.44-2.78.34-3.68-3.61-.82-1.89-3.18L12 3 8.6 1.54 6.71 4.72l-3.61.81.34 3.68L1 12l2.44 2.78-.34 3.69 3.61.82 1.89 3.18L12 21l3.4 1.46 1.89-3.18 3.61-.82-.34-3.68L23 12zm-10 5h-2v-2h2v2zm0-4h-2V7h2v6z" />
          </svg>
          <p style={{ marginLeft: 10 }}>Adverstisement</p>
        </MenuItem>
        <MenuItem onClick={this.handleMenuClose}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path d="M21 3H3c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h5v2h8v-2h5c1.1 0 1.99-.9 1.99-2L23 5c0-1.1-.9-2-2-2zm0 14H3V5h18v12z" />
          </svg>

          <p style={{ marginLeft: 10 }}>AngelNet TV</p>
        </MenuItem>*/}
        <MenuItem onClick={this.handleMenuClose}>
        <Link to='/trending' style={{display:'flex',flexDirection:'row'}} >  
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
          <Link to="/global-classroom" style={{display:'flex',flexDirection:'row'}}>
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
          <Link
            to="/"
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center"
            }}
          >
            <IconButton color="inherit">
              <Home />
            </IconButton>

            <p>Home</p>
          </Link>
        </MenuItem>
        <MenuItem onClick={this.handleProfileMenuOpen}>
          <Link
            to="/profile"
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center"
            }}
          >
            <IconButton color="inherit">
              <AccountCircle />
            </IconButton>
            <p>Profile</p>
          </Link>
        </MenuItem>
        <MenuItem>
          <Link
            to="/companies"
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center"
            }}
          >
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
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center"
          }}
        >
          <Link
            to="/notifications"
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center"
            }}
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
          <Toolbar>
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
              <h1
                style={{
                  color: "#3fa6e6",
                  fontWeigth: "bold",
                  fontSize: 30
                }}
              >
                AngelNet
              </h1>
            </Typography>
            <Hidden smDown>
              <div className={classes.search}>
                <div className={classes.searchIcon}>
                  <SearchIcon />
                </div>
                <InputBase
                  placeholder="Search…"
                  classes={{
                    root: classes.inputRoot,
                    input: classes.inputInput
                  }}
                />
              </div>
              <a href="https://www.google.com">
                <Typography>
                  <p style={{ color: "#fff" }}>Advanced Search</p>
                </Typography>
              </a>
            </Hidden>
            <div className={classes.grow} />
            <div className={classes.sectionDesktop}>
              <Tooltip title="Home">
                <Link
                  to="/"
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#fff"
                  }}
                >
                  <IconButton color="inherit">
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        color: "#fff",
                        alignItems: "center",
                        justifyContent: "center"
                      }}
                    >
                      <Home />
                      <Typography style={{ color: "#fff" }}>Home</Typography>
                    </div>
                  </IconButton>
                </Link>
              </Tooltip>
              <Tooltip title="Profile">
                <Link
                  to="/profile"
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#fff"
                  }}
                >
                  <IconButton color="inherit">
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        color: "#fff",
                        alignItems: "center",
                        justifyContent: "center"
                      }}
                    >
                      <AccountCircle />
                      <Typography style={{ color: "#fff" }}>Profile</Typography>
                    </div>
                  </IconButton>
                </Link>
              </Tooltip>
              <Tooltip title="Connections">
                <Link
                  to="/companies"
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#fff"
                  }}
                >
                  <IconButton color="inherit">
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        color: "#fff",
                        alignItems: "center",
                        justifyContent: "center"
                      }}
                    >
                      <Group />
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
                    <Badge badgeContent={4} color="secondary">
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          color: "#fff",
                          alignItems: "center",
                          justifyContent: "center"
                        }}
                      >
                        <MailIcon />
                        <Typography style={{ color: "#fff" }}>
                          Messages
                        </Typography>
                      </div>
                    </Badge>
                  </IconButton>
                </Link>
              </Tooltip>
              <Tooltip title="Notifications">
                <IconButton
                  color="inherit"
                  onClick={this.handleNotificationsOpen}
                >
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      color: "#fff",
                      alignItems: "center",
                      justifyContent: "center"
                    }}
                  >
                    <Badge badgeContent={11} color="secondary">
                      <NotificationsIcon />
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
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      color: "#fff",
                      alignItems: "center",
                      justifyContent: "center"
                    }}
                  >
                    <NotificationsIcon />
                    <Typography style={{ color: "#fff" }}>More</Typography>
                  </div>
                </IconButton>
              </Tooltip>
              <Tooltip title="logout">
                <IconButton color="inherit">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path
                      style={{ fill: "#fff" }}
                      d="M10.09 15.59L11.5 17l5-5-5-5-1.41 1.41L12.67 11H3v2h9.67l-2.58 2.59zM19 3H5c-1.11 0-2 .9-2 2v4h2V5h14v14H5v-4H3v4c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"
                    />
                  </svg>
                </IconButton>
              </Tooltip>

              {/*<IconButton color="inherit">
                 <p>Home</p>
                </IconButton>
                <IconButton color="inherit">
                 <p>Profile</p>
                </IconButton>
              <IconButton color="inherit">
                <p>Connections</p>
              </IconButton>
              <IconButton color="inherit">
                <Badge badgeContent={4} color="secondary">
                  <MailIcon />
                </Badge>
              </IconButton>
              <IconButton color="inherit">
                <Badge badgeContent={17} color="secondary">
                  <NotificationsIcon />
                </Badge>
              </IconButton>
              {/*<IconButton
                aria-owns={isMenuOpen ? "material-appbar" : undefined}
                aria-haspopup="true"
                onClick={this.handleProfileMenuOpen}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
              * /}
              <IconButton color="inherit">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  
                >
                  <path d="M10.09 15.59L11.5 17l5-5-5-5-1.41 1.41L12.67 11H3v2h9.67l-2.58 2.59zM19 3H5c-1.11 0-2 .9-2 2v4h2V5h14v14H5v-4H3v4c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z" />

                </svg>
              </IconButton>*/}
            </div>
            <div className={classes.sectionMobile}>
              <IconButton
                aria-haspopup="true"
                onClick={this.handleMobileMenuOpen}
                color="inherit"
              >
                <MoreIcon />
              </IconButton>
            </div>
          </Toolbar>
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
