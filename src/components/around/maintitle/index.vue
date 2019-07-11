<template>
     <!-- 主题旅游 -->
            <div class="v-around-titleall v-around-main">
                <h2>主题旅游</h2>
                <ul class="v-around-listall v-around-main-list">
                    <li v-for="(item,index) in theme_tag" :key="index" @click="handleclick(index)" :class="status==index?'active':'' ">{{item.block_alias}}</li>
                </ul>
                <ul class="v-locationList">
                    <li v-for="(item,index) in theme_lines" :key="index">
                        <a href="">
                            <span class="v-locationListTab">{{item.class_type_name}}{{item.jihe}}</span>
                            <img  class="v-locationListImg" :src="item.img">
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
import { getAroundMessage,getAroundMainT} from "api/around"; 
export default {
    name:"maintitle",
    data(){
        return {
            status:0,
            theme_lines: [], //出境游
            theme_tag: [],   //出境游标题
        }
    },
     async created() {
        let tags = await getAroundMessage();
        this.theme_tag = tags.data.theme_lines.lines.theme_tag;
        let aroundData = await getAroundMainT(this.theme_tag[this.status].id);
        this.theme_lines = aroundData.data.theme_lines;
  },
     methods:{
      async  handleclick(index){
            this.status = index;
            let aroundData = await getAroundMainT(this.theme_tag[this.status].id);
            this.theme_lines = aroundData.data.theme_lines;
        }
    }
}
</script>
<style>

</style>
