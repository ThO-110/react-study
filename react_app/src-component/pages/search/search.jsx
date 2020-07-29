import React, { Component } from "react";
import "./search.css";
import logo from "../../logo.svg";
import axios from "axios";
import LazyLoad from "react-lazyload";

export default class search extends Component {
  state = {
    searchKey: "",
    userList: [],
    loading: false,
  };

  handleSearch = () => {
    const { searchKey } = this.state;
    const url = `https://api.github.com/search/users?q=${searchKey}`;
    if (searchKey) {
      this.setState({ loading: true });
      axios
        .get(url)
        .then((res) => {
          if (res.data && res.data.items.length) {
            this.setState({ loading: false });

            const { items } = res.data;
            let userList = [];
            items.map((item) => {
              userList.push({
                userName: item.login,
                avatar: item.avatar_url,
                htmlUrl: item.html_url,
              });
            });
            this.setState({ userList });
            console.log(userList);
          }
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  handleImgError = (event) => {
    console.log(event);
  };

  render() {
    const { searchKey, userList, loading } = this.state;
    return (
      <div className="search-container">
        <div className="head">
          <h3>Search Github Users</h3>
          <input
            type="text"
            className="inp"
            value={searchKey}
            onChange={(event) => {
              this.setState({ searchKey: event.target.value.trim() });
            }}
          />
          <button className="btn" onClick={this.handleSearch}>
            Search
          </button>
        </div>
        <LazyLoad once height={280} placeholder={<img src={logo} alt="logo" />}>
          <div className="body">
            {loading ? (
              <h2>Loading...</h2>
            ) : userList.length ? (
              userList.map((user, index) => (
                <a className="img-box" href={user.htmlUrl} key={index}>
                  <img
                    className="img"
                    src={user.avatar}
                    onError={this.handleImgError}
                    alt={user.userName}
                  />
                  <p className="user-name">{user.userName}</p>
                </a>
              ))
            ) : (
              <h2 className="tips">Enter name to search...</h2>
            )}
          </div>
        </LazyLoad>
      </div>
    );
  }
}
