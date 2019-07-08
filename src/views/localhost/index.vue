<template>

    <div id="v-localhost">
    
            <!-- 头部 -->
            <Header :title="title"></Header>
            <div class="v-container">
                <!-- 轮播图 -->
                <Swiper :slide_show="slide_show"/>
                <!-- 活动指南 -->
                <LocalSportpoint :sportPoint="sportPoint"/>

                    <!-- 国内玩乐 -->
                <Inplay :Itheme_tag="Itheme_tag" :Itheme_lines="Itheme_lines" :Iblock_name="Iblock_name"/>
                
                <!-- 出境游 -->
                <Outplay :theme_tag="theme_tag" :theme_lines="theme_lines" :block_name="block_name"/>
            </div>
        </div>
</template>

<script>
import Header from "components/around/header";
import LocalSportpoint from "components/localhost/localSportpoint";
import Inplay from "components/localhost/Inplay";
import Outplay from "components/localhost/outplay";
import Swiper from "components/localhost/swiper"

import {getlocalSport} from "api/localhost";
export default {
    name:"localhost",
    components:{
        Header,
        LocalSportpoint,
        Inplay,
        Outplay,
        Swiper
    },
    props:{
        title:{
            type:String,
            default:"当地游",
            required:true
        }
    },
    async created(){
        let sportPoint = await getlocalSport();
        this.sportPoint = sportPoint.data.class;
        this.theme_tag = sportPoint.data.en_lines.lines.theme_tag;
        this.theme_lines = sportPoint.data.en_lines.lines.theme_lines;
        this.block_name  = sportPoint.data.en_lines.block.block_name;
        this.Itheme_tag = sportPoint.data.cn_lines.lines.theme_tag;
        this.Itheme_lines = sportPoint.data.cn_lines.lines.theme_lines;
        this.Iblock_name = sportPoint.data.cn_lines.block.block_name;
        this.slide_show = sportPoint.data.slide_show;
    },
    data(){
        return{
            sportPoint:[],
            theme_tag:[],
            theme_lines:[],
            block_name:"",
            Itheme_tag:[],
            Itheme_lines:[],
            Iblock_name:"",
            slide_show:[]
        }
    }
}
</script>

<style>
body,html{
    overflow: hidden;
    width: 100%;
    height: 100%;
    background: #f4f4f4;
}
#v-localhost{
    position: relative;
    width: 100%;
    height: 100%;
    overflow-y:auto; 
}
.v-around-titleall{
    width: 100%;
    background: #fff;
    margin-top: .15rem;
    position: relative;
}
.v-around-titleall>h2{
    font-size: .38rem;
    font-weight: bolder;
    color: #353535;
    line-height: 1.1rem;
    height: 1.1rem;
    position: relative;
    padding-left: .2rem;
}
.v-around-titleall>h2::after{
    content: "";
    position: absolute;
    left: 0;
    top:0.4rem;
    width: .08rem;
    height: .34rem;
    background-color:#ffd800;
}

.v-around-listall{
    width: 100%;
    overflow: hidden;
}
.v-around-listall>li{
    float: left;
    margin: 0 0 .2rem .2rem;
    width: 1.62rem;
    height: .6rem;
    line-height: .6rem;
    text-align: center;
    font-size: .32rem;
    font-weight: 700;
    overflow: hidden;
    color: #999;
    background: #f3f3f3;
}

/* 动态点击天数的样式 */
.v-around-listall .active{
    color: #333;
    background-color: #fee880;
}

/* 活动地点图片信息 */
.v-locationList{
    width: 100%;
    overflow: hidden;
    padding-left:.2rem; 
    margin-bottom:.1rem ;
}
.v-locationList>li{
   float: left;
   position: relative;
   margin-right: .2rem;
   width: 3.45rem;
   height: 3.6rem;
   margin-top: .1rem;
}
.v-locationList>li>a{
    display: block;
    width: 3.45rem;
   height: 3.6rem;
}
.v-locationList>li>a .v-locationListTab{
    position: absolute;
    left: 0;
    top:0.1rem;
    padding: .07rem .12rem;
    font-size: .2rem;
    color: #fff;
    background: rgba(0, 0, 0, 0.68);
    border-top-right-radius: .2rem;
    border-bottom-right-radius: .2rem;
}
.v-locationList>li>a .v-locationListImg{
    display: block;
    width: 100%;
    height: 1.94rem;
    /* background: url("../../img/img1.jpg") no-repeat; */
    background-size:cover; 
}

.v-locationList-detial>p{
    padding-top:.1rem;
    height: .7rem;
    line-height: .36rem;
    font-size: .3rem;
    color: #353535;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp:2;
    overflow: hidden;
}
.v-locationList-text{
    margin-top: .26rem;
    line-height: .4rem;
    overflow: hidden;
}
.v-locationList-money{
    float: left;
    font-size: .26rem;
    color: #ff7100;
}
.v-locationList-money span:nth-of-type(1){
    font-weight: 900;
    font-size: .34rem;
    line-height: .34rem;
    margin: 0 0.06rem;
}
.v-locationList-money span:nth-of-type(2){
    color: #888;
}
.v-locationList-day{
    float: right;
}
.v-locationList-more{
    height: 1.5rem;
    margin: 0 .2rem;
    border-top: 4px solid #f4f4f4;
    display: flex;
    justify-content: center;
    align-items: center;
}
.v-locationList-more .v-locationList-morelink{
    display: block;
    width: 2.4rem;
    height: .6rem;
    line-height: .6rem;
    text-align: center;
    font-size: .26rem;
    color:#333;
    background-color: #ffd800;
    border-radius:.35rem;

}

.v-localhost-autoplay{
    width: 100%;
    height: 4.22rem;
}



</style>

