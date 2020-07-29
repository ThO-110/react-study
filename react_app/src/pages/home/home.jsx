import React, { Component } from "react";
import { NavLink, Switch, Route, Redirect } from "react-router-dom";

import "./home.css";
import News from "../news/news";
import Message from "../message/message";

export default class home extends Component {
  render() {
    return (
      <div className="home-container">
        <ul id="home-nav">
          <li>
            <NavLink to="/home/news">News</NavLink>
          </li>
          <li>
            <NavLink to="/home/message">Message</NavLink>
          </li>
        </ul>
        <div className="content">
          <Switch>
            <Route path="/home/news" component={News} />
            <Route path="/home/message" component={Message} />
            <Redirect to="/home/news" />
          </Switch>
        </div>
      </div>
    );
  }
}
