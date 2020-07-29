import React, { Component } from "react";
import PropTypes from "prop-types";
import PubSub from "pubsub-js";

export default class commentItem extends Component {
  static propTypes = {
    item: PropTypes.object.isRequired,
    index: PropTypes.number.isRequired,
  };

  delete = () => {
    PubSub.publish("delete", this.props.index);
  };

  render() {
    const { userName, commentContent } = this.props.item;
    return (
      <div>
        <h3>{`${userName}说：`}</h3>
        <p className="comment-content">{commentContent}</p>
        <button className="delete" onClick={this.delete}>
          删除
        </button>
      </div>
    );
  }
}
