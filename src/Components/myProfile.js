import React, { Component } from "react";
import { Link } from "react-router-dom";
export default class MyProfile extends Component {
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
                      alt="logo angelnet"
                      style={{ width: "40px", height: "40px" }}
                    />
                  </Link>
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
                        </span>{" "}
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
                          <label for="c5">
                            {" "}
                            <span />{" "}
                          </label>
                          <small>Online</small>
                        </div>
                      </li>
                      <li>
                        <div className="fgt-sec">
                          <input type="radio" name="cc" id="c6" />
                          <label for="c6">
                            {" "}
                            <span />{" "}
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

          <section className="cover-sec">
            <img src="images/resources/cover-img.jpg" alt="" />
          </section>

          <main>
            <div className="main-section">
              <div className="container">
                <div className="main-section-data">
                  <div className="row">
                    <div className="col-lg-3">
                      <div className="main-left-sidebar">
                        <div className="user_profile">
                          <div className="user-pro-img">
                            <img
                              src="images/resources/user-pro-img.png"
                              alt=""
                            />
                          </div>

                          <div className="user_pro_status">
                            <ul className="flw-hr">
                              <li>
                                <a href="#" title="" className="flww">
                                  <i className="la la-plus" /> Follow
                                </a>
                              </li>
                              <li>
                                <a href="#" title="" className="hre">
                                  Hire
                                </a>
                              </li>
                            </ul>
                            <ul className="flw-status">
                              <li>
                                <span>Following</span> <b>34</b>
                              </li>
                              <li>
                                <span>Followers</span> <b>155</b>
                              </li>
                            </ul>
                          </div>

                          <ul className="social_links">
                            <li>
                              <a href="#" title="">
                                <i className="la la-globe" /> www.example.com
                              </a>
                            </li>
                            <li>
                              <a href="#" title="">
                                <i className="fa fa-facebook-square" />
                                Http://www.facebook.com/john...
                              </a>
                            </li>
                            <li>
                              <a href="#" title="">
                                <i className="fa fa-twitter" />
                                Http://www.Twitter.com/john...
                              </a>
                            </li>
                            <li>
                              <a href="#" title="">
                                <i className="fa fa-google-plus-square" />
                                Http://www.googleplus.com/john...
                              </a>
                            </li>
                            <li>
                              <a href="#" title="">
                                <i className="fa fa-behance-square" />
                                Http://www.behance.com/john...
                              </a>
                            </li>
                            <li>
                              <a href="#" title="">
                                <i className="fa fa-pinterest" />
                                Http://www.pinterest.com/john...
                              </a>
                            </li>
                            <li>
                              <a href="#" title="">
                                <i className="fa fa-instagram" />
                                Http://www.instagram.com/john...
                              </a>
                            </li>
                            <li>
                              <a href="#" title="">
                                <i className="fa fa-youtube" />
                                Http://www.youtube.com/john...
                              </a>
                            </li>
                          </ul>
                        </div>
                        {/*
                        <div className="suggestions full-width">
                          <div className="sd-title">
                            <h3>Suggestions</h3>
                            <i className="la la-ellipsis-v" />
                          </div>

                          <div className="suggestions-list">
                            <div className="suggestion-usd">
                              <img src="images/resources/s1.png" alt="" />
                              <div className="sgt-text">
                                <h4>Jessica William</h4>
                                <span>Graphic Designer</span>
                              </div>
                              <span>
                                <i className="la la-plus" />
                              </span>
                            </div>
                            <div className="suggestion-usd">
                              <img src="images/resources/s2.png" alt="" />
                              <div className="sgt-text">
                                <h4>John Doe</h4>
                                <span>PHP Developer</span>
                              </div>
                              <span>
                                <i className="la la-plus" />
                              </span>
                            </div>
                            <div className="suggestion-usd">
                              <img src="images/resources/s3.png" alt="" />
                              <div className="sgt-text">
                                <h4>Poonam</h4>
                                <span>Wordpress Developer</span>
                              </div>
                              <span>
                                <i className="la la-plus" />
                              </span>
                            </div>
                            <div className="suggestion-usd">
                              <img src="images/resources/s4.png" alt="" />
                              <div className="sgt-text">
                                <h4>Bill Gates</h4>
                                <span>C & C++ Developer</span>
                              </div>
                              <span>
                                <i className="la la-plus" />
                              </span>
                            </div>
                            <div className="suggestion-usd">
                              <img src="images/resources/s5.png" alt="" />
                              <div className="sgt-text">
                                <h4>Jessica William</h4>
                                <span>Graphic Designer</span>
                              </div>
                              <span>
                                <i className="la la-plus" />
                              </span>
                            </div>
                            <div className="suggestion-usd">
                              <img src="images/resources/s6.png" alt="" />
                              <div className="sgt-text">
                                <h4>John Doe</h4>
                                <span>PHP Developer</span>
                              </div>
                              <span>
                                <i className="la la-plus" />
                              </span>
                            </div>
                            <div className="view-more">
                              <a href="#" title="">
                                View More
                              </a>
                            </div>
                          </div>
                        </div>
                      */}
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="main-ws-sec">
                        <div className="user-tab-sec">
                          <h3>John Doe</h3>
                          <div className="star-descp">
                            <span>Graphic Designer at Self Employed</span>
                            <ul>
                              <li>
                                <i className="fa fa-star" />
                              </li>
                              <li>
                                <i className="fa fa-star" />
                              </li>
                              <li>
                                <i className="fa fa-star" />
                              </li>
                              <li>
                                <i className="fa fa-star" />
                              </li>
                              <li>
                                <i className="fa fa-star-half-o" />
                              </li>
                            </ul>
                          </div>

