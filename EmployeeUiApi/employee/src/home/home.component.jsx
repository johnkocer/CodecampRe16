import React, { Component } from "react";
class HomeComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <h5>HOME | Hello, world!</h5>
        <p>Welcome to your new single-page application.</p>
        Copyright 2019 (c) SmartIT. All rights reserved.
      </div>
    );
  }
}
export default HomeComponent;
