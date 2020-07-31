import React, { Component } from "react";
import "./comment-form.css";
import propTypes from "prop-types";

export default class commentFrom extends Component {
  static propTypes = {
    add: propTypes.func.isRequired,
  };

  state = {
    userName: "",
    commentContent: "",
  };

  submit = (event) => {
    const { userName, commentContent } = this.state;
    if (userName && commentContent) {
      this.props.add({ userName, commentContent });
      this.setState({
        userName: "",
        commentContent: "",
      });
    } else {
      alert("用户名和评论不能为空！");
    }
    event.preventDefault();
  };

  render() {
    const { userName, commentContent } = this.state;
    return (
      <form className="form-container">
        <div className="title">用户名</div>
        <input
          type="text"
          placeholder="用户名"
          value={userName}
          onChange={(event) => this.setState({ userName: event.target.value })}
        />
        <div className="title">评论内容</div>
        <textarea
          id="comment-content"
          placeholder="评论内容"
          cols="35"
          rows="10"
          value={commentContent}
          onChange={(event) =>
            this.setState({ commentContent: event.target.value })
          }
        ></textarea>
        <div className="btn-box">
          <button className="btn-submit" onClick={this.submit}>
            提交
          </button>
        </div>
      </form>
    );
  }
}
