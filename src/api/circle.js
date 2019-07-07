

import http from "utils/http.js"

export const cityCircle = ()=>http("get","api/quanzi/get",{type:1})

export const InterestCircle = ()=>http("get","api/quanzi/get",{type:2})