import React, { Component } from "react";
import Suggestions from "./SuggestionMostViewed";
export default class MostViewedPeople extends Component {
  render() {
    return (
      <div className="widget suggestions full-width">
        <div className="sd-title">
          <h3>Most Viewed People</h3>
        </div>
        <Suggestions />
        <Suggestions />
        <div className="suggestions-list">
          <div className="view-more">
            <a href="#" title="">
              View More
            </a>
          </div>
        </div>
      </div>
    );
  }
}
