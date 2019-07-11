export default {
    path:"/home",
    component:()=>import("views/home"),
    name:"home",
    children:[
        {
            path:"domesticTravel",
            component:()=>import("components/domesticTravel"),
            name:"domesticTravel"
        },

                {
            path:"outboundTravel",
            component:()=>import("components/outboundTravel"),
            name:"outboundTravel"
        },
       

    ]
}