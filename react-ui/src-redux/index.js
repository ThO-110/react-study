import React from "react";
import ReactDOM from "react-dom";

import App from "./components/app/app";
import store from "./redux/store";

function render() {
  ReactDOM.render(<App store={store} />, document.getElementById("root"));
}
// 初始化
render();
// 订阅store值更新，则重绘
store.subscribe(render);
