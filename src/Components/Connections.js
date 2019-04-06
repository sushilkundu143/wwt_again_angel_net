import React, { Component } from "react";
import { Link } from "react-router-dom";
import DisplayConnections from "./DisplayConnections";
export default class Connections extends Component {
  render() {
    return (
      <div>
        <div className="wrapper">
          <header style={{ display: "none" }}>
            <div className="container">
              <div className="header-data">
                <div className="logo">
                  <Link to="/">
                    <img
                      src="images/logoangelnet.png"
                      alt=""
                      style={{ width: "40px", height: "40px" }}
                    />
                  </Link>
                </div>

                <div className="search-bar">
                  <htmlForm>
                    <input type="text" name="search" placeholder="Search..." />
                    <button type="submit">
                      <i className="la la-search" />
                    </button>
                  </htmlForm>
                </div>

                <nav>
                  <ul>
                    <li>
                      <Link to="/">
                        <span>
                          <img src="images/icon1.png" alt="" />
                        </span>{" "}
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link to="/companies">
                        <span>
                          <img src="images/icon2.png" alt="" />
                        </span>
                        Connections
                      </Link>
                    </li>

                    <li>
                      <Link to="/profile">
                        <span>
                          <img src="images/icon4.png" alt="" />
                        </span>{" "}
                        Profile
                      </Link>
                    </li>

                    <li>
                      <a href="#" title="" className="not-box-open">
                        <span>
                          <img src="images/icon6.png" alt="" />
                        </span>{" "}
                        Messages
                      </a>
                      <div className="notification-box msg">
                        <div className="nt-title">
                          <h4>Setting</h4>
                          <a href="#" title="">
                            Clear all
                          </a>
                        </div>
                        <div className="nott-list">
                          <div className="notfication-details">
                            <div className="noty-user-img">
                              <img src="images/resources/ny-img1.png" alt="" />
                            </div>
                            <div className="notification-info">
                              <h3>
                                <a href="messages.html" title="">
                                  Jassica William
                                </a>
                              </h3>
                              <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit, sed do.
                              </p>
                              <span>2 min ago</span>
                            </div>
                          </div>
                          <div className="notfication-details">
                            <div className="noty-user-img">
                              <img src="images/resources/ny-img2.png" alt="" />
                            </div>
                            <div className="notification-info">
                              <h3>
                                <a href="messages.html" title="">
                                  Jassica William
                                </a>
                              </h3>
                              <p>Lorem ipsum dolor sit amet.</p>
                              <span>2 min ago</span>
                            </div>
                          </div>
                          <div className="notfication-details">
                            <div className="noty-user-img">
                              <img src="images/resources/ny-img3.png" alt="" />
                            </div>
                            <div className="notification-info">
                              <h3>
                                <a href="messages.html" title="">
                                  Jassica William
                                </a>
                              </h3>
                              <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit, sed do eiusmod tempo
                                incididunt ut labore et dolore magna aliqua.
                              </p>
                              <span>2 min ago</span>
                            </div>
                          </div>
                          <div className="view-all-nots">
                            <a href="messages.html" title="">
                              View All Messsages
                            </a>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li>
                      <a href="#" title="" className="not-box-open">
                        <span>
                          <img src="images/icon7.png" alt="" />
                        </span>
                        Notification
                      </a>
                      <div className="notification-box">
                        <div className="nt-title">
                          <h4>Setting</h4>
                          <a href="#" title="">
                            Clear all
                          </a>
                        </div>
                        <div className="nott-list">
                          <div className="notfication-details">
                            <div className="noty-user-img">
                              <img src="images/resources/ny-img1.png" alt="" />
                            </div>
                            <div className="notification-info">
                              <h3>
                                <a href="#" title="">
                                  Jassica William
                                </a>{" "}
                                Comment on your project.
                              </h3>
                              <span>2 min ago</span>
                            </div>
                          </div>
                          <div className="notfication-details">
                            <div className="noty-user-img">
                              <img src="images/resources/ny-img2.png" alt="" />
                            </div>
                            <div className="notification-info">
                              <h3>
                                <a href="#" title="">
                                  Jassica William
                                </a>{" "}
                                Comment on your project.
                              </h3>
                              <span>2 min ago</span>
                            </div>
                          </div>
                          <div className="notfication-details">
                            <div className="noty-user-img">
                              <img src="images/resources/ny-img3.png" alt="" />
                            </div>
                            <div className="notification-info">
                              <h3>
                                <a href="#" title="">
                                  Jassica William
                                </a>{" "}
                                Comment on your project.
                              </h3>
                              <span>2 min ago</span>
                            </div>
                          </div>
                          <div className="notfication-details">
                            <div className="noty-user-img">
                              <img src="images/resources/ny-img2.png" alt="" />
                            </div>
                            <div className="notification-info">
                              <h3>
                                <a href="#" title="">
                                  Jassica William
                                </a>{" "}
                                Comment on your project.
                              </h3>
                              <span>2 min ago</span>
                            </div>
                          </div>
                          <div className="view-all-nots">
                            <a href="#" title="">
                              View All Notification
                            </a>
                          </div>
                        </div>
                      </div>
                    </li>
                  </ul>
                </nav>

                <div className="menu-btn">
                  <a href="#" title="">
                    <i className="fa fa-bars" />
                  </a>
                </div>

                <div className="user-account">
                  <div className="user-info">
                    <img src="images/resources/user.png" alt="" />
                    <a href="#" title="">
                      John
                    </a>{" "}
                    <i className="la la-sort-down" />
                  </div>
                  <div className="user-account-settingss">
                    <h3>Online Status</h3>
                    <ul className="on-off-status">
                      <li>
                        <div className="fgt-sec">
                          <input type="radio" name="cc" id="c5" />
                          <label htmlFor="c5">
                            {" "}
                            <span />{" "}
                          </label>
                          <small>Online</small>
                        </div>
                      </li>
                      <li>
                        <div className="fgt-sec">
                          <input type="radio" name="cc" id="c6" />
                          <label htmlFor="c6">
                            {" "}
                            <span />{" "}
                          </label>
                          <small>Offline</small>
                        </div>
                      </li>
                    </ul>
                    <h3>Custom Status</h3>
                    <div className="search_htmlForm">
                      <htmlForm>
                        <input type="text" name="search" />
                        <button type="submit">Ok</button>
                      </htmlForm>
                    </div>

                    <h3>Setting</h3>
                    <ul className="us-links">
                      <li>
                        <a href="profile-account-setting.html" title="">
                          Account Setting
                        </a>
                      </li>
                      <li>
                        <a href="#" title="">
                          Privacy
                        </a>
                      </li>
                      <li>
                        <a href="#" title="">
                          Faqs
                        </a>
                      </li>
                      <li>
                        <a href="#" title="">
                          Terms & Conditions
                        </a>
                      </li>
                    </ul>
                    <h3 className="tc">
                      <a href="#" title="">
                        Logout
                      </a>
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </header>

          <div id="DisplayConnections">
            <DisplayConnections />
          </div>
        </div>

        <script type="text/javascript" src="js/jquery.min.js" />
        <script type="text/javascript" src="js/popper.js" />
        <script type="text/javascript" src="js/bootstrap.min.js" />
        <script type="text/javascript" src="js/flatpickr.min.js" />
        <script type="text/javascript" src="lib/slick/slick.min.js" />
        <script type="text/javascript" src="js/script.js" />
      </div>
    );
  }
}
