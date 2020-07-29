import React, { Component } from "react";
import PubSub from "pubsub-js";

import CommentForm from "../../components/comment-form/comment-from";
import CommentList from "../../components/comment-list/comment-list";
import "./comment.css";

export default class comment extends Component {
  state = {
    comments: [
      {
        userName: "XXX",
        commentContent: "something useful...",
      },
      {
        userName: "yyy",
        commentContent: "something useful...",
      },
    ],
  };

  add = (comment) => {
    let { comments } = this.state;
    comments.unshift(comment);
    this.setState({ comments });
  };

  delete = (index) => {
    let { comments } = this.state;
    comments.splice(index, 1);
    this.setState({ comments });
  };

  componentDidMount() {
    PubSub.subscribe("delete", (msg, index) => {
      this.delete(index);
    });
  }

  render() {
    const { comments } = this.state;
    return (
      <div>
        <div className="head">
          <p>请发表对React的评论</p>
        </div>
        <div className="body">
          <CommentForm id="comment-form" add={this.add} />
          <CommentList
            comments={comments}
            delete={this.delete}
            id="comment-list"
          />
        </div>
      </div>
    );
  }
}
