import React, { Component } from 'react';
import './App.css';
import TodoComponent from './todo.jsx'

class App extends Component {
  render() {
    return (
      <div className="App">
        Hi John
        <hr></hr>
        <TodoComponent></TodoComponent>
      </div>
    );
  }
}

export default App;
