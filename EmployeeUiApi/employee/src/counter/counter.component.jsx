import React, { Component } from "react";

class CounterComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentCount: 0
    };
  }

  incrementCounter = () => {
    let count = this.state.currentCount + 1;
    this.setState({ currentCount: count });
  };

  render() {
    return (
      <div>
        <h1>Counter</h1>
        <p>This is a simple example of an Angular component.</p>
        <p>
          Current count: <strong>{this.state.currentCount}</strong>
        </p>
        <button className="btn-sm btn-success" onClick={this.incrementCounter}>
          Increment
        </button>
      </div>
    );
  }
}

export default CounterComponent;
