import React, { Component } from "react";
import { Link } from "react-router-dom";
import UserProfile from "./UserProfile";
import PostJob from "./PostJob";
import Typography from "@material-ui/core/Typography";
import PostBar from "./PostBar";
import MostViewedPeople from "./MostViewedPeople";
import SuggestionCarousel from "./SuggestionCarousel";
export default class Home extends Component {
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
                      <a href=" #" title="" className="not-box-open">
                        <span>
                          <img src="images/icon6.png" alt="" />
                        </span>{" "}
                        Messages
                      </a>
                      <div className="notification-box msg">
                        <div className="nt-title">
                          <h4>Setting</h4>
                          <a href=" #" title="">
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
                                <a href=" messages.html" title="">
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
                                <a href=" messages.html" title="">
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
                            <a href=" messages.html" title="">
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
                          <a href=" #" title="">
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
                                <a href=" #" title="">
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
                                <a href=" #" title="">
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

          <main>
            <div className="main-section">
              <div className="container">
                <div className="main-section-data">
                  <div className="row">
                    <div className="col-lg-3 col-md-4 pd-left-none no-pd">
                      <div className="main-left-sidebar no-margin">
                        <div id="UserProfile">
                          <UserProfile />
                        </div>
                        <div className="tags-sec full-width">
                          <span class="badge badge-pill badge-secondary">Investment</span>
                          <span class="badge badge-pill badge-secondary">Networking</span>
                          <span class="badge badge-pill badge-secondary">Teaching</span>
                          <span class="badge badge-pill badge-secondary">Startup</span>
                          <span class="badge badge-pill badge-secondary">Incubator</span>
                          <span class="badge badge-pill badge-secondary">Accelerator</span>
                          <span class="badge badge-pill badge-secondary">Mentoring</span>
                          <span class="badge badge-pill badge-secondary">Dialogues</span>
                          <span class="badge badge-pill badge-secondary">Events</span>
                          <span class="badge badge-pill badge-secondary">Global Business</span>
                          <span class="badge badge-pill badge-secondary">Social Work</span>
                          <span class="badge badge-pill badge-secondary">Games</span>
                          <span class="badge badge-pill badge-secondary">Innovation</span>
                          <span class="badge badge-pill badge-secondary">Speaker</span>
                          <span class="badge badge-pill badge-secondary">Franchise</span>
                          <span class="badge badge-pill badge-secondary">Partnership</span>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-8 no-pd">
                      <div className="main-ws-sec">
                        <div id="PostJob">
                          <PostJob />
                        </div>

                        <div className="posts-section">
                          <div id="PostBar">
                            <PostBar />
                          </div>

                          <div id="topProfiles" />
                          <div id="posty" />
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-3 pd-right-none no-pd">
                      <div className="right-sidebar">
                        <div id="TopPosts" />

                        <div id="PostSuggestions" />

                        <div id="MostViewedPeople">
                          <MostViewedPeople />
                        </div>
                        <div className="tags-sec full-width">
                          <ul>
                            <li>
                              <a href="#" title="">
                                Help Center
                              </a>
                            </li>
                            <li>
                              <a href="#" title="">
                                About
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
                                Language
                              </a>
                            </li>
                            <li>
                              <a href="#" title="">
                                Copyright Policy
                              </a>
                            </li>
                          </ul>
                          <div className="cp-sec">
                            <p>
                              <img src="images/cp.png" alt="" />
                              Copyright 2017
                            </p>
                          </div>
                        </div>
                        <div id="SuggestionsCarousel">
                          {" "}
                          <SuggestionCarousel />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </main>

          <div className="post-popup pst-pj">
            <div className="post-project">
              <h3>Post a project</h3>
              <div className="post-project-fields">
                <form>
                  <div className="row">
                    <div className="col-lg-12">
                      <input type="text" name="title" placeholder="Title" />
                    </div>
                    <div className="col-lg-12">
                      <div className="inp-field">
                        <select>
                          <option>Category</option>
                          <option>Category 1</option>
                          <option>Category 2</option>
                          <option>Category 3</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <input type="text" name="skills" placeholder="Skills" />
                    </div>
                    <div className="col-lg-12">
                      <div className="price-sec">
                        <div className="price-br">
                          <input
                            type="text"
                            name="price1"
                            placeholder="Price"
                          />
                          <i className="la la-dollar" />
                        </div>
                        <span>To</span>
                        <div className="price-br">
                          <input
                            type="text"
                            name="price1"
                            placeholder="Price"
                          />
                          <i className="la la-dollar" />
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <textarea name="description" placeholder="Description" />
                    </div>
                    <div className="col-lg-12">
                      <ul>
                        <li>
                          <button className="active" type="submit" value="post">
                            Post
                          </button>
                        </li>
                        <li>
                          <a href="#" title="">
                            Cancel
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </form>
              </div>

              <a href="#" title="">
                <i className="la la-times-circle-o" />
              </a>
            </div>
          </div>

          <div className="post-popup job_post">
            <div className="post-project">
              <h3>Post a job</h3>
              <div className="post-project-fields">
                <form>
                  <div className="row">
                    <div className="col-lg-12">
                      <input type="text" name="title" placeholder="Title" />
                    </div>
                    <div className="col-lg-12">
                      <div className="inp-field">
                        <select>
                          <option>Category</option>
                          <option>Category 1</option>
                          <option>Category 2</option>
                          <option>Category 3</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <input type="text" name="skills" placeholder="Skills" />
                    </div>
                    <div className="col-lg-6">
                      <div className="price-br">
                        <input type="text" name="price1" placeholder="Price" />
                        <i className="la la-dollar" />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="inp-field">
                        <select>
                          <option>Full Time</option>
                          <option>Half time</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <textarea name="description" placeholder="Description" />
                    </div>
                    <div className="col-lg-12">
                      <ul>
                        <li>
                          <button className="active" type="submit" value="post">
                            Post
                          </button>
                        </li>
                        <li>
                          <a href="#" title="">
                            Cancel
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </form>
              </div>

              <a href="#" title="">
                <i className="la la-times-circle-o" />
              </a>
            </div>
          </div>
        </div>

        <script type="text/javascript" src="js/jquery.min.js" />
        <script type="text/javascript" src="js/popper.js" />
        <script type="text/javascript" src="js/bootstrap.min.js" />
        <script type="text/javascript" src="js/jquery.mCustomScrollbar.js" />
        <script type="text/javascript" src="lib/slick/slick.min.js" />
        <script type="text/javascript" src="js/scrollbar.js" />
        <script type="text/javascript" src="js/script.js" />
      </div>
    );
  }
}
