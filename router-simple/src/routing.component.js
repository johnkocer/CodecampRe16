import React, { Component } from "react";
import { Route, NavLink, BrowserRouter } from "react-router-dom";
import Home from "./home.component";
import About from "./about.component";
import Contact from "./contact.component";
class Router extends Component {
  state = {};
  render() {
    return (
      <BrowserRouter>
        <div>
          <NavLink to="/">Home</NavLink>{" "} |&nbsp;
          <NavLink to="/Contact">Contact</NavLink> |&nbsp;
          <NavLink to="/About">About</NavLink>
          <div>
            <Route exact path="/" component={Home} />
            <Route path="/contact" component={Contact} />
            <Route path="/about" component={About} />
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default Router;
