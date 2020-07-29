import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import "./app.css";
import Home from "../../pages/home/home";
import About from "../../pages/about/about";
import MyNavLink from "../../components/MyNavLink/MyNavLink";

export default class app extends Component {
  render() {
    return (
      <div>
        <div className="head">
          <h3>React Router Demo</h3>
        </div>
        <div className="body">
          <div className="nav">
            <MyNavLink to="/about">About</MyNavLink>
            <MyNavLink to="/home">Home</MyNavLink>
          </div>
          <div className="content">
            <Switch>
              <Route path="/about" component={About} />
              <Route path="/home" component={Home} />
              <Redirect to="/home" />
            </Switch>
          </div>
        </div>
      </div>
    );
  }
}
