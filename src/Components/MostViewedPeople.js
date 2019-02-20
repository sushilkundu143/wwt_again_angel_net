import React, { Component } from "react";
import Suggestions from "./SuggestionMostViewed";
export default class MostViewedPeople extends Component {
  render() {
    return (
      <div class="widget suggestions full-width">
        <div class="sd-title">
          <h3>Most Viewed People</h3>
          <i class="la la-ellipsis-v" />
        </div>
        <Suggestions />
        <Suggestions />
        <div class="suggestions-list">
          <div class="view-more">
            <a href="#" title="">
              View More
            </a>
          </div>
        </div>
      </div>
    );
  }
}
