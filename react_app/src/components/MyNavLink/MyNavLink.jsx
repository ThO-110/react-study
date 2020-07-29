import React, { Component } from "react";
import { NavLink } from "react-router-dom";

import "./MyNavLink.css";

export default class MyNavLink extends Component {
  render() {
    return <NavLink id="my-nav" activeClassName="active" {...this.props} />;
  }
}
