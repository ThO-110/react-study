import Vue from "vue";
import App from "./App";
import store from "./store";
import router from "./router";
// import './assets/reset.css'
import "./assets/font.css"; //自制字体库
import ElementUI from "element-ui"; //element-ui的全部组件
import "element-ui/lib/theme-chalk/index.css"; //element-ui的css

Vue.use(ElementUI); //使用elementUI
Vue.prototype.$store = store;

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: "#app",
  router,
  components: { App },
  template: "<App/>"
});
