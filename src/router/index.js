import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

import home from "./home";
import order from "./order"
import personalCenter from "./personalCenter";
import circle from "./circle";
import cityCircle from "./cityCircle";
import destination from "./destination"

export default new Router({
  routes: [
    home,
    order,
    personalCenter,
    circle,
    cityCircle,
    destination,

  ]
})
