// https://m.youxiake.com/api/search?source_id=202&class_id=0&class_type=&class_level=1&around_type_id=0&around_tag_id=61&site_code=17&sort=0&days=[]&page=1

// https://m.youxiake.com/api/search?source_id=202&class_id=0&class_type=&class_level=1&around_type_id=0&site_code=17&sort=0&days=[1]&page=1


// https://m.youxiake.com/api/channel/around?site_code=17
import http from "utils/http.js"

 export const getAroundMessage = ()=>http("get","/api/channel/around",{site_code:17})


export const getAroundMessage1 = ()=>http("get","/api/search",{
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

export const getAroundMessage2 = ()=>http("get","/api/search",{
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
 

