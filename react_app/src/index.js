import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Redirect } from "react-router-dom";
import { Provider } from "react-redux";

import store from "./redux/store";
import Comment from "./containers/comment/comment";
import Search from "./pages/search/search";
import ImgLazyLoad from "./pages/imgLazyLoad/imgLazyLoad";

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Route path="/imgLazyLoad" component={ImgLazyLoad} />
      <Route path="/comment" component={Comment} />
      <Route path="/search" component={Search} />
      <Redirect to="/comment" />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
