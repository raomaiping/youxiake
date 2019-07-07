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
import {getlocalSport} from "api/localhost";
export default {
    name:"outplay",
    async created(){
        let outplay = await getlocalSport();
        this.theme_tag = outplay.data.en_lines.lines.theme_tag;
        this.theme_lines = outplay.data.en_lines.lines.theme_lines;
        this.block_name  = outplay.data.en_lines.block.block_name;
    },
    data(){
        return{
            theme_tag:[],
            theme_lines:[],
            block_name:"",
            status:''
        }
    },
    methods:{
        handleClick(index){
            this.status = index;
        }
    }
}
</script>

<style>

</style>