                          <div className="tab-feed">
                            <ul>
                              <li data-tab="feed-dd" className="active">
                                <a href="#" title="">
                                  <img src="images/ic1.png" alt="" />
                                  <span>Feed</span>
                                </a>
                              </li>
                              <li data-tab="info-dd">
                                <a href="#" title="">
                                  <img src="images/ic2.png" alt="" />
                                  <span>Info</span>
                                </a>
                              </li>
                              <li data-tab="portfolio-dd">
                                <a href="#" title="">
                                  <img src="images/ic3.png" alt="" />
                                  <span>Portfolio</span>
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>

                        <div className="product-feed-tab current" id="feed-dd">
                          <div className="posts-section">
                            <div className="post-bar">
                              <div className="post_topbar">
                                <div className="usy-dt">
                                  <img
                                    src="images/resources/us-pic.png"
                                    alt=""
                                  />
                                  <div className="usy-name">
                                    <h3>John Doe</h3>
                                    <span>
                                      <img src="images/clock.png" alt="" />3 min
                                      ago
                                    </span>
                                  </div>
                                </div>
                                <div className="ed-opts">
                                  <a href="#" title="" className="ed-opts-open">
                                    <i className="la la-ellipsis-v" />
                                  </a>
                                  <ul className="ed-options">
                                    <li>
                                      <a href="#" title="">
                                        Edit Post
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#" title="">
                                        Unsaved
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#" title="">
                                        Unbid
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#" title="">
                                        Close
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#" title="">
                                        Hide
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                              <div className="epi-sec">
                                <ul className="descp">
                                  <li>
                                    <img src="images/icon8.png" alt="" />
                                    <span>Epic Coder</span>
                                  </li>
                                  <li>
                                    <img src="images/icon9.png" alt="" />
                                    <span>India</span>
                                  </li>
                                </ul>
                                <ul className="bk-links">
                                  <li>
                                    <a href="#" title="">
                                      <i className="la la-bookmark" />
                                    </a>
                                  </li>
                                  <li>
                                    <a href="#" title="">
                                      <i className="la la-envelope" />
                                    </a>
                                  </li>
                                </ul>
                              </div>
                              <div className="job_descp">
                                <h3>Senior Wordpress Developer</h3>
                                <ul className="job-dt">
                                  <li>
                                    <a href="#" title="">
                                      Full Time
                                    </a>
                                  </li>
                                  <li>
                                    <span>$30 / hr</span>
                                  </li>
                                </ul>
                                <p>
                                  Lorem ipsum dolor sit amet, consectetur
                                  adipiscing elit. Aliquam luctus hendrerit
                                  metus, ut ullamcorper quam finibus at. Etiam
                                  id magna sit amet...{" "}
                                  <a href="#" title="">
                                    view more
                                  </a>
                                </p>
                                <ul className="skill-tags">
                                  <li>
                                    <a href="#" title="">
                                      HTML
                                    </a>
                                  </li>
                                  <li>
                                    <a href="#" title="">
                                      PHP
                                    </a>
                                  </li>
                                  <li>
                                    <a href="#" title="">
                                      CSS
                                    </a>
                                  </li>
                                  <li>
                                    <a href="#" title="">
                                      Javascript
                                    </a>
                                  </li>
                                  <li>
                                    <a href="#" title="">
                                      Wordpress
                                    </a>
                                  </li>
                                </ul>
                              </div>
                              <div className="job-status-bar">
                                <ul className="like-com">
                                  <li>
                                    <a href="#">
                                      <i className="la la-heart" /> Like
                                    </a>
                                    <img src="images/liked-img.png" alt="" />
                                    <span>25</span>
                                  </li>
                                  <li>
                                    <a href="#" title="" className="com">
                                      <img src="images/com.png" alt="" />{" "}
                                      Comment 15
                                    </a>
                                  </li>
                                </ul>
                                <a>
                                  <i className="la la-eye" />
                                  Views 50
                                </a>
                              </div>
                            </div>

