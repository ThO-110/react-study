import React, { Component } from "react";
import PropTypes from "prop-types";
// import PubSub from "pubsub-js";

export default class commentItem extends Component {
  static propTypes = {
    item: PropTypes.object.isRequired,
    index: PropTypes.number.isRequired,
    deleteComment: PropTypes.func.isRequired,
  };

  render() {
    const { userName, commentContent } = this.props.item;
    const { index, deleteComment } = this.props;
    return (
      <div>
        <h3>{`${userName}说：`}</h3>
        <p className="comment-content">{commentContent}</p>
        <button className="delete" onClick={() => deleteComment(index)}>
          删除
        </button>
      </div>
    );
  }
}
