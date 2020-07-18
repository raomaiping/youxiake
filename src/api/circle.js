

import http from "utils/http.js"

//圈子
export const cityCircle = ()=>http("get","/lai/api/quanzi/get",{type:1})

export const InterestCircle = ()=>http("get","/lai/api/quanzi/get",{type:2})

//城市圈
export const QzId = ()=>http("get","/lai/api/quanzi/lastmember",{quanziId:1,iPageSize:5})

export const cityQ = ()=>http("get","/lai/api/quanzi/article",{type:3,page:1,iPageSize:10,quanziId:1})

//目的地
export const month = ()=>http("get","/lai/api/mdd/themeRecommendNew",{type:1})

export const themeList = ()=>http("get","/lai/api/mdd/themeRecommendNew",{type:0})

//游记
export const articles = ()=>http("get","/lai/api/home/articleList",{type:1})

//主题游
export const Zty = ()=>http("get","/abc/api/zty")