                            <div className="post-bar">
                              <div className="post_topbar">
                                <div className="usy-dt">
                                  <img
                                    src="images/resources/us-pic.png"
                                    alt=""
                                  />
                                  <div className="usy-name">
                                    <h3>John Doe</h3>
                                    <span>
                                      <img src="images/clock.png" alt="" />3 min
                                      ago
                                    </span>
                                  </div>
                                </div>
                                <div className="ed-opts">
                                  <a href="#" title="" className="ed-opts-open">
                                    <i className="la la-ellipsis-v" />
                                  </a>
                                  <ul className="ed-options">
                                    <li>
                                      <a href="#" title="">
                                        Edit Post
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#" title="">
                                        Unsaved
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#" title="">
                                        Unbid
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#" title="">
                                        Close
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#" title="">
                                        Hide
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                              <div className="epi-sec">
                                <ul className="descp">
                                  <li>
                                    <img src="images/icon8.png" alt="" />
                                    <span>Front End Developer</span>
                                  </li>
                                  <li>
                                    <img src="images/icon9.png" alt="" />
                                    <span>India</span>
                                  </li>
                                </ul>
                                <ul className="bk-links">
                                  <li>
                                    <a href="#" title="">
                                      <i className="la la-bookmark" />
                                    </a>
                                  </li>
                                  <li>
                                    <a href="#" title="">
                                      <i className="la la-envelope" />
                                    </a>
                                  </li>
                                  <li>
                                    <a href="#" title="" className="bid_now">
                                      Bid Now
                                    </a>
                                  </li>
                                </ul>
                              </div>
                              <div className="job_descp">
                                <h3>Simple Classified Site</h3>
                                <ul className="job-dt">
                                  <li>
                                    <span>$300 - $350</span>
                                  </li>
                                </ul>
                                <p>
                                  Lorem ipsum dolor sit amet, consectetur
                                  adipiscing elit. Aliquam luctus hendrerit
                                  metus, ut ullamcorper quam finibus at. Etiam
                                  id magna sit amet...{" "}
                                  <a href="#" title="">
                                    view more
                                  </a>
                                </p>
                                <ul className="skill-tags">
                                  <li>
                                    <a href="#" title="">
                                      HTML
                                    </a>
                                  </li>
                                  <li>
                                    <a href="#" title="">
                                      PHP
                                    </a>
                                  </li>
                                  <li>
                                    <a href="#" title="">
                                      CSS
                                    </a>
                                  </li>
                                  <li>
                                    <a href="#" title="">
                                      Javascript
                                    </a>
                                  </li>
                                  <li>
                                    <a href="#" title="">
                                      Wordpress
                                    </a>
                                  </li>
                                </ul>
                              </div>
                              <div className="job-status-bar">
                                <ul className="like-com">
                                  <li>
                                    <a href="#">
                                      <i className="la la-heart" /> Like
                                    </a>
                                    <img src="images/liked-img.png" alt="" />
                                    <span>25</span>
                                  </li>
                                  <li>
                                    <a href="#" title="" className="com">
                                      <img src="images/com.png" alt="" />{" "}
                                      Comment 15
                                    </a>
                                  </li>
                                </ul>
                                <a>
                                  <i className="la la-eye" />
                                  Views 50
                                </a>
                              </div>
                            </div>

