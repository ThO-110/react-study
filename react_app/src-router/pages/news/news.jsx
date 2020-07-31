import React, { Component } from "react";

export default class news extends Component {
  state = {
    list: ["first news", "second news", "third news"],
  };
  render() {
    const { list } = this.state;
    return (
      <div>
        {list.map((li, index) => (
          <h4 key={index}>{li}</h4>
        ))}
      </div>
    );
  }
}
