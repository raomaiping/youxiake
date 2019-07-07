<template>
    <!-- 出游天数 -->
            <div class=" v-around-titleall v-around-dayNum">
                <h2>出游天数</h2>
                <ul class="v-around-listall v-dayNumList">
                    <li v-for="(item,index) in theme_tag" :key="index" @click="handleclick(index)" :class="status==index?'active':'' ">{{item.block_alias}}</li>
                    
                </ul>
                <ul class="v-locationList">
                    <li v-for="(item,index) in  theme_lines" :key="index">
                        <a href="">
                            <span class="v-locationListTab"><i>{{item.class_theme_name}}</i> | {{item.jihe}}</span>
                            <img class="v-locationListImg" :src="item.img">
                            <div class="v-locationList-detial">
                                <p>{{item.title}}</p>
                                <div class="v-locationList-text">
                                    <div class="v-locationList-money">￥
                                        <span>{{item.price}}</span>
                                        <span>起</span>
                                    </div>
                                    <div class="v-locationList-day">{{item.time}}</div>
                                </div>
                            </div>
                        </a>
                    </li>
                </ul>
                <div class="v-locationList-more">
                    <a href="" class="v-locationList-morelink">更多活动></a>
                </div>
            </div>
</template>
<script>
import {getAroundMessage} from "api/around";
export default {
    name:"maintitle",
     async created(){
         let aroundData = await getAroundMessage();
        this.theme_lines = aroundData.data.theme_lines.lines.theme_lines;
        this.theme_tag = aroundData.data.theme_lines.lines.theme_tag;
    },
    data(){
        return {
            theme_lines:[],
            theme_tag:[],
            status:''
        }
    },
    methods:{
        handleclick(index){
            this.status = index;
        }
    }
}
</script>

