<template>
    <!-- 出境玩乐 -->
    
        <div class="v-around-titleall v-around-main">
            <h2>{{block_name}}</h2>
            <ul class="v-around-listall v-around-main-list">
                <li v-for="(item,index) in theme_tag" :key="index" @click.stop="handleClick(index)" :class="status==index?'active':''">
                    <a href="javascript:;">{{item.block_alias}}</a>
                </li>
            </ul>
            <ul class="v-locationList">
                <li v-for="(item,index) in theme_lines" :key="index">
                    <a href="">
                        <span class="v-locationListTab">{{item.class_type_name}} | {{item.jihe}}</span>
                        <img class="v-locationListImg" :src="item.img"/>
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
import {getlocalSport,getlocalSportEare,getlocalSportHot} from "api/localhost";
export default {
    
    name:"outplay",
    data(){

        return{
            status:0,
            theme_tag:[],
            theme_lines:[],
            block_name:"",
        }
    },
   async  created(){
        let sportPoint = await getlocalSport();
        this.theme_tag = sportPoint.data.en_lines.lines.theme_tag;   //境外玩乐小标题
        this.block_name = sportPoint.data.en_lines.block.block_name;  //大标题
        
        // 请求热门
        let sportHot = await getlocalSportHot(this.theme_tag[0].wanle_sign);
        this.theme_lines = sportHot.data.theme_lines;
        
    },
    methods:{
        async handleClick(index){
            this.status = index;
             if(index==0){
              let sportHot = await getlocalSportHot(this.theme_tag[0].wanle_sign);
              this.theme_lines = sportHot.data.theme_lines;
          }else{

            // 请求各地区的活动
            let SportEare = await getlocalSportEare(this.theme_tag[this.status].id);
            this.theme_lines = SportEare.data.theme_lines; //境外玩乐
          }
        }
    }
}
</script>

<style>

</style>
