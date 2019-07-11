import http from "utils/http.js"

// 游轮接口1
// https://m.youxiake.com/api/search?source_id=202&class_id=0&class_type=&class_level=1&around_type_id=0&around_tag_id=61&site_code=17&sort=0&days=[]&page=1

export const getTravelYoulun = ()=>http("get","/abc/api/search",{
    source_id:202,
    class_id:0,
    class_type:'',
    class_level:1,
    around_type_id:0,
    around_tag_id:61,
    site_code:17,
    sort:0,
    days:[],
    page:1
})



// 游轮接口2
// https://m.youxiake.com/api/search/typeclass?keyword=%E9%82%AE%E8%BD%AE

export const getTravelList = ()=>http("get","/abc/api/search/typeclass",{
    keyword:"%E9%82%AE%E8%BD%AE",

})

// 用户中心接口 

// 1.用户推荐// https://m.youxiake.com/api/lines/userrecommends

export const getUserRecommend = ()=>http("get","/abc/api/lines/userrecommends")

// 2.在线客服//https://m.youxiake.com/usercenter/onlinekefu
export const getOnlineServer = ()=>http("get","/abc/usercenter/onlinekefu")


// 签证接口
// https://m.youxiake.com/visas/get-index

export const getVisaIndex = ()=>http("get","/visas/get-index")

//jinxuan页面接口
// https://h5.youxiake.com/api/getdata?id=768&uid=0&mark=https://h5.youxiake.com/hz/768

export const getjinxuan = ()=>http("get","/h5/api/getdata",{
    id:768,
    uid:0,
    mark:"https://h5.youxiake.com/hz/768",

})

// 主页接口 
// https://m.youxiake.com/api/index?random=1562568120042


export const getHomeIndex = ()=>http("get","/abc/api/index",{
    random:"1562568120042"
})

// https://m.youxiake.com/api/lines?class_region_id=2&tag_id=0&page=1
// 国内游推荐接口
export const getHomeLines = ()=>http("get","/abc/api/lines",{
    class_region_id:2,
    tag_id:0,
    page:1,

})

// https://m.youxiake.com/api/lines?class_region_id=3&tag_id=0&page=1
//过境游推荐接口
export const getHomeLines2 = ()=>http("get","/abc/api/lines",{
    class_region_id:3,
    tag_id:0,
    page:1,

})




export const getMovieComm = ()=>http("get","/api/movieComingList",{cityId:10})

// 搜索接口

export const getTravelSearch = (val)=>http("get","/abc/api/search",{
    keyword:val,
    page:1,
    class_id:0,
    class_id_p:0,
    class_type:'',
    class_level:1,
    sort:0,
    days:"[]",
    start_time:NaN,
    end_time:NaN,
    price_min:'',
    price_max:'',
    discounts:-1,
    site_code:17,
    tour_id:'',
    spm:'',
    random:1562731172988,

})
















// export const search = ()=>http("get","/movie/api/searchList",
// {
// cityId:10,
// // kw:"周星驰"
// })  