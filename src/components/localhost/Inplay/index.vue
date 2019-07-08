<template>
    <!-- 国内玩乐 -->
        <div class=" v-around-titleall">
            <h2>{{Iblock_name}}</h2>
            <ul class="v-around-listall">
                <li v-for="(item,index) in Itheme_tag" :key="index" @click.stop="handleClick(index)" :class="status==index?'active':''">
                    <a href="javascript:;">{{item.block_alias}}</a>
                </li>
                
            </ul>
            <ul class="v-locationList">
                <li v-for="(item,index) in Itheme_lines" :key="index">
                    <a href="">
                        <span class="v-locationListTab">{{item.class_type_name}} | {{item.jihe}}</span>
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
import {getlocalSport} from "api/localhost";

export default {
    name:"Inplay",
    props:{
        Itheme_tag:{
            type:Array,
            default:[],
            required:true
        },
        Itheme_lines:{
            type:Array,
            default:[],
            required:true
        },
        Iblock_name:{
            type:String,
            default:'',
            required:true
        }
    },
    data(){
        return{
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