                            <div className="post-bar">
                              <div className="post_topbar">
                                <div className="usy-dt">
                                  <img
                                    src="images/resources/us-pc2.png"
                                    alt=""
                                  />
                                  <div className="usy-name">
                                    <h3>John Doe</h3>
                                    <span>
                                      <img src="images/clock.png" alt="" />3 min
                                      ago
                                    </span>
                                  </div>
                                </div>
                                <div className="ed-opts">
                                  <a href="#" title="" className="ed-opts-open">
                                    <i className="la la-ellipsis-v" />
                                  </a>
                                  <ul className="ed-options">
                                    <li>
                                      <a href="#" title="">
                                        Edit Post
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#" title="">
                                        Unsaved
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#" title="">
                                        Unbid
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#" title="">
                                        Close
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#" title="">
                                        Hide
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                              <div className="epi-sec">
                                <ul className="descp">
                                  <li>
                                    <img src="images/icon8.png" alt="" />
                                    <span>Epic Coder</span>
                                  </li>
                                  <li>
                                    <img src="images/icon9.png" alt="" />
                                    <span>India</span>
                                  </li>
                                </ul>
                                <ul className="bk-links">
                                  <li>
                                    <a href="#" title="">
                                      <i className="la la-bookmark" />
                                    </a>
                                  </li>
                                  <li>
                                    <a href="#" title="">
                                      <i className="la la-envelope" />
                                    </a>
                                  </li>
                                </ul>
                              </div>
                              <div className="job_descp">
                                <h3>Senior UI / UX designer</h3>
                                <ul className="job-dt">
                                  <li>
                                    <a href="#" title="">
                                      Par Time
                                    </a>
                                  </li>
                                  <li>
                                    <span>$10 / hr</span>
                                  </li>
                                </ul>
                                <p>
                                  Lorem ipsum dolor sit amet, consectetur
                                  adipiscing elit. Aliquam luctus hendrerit
                                  metus, ut ullamcorper quam finibus at. Etiam
                                  id magna sit amet...{" "}
                                  <a href="#" title="">
                                    view more
                                  </a>
                                </p>
                                <ul className="skill-tags">
                                  <li>
                                    <a href="#" title="">
                                      HTML
                                    </a>
                                  </li>
                                  <li>
                                    <a href="#" title="">
                                      PHP
                                    </a>
                                  </li>
                                  <li>
                                    <a href="#" title="">
                                      CSS
                                    </a>
                                  </li>
                                  <li>
                                    <a href="#" title="">
                                      Javascript
                                    </a>
                                  </li>
                                  <li>
                                    <a href="#" title="">
                                      Wordpress
                                    </a>
                                  </li>
                                </ul>
                              </div>
                              <div className="job-status-bar">
                                <ul className="like-com">
                                  <li>
                                    <a href="#">
                                      <i className="la la-heart" /> Like
                                    </a>
                                    <img src="images/liked-img.png" alt="" />
                                    <span>25</span>
                                  </li>
                                  <li>
                                    <a href="#" title="" className="com">
                                      <img src="images/com.png" alt="" />{" "}
                                      Comment 15
                                    </a>
                                  </li>
                                </ul>
                                <a>
                                  <i className="la la-eye" />
                                  Views 50
                                </a>
                              </div>
                            </div>

