import http from "utils/http.js";
import { sign } from "crypto";


// https://m.youxiake.com/api/channel/wanle
export const getlocalSport = ()=>http("get","/abc/api/channel/wanle",{});

export const getlocalSportHot = (sign)=>http("get","/abc/api/channel/theme",{
    source_id:205,
    tag_type:3,
    site_code:0,
    wanle_sign:sign});

export const getlocalSportEare = (id)=>http("get","/abc/api/channel/theme",{
    source_id:205,
    block_one_id:293,
    block_second_id:id,
    day:0,
    tag_type:3,
    site_code:0});

// https://m.youxiake.com/api/channel/theme?source_id=205&tag_type=3&site_code=0&wanle_sign=1

// https://m.youxiake.com/api/channel/theme?source_id=205&block_one_id=293&block_second_id=445&day=0&tag_type=3&site_code=0

// https://m.youxiake.com/api/channel/theme?source_id=205&block_one_id=293&block_second_id=446&day=0&tag_type=3&site_code=0



// https://m.youxiake.com/api/channel/theme?source_id=205&block_one_id=294&block_second_id=461&day=0&tag_type=3&site_code=0
// https://m.youxiake.com/api/channel/theme?source_id=205&tag_type=3&site_code=0&wanle_sign=2