import http from "utils/http.js";


// https://m.youxiake.com/api/channel/wanle
export const getlocalSport = ()=>http("get","/abc/api/channel/wanle",{});