                            <div className="post-bar">
                              <div className="post_topbar">
                                <div className="usy-dt">
                                  <img
                                    src="images/resources/us-pic.png"
                                    alt=""
                                  />
                                  <div className="usy-name">
                                    <h3>John Doe</h3>
                                    <span>
                                      <img src="images/clock.png" alt="" />3 min
                                      ago
                                    </span>
                                  </div>
                                </div>
                                <div className="ed-opts">
                                  <a href="#" title="" className="ed-opts-open">
                                    <i className="la la-ellipsis-v" />
                                  </a>
                                  <ul className="ed-options">
                                    <li>
                                      <a href="#" title="">
                                        Edit Post
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#" title="">
                                        Unsaved
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#" title="">
                                        Unbid
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#" title="">
                                        Close
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#" title="">
                                        Hide
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                              <div className="epi-sec">
                                <ul className="descp">
                                  <li>
                                    <img src="images/icon8.png" alt="" />
                                    <span>Epic Coder</span>
                                  </li>
                                  <li>
                                    <img src="images/icon9.png" alt="" />
                                    <span>India</span>
                                  </li>
                                </ul>
                                <ul className="bk-links">
                                  <li>
                                    <a href="#" title="">
                                      <i className="la la-bookmark" />
                                    </a>
                                  </li>
                                  <li>
                                    <a href="#" title="">
                                      <i className="la la-envelope" />
                                    </a>
                                  </li>
                                  <li>
                                    <a href="#" title="" className="bid_now">
                                      Bid Now
                                    </a>
                                  </li>
                                </ul>
                              </div>
                              <div className="job_descp">
                                <h3>Ios Shopping mobile app</h3>
                                <ul className="job-dt">
                                  <li>
                                    <span>$300 - $350</span>
                                  </li>
                                </ul>
                                <p>
                                  Lorem ipsum dolor sit amet, consectetur
                                  adipiscing elit. Aliquam luctus hendrerit
                                  metus, ut ullamcorper quam finibus at. Etiam
                                  id magna sit amet...{" "}
                                  <a href="#" title="">
                                    view more
                                  </a>
                                </p>
                                <ul className="skill-tags">
                                  <li>
                                    <a href="#" title="">
                                      HTML
                                    </a>
                                  </li>
                                  <li>
                                    <a href="#" title="">
                                      PHP
                                    </a>
                                  </li>
                                  <li>
                                    <a href="#" title="">
                                      CSS
                                    </a>
                                  </li>
                                  <li>
                                    <a href="#" title="">
                                      Javascript
                                    </a>
                                  </li>
                                  <li>
                                    <a href="#" title="">
                                      Wordpress
                                    </a>
                                  </li>
                                </ul>
                              </div>
                              <div className="job-status-bar">
                                <ul className="like-com">
                                  <li>
                                    <a href="#">
                                      <i className="la la-heart" /> Like
                                    </a>
                                    <img src="images/liked-img.png" alt="" />
                                    <span>25</span>
                                  </li>
                                  <li>
                                    <a href="#" title="" className="com">
                                      <img src="images/com.png" alt="" />{" "}
                                      Comment 15
                                    </a>
                                  </li>
                                </ul>
                                <a>
                                  <i className="la la-eye" />
                                  Views 50
                                </a>
                              </div>
                            </div>

