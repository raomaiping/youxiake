import http from "utils/http";

// http://www.youxiake.com/special_getBkdataAjax?id=1828&cateId=1828&page=1
export const getPhotoH = (page)=>http("get","/web/special_getBkdataAjax",{
    id:1828,
    cateId:1828,
    page:page
})

// http://www.youxiake.com/special_getBkdataAjax?id=1832&cateId=1832&page=1

export const getPhotoC = (page)=>http("get","/web/special_getBkdataAjax",{
    id:1832,
    cateId:1832,
    page:page
})

// http://www.youxiake.com/special_getBkdataAjax?id=1853&cateId=1853&page=1

export const getPhotoO = (page)=>http("get","/web/special_getBkdataAjax",{
    id:1853,
    cateId:1853,
    page:page
})



