import http from "utils/http"

// https://m.youxiake.com/shop/index_api
export const getShopping = ()=>http("get","/abc/shop/index_api",{});