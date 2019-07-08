// https://h5.youxiake.com/api/nav/title?h5_id=450

import http from "utils/http.js"

export const getCompetition = ()=>http("get","/h5/api/nav/title",{h5_id:450});

// https://h5.youxiake.com/api/getdata?id=450&uid=0&mark=https://h5.youxiake.com/hz/450

export const getCompetitionList = ()=>http("get","/h5/api/getdata",{
    id:450,
    uid:0,
    mark:"https://h5.youxiake.com/hz/450"
})