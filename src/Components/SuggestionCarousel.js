import React, { Component } from "react";

export default class SuggestionCarousel extends Component {
  render() {
    return (
      <div>
        <div className="top-profiles">
          <div className="pf-hd">
            <h3>Suggestions</h3>
            <i className="la la-ellipsis-v" />
          </div>
          <div className="profiles-slider">
            <div className="user-profy">
              <img src="images/resources/user1.png" alt="" />
              <h3>John Doe</h3>
              <span>Graphic Designer</span>
              <ul>
                <li>
                  <a href="#" title="" className="followw">
                    Follow
                  </a>
                </li>
                <li>
                  <a href="#" title="" className="envlp">
                    <img src="images/envelop.png" alt="" />
                  </a>
                </li>
                <li>
                  <a href="#" title="" className="hire">
                    hire
                  </a>
                </li>
              </ul>
              <a href="#" title="">
                View Profile
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