                            <div className="process-comm">
                              <a href="#" title="">
                                <img src="images/process-icon.png" alt="" />
                              </a>
                            </div>
                          </div>
                        </div>

                        <div className="product-feed-tab" id="info-dd">
                          <div className="user-profile-ov">
                            <h3>Overview</h3>
                            <p>
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit. Quisque tempor aliquam felis, nec
                              condimentum ipsum commodo id. Vivamus sit amet
                              augue nec urna efficitur tincidunt. Vivamus
                              consectetur aliquam lectus commodo viverra. Nunc
                              eu augue nec arcu efficitur faucibus. Aliquam
                              accumsan ac magna convallis bibendum. Quisque
                              laoreet augue eget augue fermentum scelerisque.
                              Vivamus dignissim mollis est dictum blandit. Nam
                              porta auctor neque sed congue. Nullam rutrum eget
                              ex at maximus. Lorem ipsum dolor sit amet,
                              consectetur adipiscing elit. Donec eget vestibulum
                              lorem.
                            </p>
                          </div>

                          <div className="user-profile-ov st2">
                            <h3>Experience</h3>
                            <h4>Web designer</h4>
                            <p>
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit. Quisque tempor aliquam felis, nec
                              condimentum ipsum commodo id. Vivamus sit amet
                              augue nec urna efficitur tincidunt. Vivamus
                              consectetur aliquam lectus commodo viverra.
                            </p>
                            <h4>UI / UX Designer</h4>
                            <p>
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit. Quisque tempor aliquam felis, nec
                              condimentum ipsum commodo id.
                            </p>
                            <h4>PHP developer</h4>
                            <p className="no-margin">
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit. Quisque tempor aliquam felis, nec
                              condimentum ipsum commodo id. Vivamus sit amet
                              augue nec urna efficitur tincidunt. Vivamus
                              consectetur aliquam lectus commodo viverra.
                            </p>
                          </div>

                          <div className="user-profile-ov">
                            <h3>Education</h3>
                            <h4>Master of Computer Science</h4>
                            <span>2015 - 2017</span>
                            <p>
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit. Quisque tempor aliquam felis, nec
                              condimentum ipsum commodo id. Vivamus sit amet
                              augue nec urna efficitur tincidunt. Vivamus
                              consectetur aliquam lectus commodo viverra.
                            </p>
                          </div>

                          <div className="user-profile-ov">
                            <h3>Location</h3>
                            <h4>India</h4>
                            <p>151/4 BT Chownk, Delhi</p>
                          </div>

                          <div className="user-profile-ov">
                            <h3>Skills</h3>
                            <ul>
                              <li>
                                <a href="#" title="">
                                  HTML
                                </a>
                              </li>
                              <li>
                                <a href="#" title="">
                                  PHP
                                </a>
                              </li>
                              <li>
                                <a href="#" title="">
                                  CSS
                                </a>
                              </li>
                              <li>
                                <a href="#" title="">
                                  Javascript
                                </a>
                              </li>
                              <li>
                                <a href="#" title="">
                                  Wordpress
                                </a>
                              </li>
                              <li>
                                <a href="#" title="">
                                  Photoshop
                                </a>
                              </li>
                              <li>
                                <a href="#" title="">
                                  Illustrator
                                </a>
                              </li>
                              <li>
                                <a href="#" title="">
                                  Corel Draw
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>

