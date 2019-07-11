import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

import home from "./home";
import city from "./city";
import order from "./order"
import youlun from "./youlun"
import personalCenter from "./personalCenter";
import visas from "./visas";
import jinxuan from "./jinxuan";
import circle from "./circle";
import cityCircle from "./cityCircle";
import destination from "./destination"
import around from "./around";
import localhost from "./localhost";
import competition from "./competition";
import photo from "./photo";
import travels from "./travels";
import theme from "./theme";
import shopping from "./shopping";


export default new Router({
  routes: [
    {
      path:"/",
      redirect:"/home"
    },
    city,
    home,
    order,
    personalCenter,
    youlun,
    visas,
    jinxuan,
    circle,
    cityCircle,
    destination,
    around,
    localhost,
    competition,
    photo,
    travels,
    theme,
    shopping
  ]
})
