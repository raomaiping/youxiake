import http from "utils/http";

// http://www.youxiake.com/special_getBkdataAjax?id=1828&cateId=1828&page=1
export const getPhotoH = ()=>http("get","/web/special_getBkdataAjax",{
    id:1828,
    cateId:1828,
    page:1
})

// http://www.youxiake.com/special_getBkdataAjax?id=1832&cateId=1832&page=1

export const getPhotoC = ()=>http("get","/web/special_getBkdataAjax",{
    id:1832,
    cateId:1832,
    page:1
})

// http://www.youxiake.com/special_getBkdataAjax?id=1853&cateId=1853&page=1

export const getPhotoO = ()=>http("get","/web/special_getBkdataAjax",{
    id:1853,
    cateId:1853,
    page:1
})