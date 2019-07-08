import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

import home from "./home";
import order from "./order"
import youlun from "./youlun"
import personalCenter from "./personalCenter";
import visas from "./visas";
import jinxuan from "./jinxuan";

export default new Router({
  routes: [
    home,
    order,
    personalCenter,
    youlun,
    visas,
    jinxuan,
  ]
})