                        <div className="product-feed-tab" id="portfolio-dd">
                          <div className="portfolio-gallery-sec">
                            <h3>Portfolio</h3>
                            <div className="gallery_pf">
                              <div className="row">
                                <div className="col-lg-4 col-md-4 col-sm-6 col-6">
                                  <div className="gallery_pt">
                                    <img
                                      src="images/resources/pf-img1.jpg"
                                      alt=""
                                    />
                                    <a href="#" title="">
                                      <img src="images/all-out.png" alt="" />
                                    </a>
                                  </div>
                                </div>
                                <div className="col-lg-4 col-md-4 col-sm-6 col-6">
                                  <div className="gallery_pt">
                                    <img
                                      src="images/resources/pf-img2.jpg"
                                      alt=""
                                    />
                                    <a href="#" title="">
                                      <img src="images/all-out.png" alt="" />
                                    </a>
                                  </div>
                                </div>
                                <div className="col-lg-4 col-md-4 col-sm-6 col-6">
                                  <div className="gallery_pt">
                                    <img
                                      src="images/resources/pf-img3.jpg"
                                      alt=""
                                    />
                                    <a href="#" title="">
                                      <img src="images/all-out.png" alt="" />
                                    </a>
                                  </div>
                                </div>
                                <div className="col-lg-4 col-md-4 col-sm-6 col-6">
                                  <div className="gallery_pt">
                                    <img
                                      src="images/resources/pf-img4.jpg"
                                      alt=""
                                    />
                                    <a href="#" title="">
                                      <img src="images/all-out.png" alt="" />
                                    </a>
                                  </div>
                                </div>
                                <div className="col-lg-4 col-md-4 col-sm-6 col-6">
                                  <div className="gallery_pt">
                                    <img
                                      src="images/resources/pf-img5.jpg"
                                      alt=""
                                    />
                                    <a href="#" title="">
                                      <img src="images/all-out.png" alt="" />
                                    </a>
                                  </div>
                                </div>
                                <div className="col-lg-4 col-md-4 col-sm-6 col-6">
                                  <div className="gallery_pt">
                                    <img
                                      src="images/resources/pf-img6.jpg"
                                      alt=""
                                    />
                                    <a href="#" title="">
                                      <img src="images/all-out.png" alt="" />
                                    </a>
                                  </div>
                                </div>
                                <div className="col-lg-4 col-md-4 col-sm-6 col-6">
                                  <div className="gallery_pt">
                                    <img
                                      src="images/resources/pf-img7.jpg"
                                      alt=""
                                    />
                                    <a href="#" title="">
                                      <img src="images/all-out.png" alt="" />
                                    </a>
                                  </div>
                                </div>
                                <div className="col-lg-4 col-md-4 col-sm-6 col-6">
                                  <div className="gallery_pt">
                                    <img
                                      src="images/resources/pf-img8.jpg"
                                      alt=""
                                    />
                                    <a href="#" title="">
                                      <img src="images/all-out.png" alt="" />
                                    </a>
                                  </div>
                                </div>
                                <div className="col-lg-4 col-md-4 col-sm-6 col-6">
                                  <div className="gallery_pt">
                                    <img
                                      src="images/resources/pf-img9.jpg"
                                      alt=""
                                    />
                                    <a href="#" title="">
                                      <img src="images/all-out.png" alt="" />
                                    </a>
                                  </div>
                                </div>
                                <div className="col-lg-4 col-md-4 col-sm-6 col-6">
                                  <div className="gallery_pt">
                                    <img
                                      src="images/resources/pf-img10.jpg"
                                      alt=""
                                    />
                                    <a href="#" title="">
                                      <img src="images/all-out.png" alt="" />
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-3">
                      <div className="right-sidebar">
                        <div className="message-btn">
                          <a href="#" title="">
                            <i className="fa fa-envelope" /> Message
                          </a>
                        </div>
                        <div className="widget widget-portfolio">
                          <div className="wd-heady">
                            <h3>Portfolio</h3>
                            <img src="images/photo-icon.png" alt="" />
                          </div>
                          <div className="pf-gallery">
                            <ul>
                              <li>
                                <a href="#" title="">
                                  <img
                                    src="images/resources/pf-gallery1.png"
                                    alt=""
                                  />
                                </a>
                              </li>
                              <li>
                                <a href="#" title="">
                                  <img
                                    src="images/resources/pf-gallery2.png"
                                    alt=""
                                  />
                                </a>
                              </li>
                              <li>
                                <a href="#" title="">
                                  <img
                                    src="images/resources/pf-gallery3.png"
                                    alt=""
                                  />
                                </a>
                              </li>
                              <li>
                                <a href="#" title="">
                                  <img
                                    src="images/resources/pf-gallery4.png"
                                    alt=""
                                  />
                                </a>
                              </li>
                              <li>
                                <a href="#" title="">
                                  <img
                                    src="images/resources/pf-gallery5.png"
                                    alt=""
                                  />
                                </a>
                              </li>
                              <li>
                                <a href="#" title="">
                                  <img
                                    src="images/resources/pf-gallery6.png"
                                    alt=""
                                  />
                                </a>
                              </li>
                              <li>
                                <a href="#" title="">
                                  <img
                                    src="images/resources/pf-gallery7.png"
                                    alt=""
                                  />
                                </a>
                              </li>
                              <li>
                                <a href="#" title="">
                                  <img
                                    src="images/resources/pf-gallery8.png"
                                    alt=""
                                  />
                                </a>
                              </li>
                              <li>
                                <a href="#" title="">
                                  <img
                                    src="images/resources/pf-gallery9.png"
                                    alt=""
                                  />
                                </a>
                              </li>
                              <li>
                                <a href="#" title="">
                                  <img
                                    src="images/resources/pf-gallery10.png"
                                    alt=""
                                  />
                                </a>
                              </li>
                              <li>
                                <a href="#" title="">
                                  <img
                                    src="images/resources/pf-gallery11.png"
                                    alt=""
                                  />
                                </a>
                              </li>
                              <li>
                                <a href="#" title="">
                                  <img
                                    src="images/resources/pf-gallery12.png"
                                    alt=""
                                  />
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </main>

