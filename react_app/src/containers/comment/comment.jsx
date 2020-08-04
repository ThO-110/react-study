import React, { Component } from "react";
// import PubSub from "pubsub-js";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import CommentForm from "../../components/comment-form/comment-from";
import CommentList from "../../components/comment-list/comment-list";
import "./comment.css";
import { addComment, deleteComment } from "../../redux/actions";

class Comment extends Component {
  static propTypes = {
    comments: PropTypes.array.isRequired,
    addComment: PropTypes.func.isRequired,
    deleteComment: PropTypes.func.isRequired,
  };

  render() {
    const { comments, addComment, deleteComment } = this.props;
    return (
      <div>
        <div className="head">
          <p>请发表对React的评论</p>
        </div>
        <div className="body">
          <CommentForm id="comment-form" add={addComment} />
          <CommentList
            comments={comments}
            deleteComment={deleteComment}
            id="comment-list"
          />
        </div>
      </div>
    );
  }
}

export default connect((state) => ({ comments: state }), {
  addComment,
  deleteComment,
})(Comment);
