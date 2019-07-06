export default {
    path:"/circle",
    component:()=>import("components/circle"),
    name:"circle",
    redirect:"/circle/cityBody",
    children:[
        {
            path:"cityBody",
            component:()=>import("components/cityBody"),
            name:"cityBody"
        },
        {
            path:"InterestCircle",
            component:()=>import("components/InterestCircle"),
            name:"InterestCircle"
        }
    ]
}