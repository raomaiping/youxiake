<template>
   <div class="mUserCenterRecommend__body">

         <a href="#" class="mUserCenterRecommend__line" v-for="(item, index) in userRecommendList" :key ="index">
                    <div class="line__pic">
                        <img :src="item.img" alt="">
                        <div class="line__type">{{item.place_label}}</div>
                    </div>
                    <div class="line__title">{{item.name}}</div>
                    <div class="line__msg">
                        <div class="line__price"><span>￥</span><b>{{item.pid/10}}</b>起</div>
                        <div class="line__days">{{item.days}}</div>
                    </div>
                </a>

    </div>
</template>

<script>


import {getUserRecommend} from "api/travel.js";
import {getOnlineServer} from "api/travel.js";


import { log } from 'util';
export default {
    name:"userRecommend",
    async created(){  
        let data = await getUserRecommend();
        this.userRecommendList = data.data
        console.log(getOnlineServer());
        
        
        
    },
    data(){
        return{
            userRecommendList:[]
        }
    }

}
</script>