          <footer>
            <div className="footy-sec mn no-margin">
              <div className="container">
                <ul>
                  <li>
                    <a href="#" title="">
                      Help Center
                    </a>
                  </li>
                  <li>
                    <a href="#" title="">
                      Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a href="#" title="">
                      Community Guidelines
                    </a>
                  </li>
                  <li>
                    <a href="#" title="">
                      Cookies Policy
                    </a>
                  </li>
                  <li>
                    <a href="#" title="">
                      Career
                    </a>
                  </li>
                  <li>
                    <a href="#" title="">
                      Forum
                    </a>
                  </li>
                  <li>
                    <a href="#" title="">
                      Language
                    </a>
                  </li>
                  <li>
                    <a href="#" title="">
                      Copyright Policy
                    </a>
                  </li>
                </ul>
                <p>
                  <img src="images/copy-icon2.png" alt="" />
                  Copyright 2017
                </p>
                <img className="fl-rgt" src="images/logo2.png" alt="" />
              </div>
            </div>
          </footer>

          <div className="overview-box" id="create-portfolio">
            <div className="overview-edit">
              <h3>Create Portfolio</h3>
              <form>
                <input
                  type="text"
                  name="pf-name"
                  placeholder="Portfolio Name"
                />
                <div className="file-submit">
                  <input type="file" name="file" />
                </div>
                <div className="pf-img">
                  <img src="images/resources/np.png" alt="" />
                </div>
                <input
                  type="text"
                  name="website-url"
                  placeholder="htp://www.example.com"
                />
                <button type="submit" className="save">
                  Save
                </button>
                <button type="submit" className="cancel">
                  Cancel
                </button>
              </form>
              <a href="#" title="" className="close-box">
                <i className="la la-close" />
              </a>
            </div>
          </div>
        </div>

        <script type="text/javascript" src="js/jquery.min.js" />
        <script type="text/javascript" src="js/popper.js" />
        <script type="text/javascript" src="js/bootstrap.min.js" />
        <script type="text/javascript" src="lib/slick/slick.min.js" />
        <script type="text/javascript" src="js/script.js" />
      </div>
    );
  }
}
