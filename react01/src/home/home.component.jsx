import React, { Component } from "react";
import logo from "../logo.svg";
import rose from "../images/BlueRose.jpg";
class HomeComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imagePath: "./BlueRose.jpg",
      isDisabled: false
    };
  }

  togle = () => {
      this.setState(
          {isDisabled : !this.state.isDisabled}
      )
  }
  render() {
    return (
      <div>
        Property Binding - Import the Image then use it
        <br />
        <img src={rose} />
        <br />Property Binding - use require
        <br />
        <img src={require("../images/BlueRose.jpg")} />
        <div className="logo">
          <img src={logo} width="300" height="150" />
        </div>
        <br />
        {this.state.isDisabled}
        <button onClick={this.togle} disabled={this.state.isDisabled}>
          Click Me
        </button>
        <button onClick={this.togle} disabled={!this.state.isDisabled}>
          Click Me
        </button>
      </div>
    );
  }
}

export default HomeComponent;
