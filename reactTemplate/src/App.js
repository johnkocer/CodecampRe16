import React, { Component } from "react";
import {Route,NavLink,BrowserRouter } from  "react-router-dom";
import  HomeComponent from './home/home.component';
import  AboutComponent from './about/about.component';
import  ContactComponent from './contact/contact.component';
import './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <NavLink exact to="/">Home</NavLink>{" "} |&nbsp;
          <NavLink to="/about">About</NavLink> |&nbsp;
          <NavLink to="/contact">Contact</NavLink> |&nbsp;
          <div>
        <hr></hr>

          <Route exact path="/" component={HomeComponent} /> 
            <Route path="/about" component={AboutComponent} />
            <Route path="/contact" component={ContactComponent} />
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
