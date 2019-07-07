

import http from "utils/http.js"

//圈子
export const cityCircle = ()=>http("get","api/quanzi/get",{type:1})

export const InterestCircle = ()=>http("get","api/quanzi/get",{type:2})

//城市圈
export const QzId = ()=>http("get","api/quanzi/lastmember",{quanziId:1,iPageSize:5})

export const cityQ = ()=>http("get","api/quanzi/article",{type:3,page:1,iPageSize:10,quanziId:1})