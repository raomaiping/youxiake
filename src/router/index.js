import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

import home from "./home";
import order from "./order"
import personalCenter from "./personalCenter";
import circle from "./circle";
import cityCircle from "./cityCircle";
import destination from "./destination"
import around from "./around";
import localhost from "./localhost";
import travels from "./travels";
import theme from "./theme";

export default new Router({
  routes: [
    home,
    order,
    personalCenter,
    circle,
    cityCircle,
    destination,
    around,
    localhost,
    travels,
    theme
  ]
})
