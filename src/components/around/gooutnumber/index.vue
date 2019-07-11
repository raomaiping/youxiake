<template>
    <!-- 出游天数 -->
            <div class=" v-around-titleall v-around-dayNum">
                <h2>出游天数</h2>
                <ul class="v-around-listall v-dayNumList">
                    <li v-for="(item,index) in Gtheme_tag" :key="index" @click="handleclick(index)" :class="status==index?'active':'' ">{{item.block_alias}}</li>
                </ul>
                <ul class="v-locationList">
                    <li v-for="(item,index) in  Gtheme_lines" :key="index">
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
import {getAroundMessage,getAroundGooutN} from "api/around";
export default {
    name:"maintitle",
    data(){
        return {
            status:0,
            Gtheme_lines: [],  //出游天数
            Gtheme_tag: [],  //出游天数
        }
    },
    methods:{
       async handleclick(index){
            this.status = index;
            
                let aroundData = await getAroundGooutN({id:this.Gtheme_tag[this.status].id,day:this.Gtheme_tag[this.status].day});
                this.Gtheme_lines = aroundData.data.theme_lines;
         
        }, 
    },
    async created(){
        let tags = await getAroundMessage();
        this.Gtheme_tag = tags.data.days.lines.theme_tag;
            let aroundData = await getAroundGooutN({id:this.Gtheme_tag[this.status].id,day:this.Gtheme_tag[this.status].day});
            this.Gtheme_lines = aroundData.data.theme_lines;
        
    }

}
</script>

