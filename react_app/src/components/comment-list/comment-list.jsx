import React, { Component } from "react";
import "./comment-list.css";
import PropTypes from "prop-types";
import CommentItem from "../comment-item/comment-item";

export default class commentList extends Component {
  static propTypes = {
    comments: PropTypes.array.isRequired,
    deleteComment: PropTypes.func.isRequired,
  };

  state = {
    hasComments: !!this.props.comments.length,
  };

  componentDidUpdate() {
    const { comments } = this.props;
    let { hasComments } = this.state;
    if (!comments.length && hasComments) {
      hasComments = false;
      this.setState({ hasComments });
    } else if (comments.length && !hasComments) {
      hasComments = true;
      this.setState({ hasComments });
    }
  }

  render() {
    const { hasComments } = this.state;
    const { comments, deleteComment } = this.props;
    const list = (
      <ul>
        {comments.map((item, index) => (
          <li key={index}>
            <CommentItem
              item={item}
              index={index}
              deleteComment={deleteComment}
            />
          </li>
        ))}
      </ul>
    );
    return (
      <div className="list-container">
        <h3>评论回复：</h3>
        {hasComments ? list : <h3>暂无评论！</h3>}
      </div>
    );
  }
}
