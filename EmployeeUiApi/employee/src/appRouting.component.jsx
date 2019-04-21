import React, { Component } from "react";
import {Route,NavLink,BrowserRouter } from  "react-router-dom";
import  HomeComponent from './home/home.component';
import  CounterComponent from './counter/counter.component';
import  EmployeeComponent from './employee/employee.component';
import  FetchDataComponent from './fetch-data/fetchdata.component';

class AppRoutingComponent extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <NavLink to="/home">Home</NavLink>{" "} |&nbsp;
          <NavLink to="/counter">Counter</NavLink> |&nbsp;
          <NavLink to="/fetchData">Fetch Data</NavLink> |&nbsp;
          <NavLink exact to="/">Employee</NavLink>
          <div>
            <Route exact path="/" component={EmployeeComponent} />
            <Route path="/counter" component={CounterComponent} />
            <Route path="/home" component={HomeComponent} />
            <Route path="/fetchData" component={FetchDataComponent} />
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default AppRoutingComponent;
