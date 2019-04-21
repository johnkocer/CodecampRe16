import React, { Component } from "react";
import "./App.css";
import MyArraysObjects from './arrayOfObject';
import MyInheritence from './myInheritence';
import MyList from './myList';

class App extends Component {
 
  render() {
    return (
      <div className="App">
        {
      //<MyInheritence></MyInheritence>
      <MyList></MyList>
      }
      </div>
    );
  }
}

export default App;
