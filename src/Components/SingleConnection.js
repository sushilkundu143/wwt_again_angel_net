import React, { Component } from "react";

export default class SingleConnectionProfile extends Component {
  render() {
    return (
      <div className="col-lg-3 col-md-4 col-sm-6">
        <div className="company_profile_info">
          <div className="company-up-info">
            <img src="images/resources/cmp-icon1.png" alt="" />
            <h3>Facebook Inc.</h3>
            <h4>Establish Feb, 2004</h4>
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
            </ul>
          </div>
          <a href="#" title="" className="view-more-pro">
            View Profile
          </a>
        </div>
      </div>
    );
  }
}
