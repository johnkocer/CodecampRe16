import React, { Component } from "react";
class MyForLoops extends Component {
  state = {};

  forLoops() {
    let list = ["Red", "Blue", "Green"];
    // returns list of keys
    for (let i in list) {
      console.log(i); // "0", "1", "2",
    }

    // returns list of values
    for (let i of list) {
      console.log(i); // "Red", "Blue", "Green"
    }
    list.forEach((value, index) => {
      console.log("Index " + index + " : " + value);
    }); // Index 0 : Red  Index 1 : Blue  Index 2 : Green
  }

  render() {
    return <div>{this.forLoops()}</div>;
  }
}

export default MyForLoops;
