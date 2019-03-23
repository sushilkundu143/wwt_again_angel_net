import React, { Component } from "react";

export default class Profile extends Component {
  render() {
    return (
      <div>
        <div className="wrapper">
          <header style={{ display: "none" }}>
            <div className="container">
              <div className="header-data">
                <div className="logo">
                  <a href="index-2.html" title="">
                    <img
                      src="images/logoangelnet.png"
                      alt=""
                      style={{ width: "40px", height: "40px" }}
                    />
                  </a>
                </div>
                <div className="search-bar">
                  <form>
                    <input type="text" name="search" placeholder="Search..." />
                    <button type="submit">
                      <i className="la la-search" />
                    </button>
                  </form>
                </div>
                <nav>
                  <ul>
                    <li>
                      <a href="index-2.html" title="">
                        <span>
                          <img src="images/icon1.png" alt="" />
                        </span>
                        Home
                      </a>
                    </li>
                    <li>
                      <a href="companies.html" title="">
                        <span>
                          <img src="images/icon2.png" alt="" />
                        </span>
                        Companies
                      </a>
                    </li>

                    <li>
                      <a href="profiles.html" title="">
                        <span>
                          <img src="images/icon4.png" alt="" />
                        </span>
                        Profiles
                      </a>
                      <ul>
                        <li>
                          <a href="user-profile.html" title="">
                            User Profile
                          </a>
                        </li>
                        <li>
                          <a href="my-profile-feed.html" title="">
                            my-profile-feed
                          </a>
                        </li>
                      </ul>
                    </li>

                    <li>
                      <a href="#" title="" className="not-box-open">
                        <span>
                          <img src="images/icon6.png" alt="" />
                        </span>
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
                                </a>{" "}
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
                    </a>
                    <i className="la la-sort-down" />
                  </div>
                  <div className="user-account-settingss">
                    <h3>Online Status</h3>
                    <ul className="on-off-status">
                      <li>
                        <div className="fgt-sec">
                          <input type="radio" name="cc" id="c5" />
                          <label htmlFor="c5">
                            <span />
                          </label>
                          <small>Online</small>
                        </div>
                      </li>
                      <li>
                        <div className="fgt-sec">
                          <input type="radio" name="cc" id="c6" />
                          <label htmlFor="c6">
                            <span />
                          </label>
                          <small>Offline</small>
                        </div>
                      </li>
                    </ul>
                    <h3>Custom Status</h3>
                    <div className="search_form">
                      <form>
                        <input type="text" name="search" />
                        <button type="submit">Ok</button>
                      </form>
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

          <section className="companies-info">
            <div className="container">
              <div className="company-title">
                <h3>All Companies</h3>
              </div>
              <div className="companies-list">
                <div className="row">
                  <div className="col-lg-3 col-md-4 col-sm-6 col-12">
                    <div className="company_profile_info">
                      <div className="company-up-info">
                        <img src="images/resources/pf-icon1.png" alt="" />
                        <h3>John Doe</h3>
                        <h4>Graphic Designer</h4>
                        <ul>
                          <li>
                            <a href="#" title="" className="follow">
                              Follow
                            </a>
                          </li>
                          <li>
                            <a href="#" title="" className="message-us">
                              <i className="fa fa-envelope" />
                            </a>
                          </li>
                          <li>
                            <a href="#" title="" className="hire-us">
                              Hire
                            </a>
                          </li>
                        </ul>
                      </div>
                      <a href="#" title="" className="view-more-pro">
                        View Profile
                      </a>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-4 col-sm-6 col-12">
                    <div className="company_profile_info">
                      <div className="company-up-info">
                        <img src="images/resources/pf-icon2.png" alt="" />
                        <h3>John Doe</h3>
                        <h4>Graphic Designer</h4>
                        <ul>
                          <li>
                            <a href="#" title="" className="follow">
                              Follow
                            </a>
                          </li>
                          <li>
                            <a href="#" title="" className="message-us">
                              <i className="fa fa-envelope" />
                            </a>
                          </li>
                          <li>
                            <a href="#" title="" className="hire-us">
                              Hire
                            </a>
                          </li>
                        </ul>
                      </div>
                      <a href="#" title="" className="view-more-pro">
                        View Profile
                      </a>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-4 col-sm-6 col-12">
                    <div className="company_profile_info">
                      <div className="company-up-info">
                        <img src="images/resources/pf-icon3.png" alt="" />
                        <h3>John Doe</h3>
                        <h4>Graphic Designer</h4>
                        <ul>
                          <li>
                            <a href="#" title="" className="follow">
                              Follow
                            </a>
                          </li>
                          <li>
                            <a href="#" title="" className="message-us">
                              <i className="fa fa-envelope" />
                            </a>
                          </li>
                          <li>
                            <a href="#" title="" className="hire-us">
                              Hire
                            </a>
                          </li>
                        </ul>
                      </div>
                      <a href="#" title="" className="view-more-pro">
                        View Profile
                      </a>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-4 col-sm-6 col-12">
                    <div className="company_profile_info">
                      <div className="company-up-info">
                        <img src="images/resources/pf-icon4.png" alt="" />
                        <h3>John Doe</h3>
                        <h4>Graphic Designer</h4>
                        <ul>
                          <li>
                            <a href="#" title="" className="follow">
                              Follow
                            </a>
                          </li>
                          <li>
                            <a href="#" title="" className="message-us">
                              <i className="fa fa-envelope" />
                            </a>
                          </li>
                          <li>
                            <a href="#" title="" className="hire-us">
                              Hire
                            </a>
                          </li>
                        </ul>
                      </div>
                      <a href="#" title="" className="view-more-pro">
                        View Profile
                      </a>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-4 col-sm-6 col-12">
                    <div className="company_profile_info">
                      <div className="company-up-info">
                        <img src="images/resources/pf-icon5.png" alt="" />
                        <h3>John Doe</h3>
                        <h4>Graphic Designer</h4>
                        <ul>
                          <li>
                            <a href="#" title="" className="follow">
                              Follow
                            </a>
                          </li>
                          <li>
                            <a href="#" title="" className="message-us">
                              <i className="fa fa-envelope" />
                            </a>
                          </li>
                          <li>
                            <a href="#" title="" className="hire-us">
                              Hire
                            </a>
                          </li>
                        </ul>
                      </div>
                      <a href="#" title="" className="view-more-pro">
                        View Profile
                      </a>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-4 col-sm-6 col-12">
                    <div className="company_profile_info">
                      <div className="company-up-info">
                        <img src="images/resources/pf-icon6.png" alt="" />
                        <h3>John Doe</h3>
                        <h4>Graphic Designer</h4>
                        <ul>
                          <li>
                            <a href="#" title="" className="follow">
                              Follow
                            </a>
                          </li>
                          <li>
                            <a href="#" title="" className="message-us">
                              <i className="fa fa-envelope" />
                            </a>
                          </li>
                          <li>
                            <a href="#" title="" className="hire-us">
                              Hire
                            </a>
                          </li>
                        </ul>
                      </div>
                      <a href="#" title="" className="view-more-pro">
                        View Profile
                      </a>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-4 col-sm-6 col-12">
                    <div className="company_profile_info">
                      <div className="company-up-info">
                        <img src="images/resources/pf-icon7.png" alt="" />
                        <h3>John Doe</h3>
                        <h4>Graphic Designer</h4>
                        <ul>
                          <li>
                            <a href="#" title="" className="follow">
                              Follow
                            </a>
                          </li>
                          <li>
                            <a href="#" title="" className="message-us">
                              <i className="fa fa-envelope" />
                            </a>
                          </li>
                          <li>
                            <a href="#" title="" className="hire-us">
                              Hire
                            </a>
                          </li>
                        </ul>
                      </div>
                      <a href="#" title="" className="view-more-pro">
                        View Profile
                      </a>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-4 col-sm-6 col-12">
                    <div className="company_profile_info">
                      <div className="company-up-info">
                        <img src="images/resources/pf-icon8.png" alt="" />
                        <h3>John Doe</h3>
                        <h4>Graphic Designer</h4>
                        <ul>
                          <li>
                            <a href="#" title="" className="follow">
                              Follow
                            </a>
                          </li>
                          <li>
                            <a href="#" title="" className="message-us">
                              <i className="fa fa-envelope" />
                            </a>
                          </li>
                          <li>
                            <a href="#" title="" className="hire-us">
                              Hire
                            </a>
                          </li>
                        </ul>
                      </div>
                      <a href="#" title="" className="view-more-pro">
                        View Profile
                      </a>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-4 col-sm-6 col-12">
                    <div className="company_profile_info">
                      <div className="company-up-info">
                        <img src="images/resources/pf-icon9.png" alt="" />
                        <h3>John Doe</h3>
                        <h4>Graphic Designer</h4>
                        <ul>
                          <li>
                            <a href="#" title="" className="follow">
                              Follow
                            </a>
                          </li>
                          <li>
                            <a href="#" title="" className="message-us">
                              <i className="fa fa-envelope" />
                            </a>
                          </li>
                          <li>
                            <a href="#" title="" className="hire-us">
                              Hire
                            </a>
                          </li>
                        </ul>
                      </div>
                      <a href="#" title="" className="view-more-pro">
                        View Profile
                      </a>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-4 col-sm-6 col-12">
                    <div className="company_profile_info">
                      <div className="company-up-info">
                        <img src="images/resources/pf-icon10.png" alt="" />
                        <h3>John Doe</h3>
                        <h4>Graphic Designer</h4>
                        <ul>
                          <li>
                            <a href="#" title="" className="follow">
                              Follow
                            </a>
                          </li>
                          <li>
                            <a href="#" title="" className="message-us">
                              <i className="fa fa-envelope" />
                            </a>
                          </li>
                          <li>
                            <a href="#" title="" className="hire-us">
                              Hire
                            </a>
                          </li>
                        </ul>
                      </div>
                      <a href="#" title="" className="view-more-pro">
                        View Profile
                      </a>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-4 col-sm-6 col-12">
                    <div className="company_profile_info">
                      <div className="company-up-info">
                        <img src="images/resources/pf-icon11.png" alt="" />
                        <h3>John Doe</h3>
                        <h4>Graphic Designer</h4>
                        <ul>
                          <li>
                            <a href="#" title="" className="follow">
                              Follow
                            </a>
                          </li>
                          <li>
                            <a href="#" title="" className="message-us">
                              <i className="fa fa-envelope" />
                            </a>
                          </li>
                          <li>
                            <a href="#" title="" className="hire-us">
                              Hire
                            </a>
                          </li>
                        </ul>
                      </div>
                      <a href="#" title="" className="view-more-pro">
                        View Profile
                      </a>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-4 col-sm-6 col-12">
                    <div className="company_profile_info">
                      <div className="company-up-info">
                        <img src="images/resources/pf-icon12.png" alt="" />
                        <h3>John Doe</h3>
                        <h4>Graphic Designer</h4>
                        <ul>
                          <li>
                            <a href="#" title="" className="follow">
                              Follow
                            </a>
                          </li>
                          <li>
                            <a href="#" title="" className="message-us">
                              <i className="fa fa-envelope" />
                            </a>
                          </li>
                          <li>
                            <a href="#" title="" className="hire-us">
                              Hire
                            </a>
                          </li>
                        </ul>
                      </div>
                      <a href="#" title="" className="view-more-pro">
                        View Profile
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="process-comm">
                <a href="#" title="">
                  <img src="images/process-icon.png" alt="" />
                </a>
              </div>
            </div>
          </section>
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
