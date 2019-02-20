import React, { Component } from "react";
import SinglePost from "./SinglePosts";

export default class PostBar extends Component {
  render() {
    return (
      <div>
        <SinglePost />
        <SinglePost />
      </div>
    );
  }
}
