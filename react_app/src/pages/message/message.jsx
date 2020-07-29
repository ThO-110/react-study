import React, { Component } from "react";
import { Route, NavLink } from "react-router-dom";

import "./message.css";
import MessageDetail from "../message-detail/message-detail";

export default class message extends Component {
  state = {
    list: [],
  };

  componentDidMount() {
    this.sendData = setTimeout(() => {
      this.setState({
        list: [
          { id: 1, title: "message 01" },
          { id: 3, title: "message 03" },
          { id: 5, title: "message 05" },
          { id: 7, title: "message 07" },
        ],
      });
    }, 1000);
  }
  // aaa

  componentWillUnmount() {
    clearTimeout(this.sendData);
  }

  render() {
    const { list } = this.state;
    return (
      <div className="message-container">
        <ul className="message-link">
          {list.map((li, index) => (
            <li key={index}>
              <NavLink to={`/home/message/${li.id}`}>{li.title}</NavLink>
            </li>
          ))}
        </ul>
        <div className="message-detail">
          <Route path="/home/message/:id" component={MessageDetail} />
        </div>
      </div>
    );
  }
}
