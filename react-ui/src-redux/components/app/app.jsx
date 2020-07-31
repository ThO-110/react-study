import React, { Component } from "react";

import { increment, decrement } from "../../redux/actions";

export default class app extends Component {
  state = {
    add: 1,
  };

  hanleSelect = () => {
    const add = this.select.value * 1;
    this.setState({ add });
  };

  handleAdd = () => {
    const { add } = this.state;
    // count += add;
    // this.setState({ count });
    this.props.store.dispatch(increment(add));
  };

  handleMinus = () => {
    const { add } = this.state;
    // count -= add;
    // this.setState({ count });
    this.props.store.dispatch(decrement(add));
  };

  handleIncermentIfOdd = () => {
    const { add } = this.state;
    const count = this.props.store.getState();
    if (count % 2 === 1) {
      // count += add;
      // this.setState({ count });
      this.props.store.dispatch(increment(add));
    }
  };

  handleIncermentAsync = () => {
    const { add } = this.state;
    // count += add;
    setTimeout(() => {
      this.props.store.dispatch(increment(add));
    }, 1000);
  };

  render() {
    const count = this.props.store.getState();
    return (
      <div className="app-container">
        <h2>click {count} times</h2>
        <select
          ref={(select) => (this.select = select)}
          onChange={this.hanleSelect}
        >
          <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
        </select>
        &nbsp;
        <button onClick={this.handleAdd}>+</button>&nbsp;
        <button onClick={this.handleMinus}>-</button>&nbsp;
        <button onClick={this.handleIncermentIfOdd}>incerment if odd</button>
        &nbsp;
        <button onClick={this.handleIncermentAsync}>incerment async</button>
      </div>
    );
  }
}
