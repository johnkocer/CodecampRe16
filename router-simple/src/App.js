import React, { Component } from "react";
import "./App.css";
import Router from "./routing.component";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h3>Router - Simple</h3>
        <Router />
        <hr />
        Provided by -SmartIT, John Kocer
      </div>
    );
  }
}

export default App;
