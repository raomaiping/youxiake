

import http from "utils/http.js"

//圈子
export const cityCircle = ()=>http("get","/lai/api/quanzi/get",{type:1})

export const InterestCircle = ()=>http("get","/lai/api/quanzi/get",{type:2})

//城市圈
export const QzId = ()=>http("get","/lai/api/quanzi/lastmember",{quanziId:1,iPageSize:5})

export const cityQ = (page)=>http("get","/lai/api/quanzi/article",{type:3,page:page,iPageSize:10,quanziId:1})

//目的地
export const month = ()=>http("get","/lai/api/mdd/themeRecommendNew",{type:1})

export const themeList = ()=>http("get","/lai/api/mdd/themeRecommendNew",{type:0})

export const Mdd = (month)=>http("get","/lai/api/mdd/themeRecommendNew",{theme:month ,type:2})

//游记      
export const articles = (page)=>http("get","/lai/api/home/articleList",{type:page})

export const topArticle = ()=>http("get","/lai/api/home/topArticle")
//主题游        https://m.youxiake.com/api/channel/cn

export const Zty = ()=>http("get","/abc/api/zty")

export const TP = ()=>http("get","/abc/api/channel/cn")









