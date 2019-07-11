// https://m.youxiake.com/api/search?source_id=202&class_id=0&class_type=&class_level=1&around_type_id=0&around_tag_id=61&site_code=17&sort=0&days=[]&page=1

// https://m.youxiake.com/api/search?source_id=202&class_id=0&class_type=&class_level=1&around_type_id=0&site_code=17&sort=0&days=[1]&page=1


// https://m.youxiake.com/api/channel/around?site_code=17
import http from "utils/http.js"

 export const getAroundMessage = ()=>http("get","/abc/api/channel/around",{site_code:17})


export const getAroundMessage1 = ()=>http("get","/abc/api/search",{
    source_id:202,
    class_id:0,
    class_type:'',
    class_level:1,
    around_type_id:0,
    around_tag_id:61,
    site_code:17,
    sort:0,
    days:'[]',
    page:1
})

export const getAroundMessage2 = ()=>http("get","/abc/api/search",{
    source_id:202,
    class_id:0,
    class_type:'',
    class_level:1,
    around_type_id:0,
    site_code:17,
    sort:0,
    days:'[1]',
    page:1
}) 

// 出游天数
export const getAroundGooutN = (days)=>http("get","/abc/api/channel/theme",{
    source_id:202,
    block_one_id:241,
    block_second_id:days.id,
    day:days.day,
    tag_type:1,
    site_code:17})

// 主题旅游
    export const getAroundMainT = (id)=>http("get","/abc/api/channel/theme",{
        source_id:202,
        block_one_id:235,
        block_second_id:id,
        day:0,
        tag_type:2,
        site_code:17})

    

// https://m.youxiake.com/api/channel/theme?source_id=202&block_one_id=241&block_second_id=321&day=1&tag_type=1&site_code=17

// https://m.youxiake.com/api/channel/theme?source_id=202&block_one_id=241&block_second_id=322&day=2&tag_type=1&site_code=17


// https://m.youxiake.com/api/channel/theme?source_id=202&block_one_id=241&block_second_id=323&day=3&tag_type=1&site_code=17


// https://m.youxiake.com/api/channel/theme?source_id=202&block_one_id=241&block_second_id=324&day=4&tag_type=1&site_code=17



// https://m.youxiake.com/api/channel/theme?source_id=202&block_one_id=235&block_second_id=326&day=0&tag_type=2&site_code=17
// https://m.youxiake.com/api/channel/theme?source_id=202&block_one_id=235&block_second_id=440&day=0&tag_type=2&site_code=17

// https://m.youxiake.com/api/channel/theme?source_id=202&block_one_id=235&block_second_id=325&day=0&tag_type=2&site_code=17

// https://m.youxiake.com/api/channel/theme?source_id=202&block_one_id=235&block_second_id=340&day=0&tag_type=2&site_code=17

// https://m.youxiake.com/api/channel/theme?source_id=202&block_one_id=235&block_second_id=522&day=0&tag_type=2&site_code=17

// https://m.youxiake.com/api/channel/theme?source_id=202&block_one_id=235&block_second_id=529&day=0&tag_type=2&site_code=17