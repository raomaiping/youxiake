import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

import home from "./home";
import order from "./order"
import personalCenter from "./personalCenter";
import around from "./around";
import localhost from "./localhost";
import circle from "./circle"

export default new Router({
  routes: [
    home,
    order,
    personalCenter,
    around,
    localhost,
    circle
  ]
})
